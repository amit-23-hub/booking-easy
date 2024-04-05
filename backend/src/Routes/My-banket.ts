import express, { Request, Response } from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary';
import Banket from '../Models/Banket';
import { BanketsType } from '../VendorsType/BanquetType';
import verifyToken from '../middleware/auth';
import { body } from 'express-validator';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
})

router.post("/", verifyToken, [
    body("name").notEmpty().withMessage('Name is required'),
    body("city").notEmpty().withMessage('City is required'),
    body("country").notEmpty().withMessage('country is required'),
    body("discription").notEmpty().withMessage('Discription is required'),
    body("prices").notEmpty().isNumeric().withMessage('Price is required'),
    body("facilities").notEmpty().withMessage('Facilities is required'),

], upload.array("imageFiles", 6), async (req: Request, res: Response) => {
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newBanket: BanketsType = req.body;

        // Upload images to cloudinary
        const imageUrls = await uploadImage(imageFiles);

        newBanket.imageUrls = imageUrls;
        newBanket.lastUpdated = new Date();
        newBanket.userId = req.userId;

        // Save the new banquet to the database
        const banket = new Banket(newBanket);
        await banket.save();

        res.status(201).send(banket);

    } catch (error) {
        console.error("Error creating banquet:", error);
        res.status(500).json({ message: "Something Went Wrong" });
    }
})

router.get("/", verifyToken, async (req: Request, res: Response) => {
    try {
        const bankets = await Banket.find({ userId: req.userId })
        res.json(bankets);

    } catch (error) {
        console.error("Error fetching banquets:", error);
        res.status(500).json({ message: "Error fetching banquets" });
    }
})

router.get("/:id", verifyToken, async (req: Request, res: Response) => {
    const id = req.params.id.toString();
    try {
        const banket = await Banket.findOne({
            _id: id,
            userId: req.userId,
        });
        if (!banket) {
            return res.status(404).json({ message: "Banquet not found" });
        }
        res.json(banket);

    } catch (error) {
        console.error("Error fetching banquet:", error);
        res.status(500).json({ message: "Error fetching banquet" });
    }
})

router.put("/:banquetId", verifyToken, upload.array("imageFiles"), async (req: Request, res: Response) => {
    try {
        const updatedBanquet: BanketsType = req.body;
        updatedBanquet.lastUpdated = new Date();
        const banket = await Banket.findOneAndUpdate({
            _id: req.params.banquetId,
            userId: req.userId,
        }, updatedBanquet,
            { new: true }
        );
        if (!banket) {
            return res.status(404).json({ message: "Banquet not found" });
        }

        const files = req.files as Express.Multer.File[];
        const updatedImageUrls = await uploadImage(files);

        banket.imageUrls = [...updatedImageUrls, ...(updatedBanquet.imageUrls || [])];

        await banket.save();

        res.status(200).json(banket)

    } catch (error) {
        console.error("Error updating banquet:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

async function uploadImage(imageFiles: Express.Multer.File[]) {
    const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";base64," + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
    });

    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
}

export default router;
