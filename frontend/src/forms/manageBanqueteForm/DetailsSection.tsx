import { useFormContext } from "react-hook-form"
import { BanqueteFormData } from "./manageBanquetForm";

const DetailsSecion = () =>{
    const {register, formState:{errors},} = useFormContext<BanqueteFormData>();
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl form-bold mb-3">
                Add Banquete
            </h1>
         <label className="text-gray-700 text-sm font-bold flex-1">
            Banquete Name
             <input
             type="text"
             className="border rounded w-full py-1 px-2 font-normal"
             {...register("name", { required: "This field is required" })}
             ></input>
            {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
            )}
         </label>
         <div className="flex gap-4">
         <label className="text-gray-700 text-sm font-bold flex-1">
             City
             <input
             type="text"
             className="border rounded w-full py-1 px-2 font-normal"
             {...register("city", { required: "This field is required" })}
             ></input>
            {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
            )}
         </label>

         <label className="text-gray-700 text-sm font-bold flex-1">
             Country
             <input
             type="text"
             className="border rounded w-full py-1 px-2 font-normal"
             {...register("country", { required: "This field is required" })}
             ></input>
            {errors.country && (
            <span className="text-red-500">{errors.country.message}</span>
            )}
         </label>

         </div>

         <label className="text-gray-700 text-sm font-bold flex-1">
             Description
             <textarea
             rows={10}
             className="border rounded w-full py-1 px-2 font-normal h-48"
             {...register("name", { required: "This field is required" })}
             ></textarea>
            {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
            )}
         </label>

         <label className="text-gray-700 text-sm font-bold max-w-[50%]">
             Price For 24 Hour
             <input
             type="number"
             min={1}
             className="border rounded w-full py-1 px-2 font-normal"
             {...register("name", { required: "This field is required" })}
             ></input>
            {errors.prices && (
            <span className="text-red-500">{errors.prices.message}</span>
            )}
         </label>

         <label className="text-gray-700 text-sm font-bold max-w-[50%]">
             Rating

            <select {...register("starRating",{
                required:"This Field is required",
            })} className="border rounded w-full p-2 text-gray-700 font-normal">
                <option value="" className="text-sm font-bold">
                    Select as Rating
                </option>
                {[1,2,3,4,5].map((num)=>(
                    <option value={num}>{num}</option>
                ))}
            </select>
             
            {errors.starRating && (
            <span className="text-red-500">{errors.starRating.message}</span>
            )}
         </label>

         <label className="text-gray-700 text-sm font-bold flex-1">
             Owner Name
             <input
             type="text"
             className="border rounded w-full py-1 px-2 font-normal"
             {...register("owner", { required: "This field is required" })}
             ></input>
            {errors.owner && (
            <span className="text-red-500">{errors.owner.message}</span>
            )}
         </label>

            
        </div>

    )
}

export default DetailsSecion;