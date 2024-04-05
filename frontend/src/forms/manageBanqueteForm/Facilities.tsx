import { useFormContext } from "react-hook-form";
import { banquetFacilities } from "../../config/banqueteFacilities";
import { BanqueteFormData } from "./manageBanquetForm";

const Facilities = () =>{
    const {register, formState:{errors}} = useFormContext<BanqueteFormData>();
    return(

        <div>
            <h2 className="text-2xl font-bold mb-3">Facilities</h2>
            <div className="grid grid-cols-5 gap-5">
                {banquetFacilities.map((facility)=>(
                    <label className="text-sm flex gap-1">
                        <input type="checkbox" 
                        value={facility} 
                        {...register("facilities",{
                            validate:(facilities)=>{
                                if(facilities && facilities.length >0){
                                    return true
                                }
                                else {
                                    return "At least one facility is required";
                                }
                            }
                        })}/>
                        {facility}
                    </label>
                ))}
            </div>
            {errors.facilities && (
                <span className="text-red-500 text-sm font-bold">{errors.facilities.message}</span>
            )}
        </div>

    )
}
export default Facilities