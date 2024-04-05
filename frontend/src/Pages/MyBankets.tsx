import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import * as apiClient from '../Api/AddBanquetApi'
import { BsMap } from "react-icons/bs";
import { BiMoney, BiStar } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { TbWorldPin } from "react-icons/tb";

const MyBankets = ()=>{
    const {data:banquetData} = useQuery("fetchMyBankets",apiClient.fetchMyBankets,{
        onError:()=>{

        }
    });
    if(!banquetData){
        return <span>No Banquets Found</span>
    }

    return(
        <div className="space-y-5">
        <span className="flex justify-between">
            <h1 className="text-3xl font-bold">All Bankets</h1>
            <Link to="/add-banquet" className="flex bg-red-600 text-white text-xl font-bold p-2 hover:bg-red-500">
             Add Banquet
            </Link>
        </span>
        <div className="grid grid-cols-1 gap-8">
            {banquetData.map((banquet)=>(
                <div className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5">
                    <h2 className="text-2xl font-bold">{banquet.name}</h2>
                    <div className="whitespace-pre-line">{banquet.description}</div>
                    <div className="grid grid-cols-5 gap-2">
                        <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                            <BsMap className="mr-1"/>
                            {banquet.city}
                        </div>
                        <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                            <BiMoney className="mr-1"/>
                            {banquet.prices}
                        </div>
                        <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                            <BiStar className="mr-1"/>
                            {banquet.starRating}
                        </div>
                        <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                            <IoPerson className="mr-1"/>
                            {banquet.owner}
                        </div>
                        <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                        <TbWorldPin className="mr-1"/>
                            {banquet.country}
                        </div>
                    </div>

                    
            <span className="flex justify-end">
            <Link to={`/update-banquet/${banquet._id}`} className="flex bg-red-600 text-white text-xl font-bold p-2 hover:bg-red-500">
                View Details
            </Link>
            </span>

                </div>
            ))}
        </div>

        </div>
    ) 
}
export default MyBankets