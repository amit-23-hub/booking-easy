import mongoose from "mongoose";
import { BanketsType } from "../VendorsType/BanquetType";

const banketSchema = new mongoose.Schema<BanketsType>({
    userId:{type: String, required:true},
    name:{type:String, required:true},
    city:{type:String, required:true},
    country:{type:String, required:true},
    description:{type:String, required:true},
    facilities:[{type:String, required:true}],
    starRating: { type: Number, required: true, min: 1, max: 5 },
    prices: { type: Number, required: true },
    owner:{type:String, required:true},
    imageUrls:[{type:String, required:true}],
    lastUpdated:{type:Date, required:true},

})

const Banket = mongoose.model<BanketsType>("Banket",banketSchema);
export default Banket;