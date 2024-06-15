import express, {Request, Response} from 'express'
import Banket from '../Models/Banket';
import { BanquetSearchResponse } from '../VendorsType/BanquetType';

const router = express.Router();

router.get("/search", async(req:Request, res:Response)=>{
    try {
        const pageSize = 5;
        const pageNumber = parseInt(
            req.query.page ? req.query.page.toString() : "1"
        );

        const skip = (pageNumber-1)*pageSize; 
        const banquets = await Banket.find().skip(skip).limit(pageSize);

        const total = await Banket.countDocuments();
        const response : BanquetSearchResponse = {
            data: banquets,
            pagination:{
                total,
                page:pageNumber,
                pages:Math.ceil(total/pageSize),
            },
        };
        res.json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong"});
    }
})

export default router