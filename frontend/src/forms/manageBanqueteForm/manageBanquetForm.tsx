import { FormProvider, useForm } from "react-hook-form";
import DetailsSecion from "./DetailsSection";
import Facilities from "./Facilities";
import ImagesSection from "./imageSection";
import { BanketsType } from "../../../../backend/src/VendorsType/BanquetType";
import { useEffect } from "react";

export type BanqueteFormData = {
    name:string;
    city:string;
    country:string
    description:string;
    type:string;
    prices:string;
    starRating:string;
    owner:string;
    facilities:string[];
    imageFiles:FileList;
    imageUrls:string[];

}

type Props = {
    banquet?: BanketsType;
    onSave:(banquetFormData:FormData)=> void;
    isLoading:boolean;
}

const ManageBanqueteForm = ({onSave, isLoading,banquet}:Props) =>{
    const formMethods = useForm<BanqueteFormData>();

    const {handleSubmit, reset} = formMethods;
    
    useEffect(()=>{
        reset(banquet);
    },[banquet,reset]);

    const onSubmit = handleSubmit((formDataJson: BanqueteFormData)=>{
        const formData = new FormData();

        if(banquet){
            formData.append("banquetId",banquet._id);
        }

        formData.append("name",formDataJson.name);
        formData.append("city",formDataJson.city);
        formData.append("country",formDataJson.country);
        formData.append("description",formDataJson.description);
        formData.append("prices",formDataJson.prices);
        formData.append("starRating",formDataJson.starRating);
        formData.append("prices",formDataJson.prices);
        formData.append("owner",formDataJson.owner);

        formDataJson.facilities.forEach((facility,index)=>{
            formData.append(`facilities[${index}]`,facility)
        })
        

        

        if(formDataJson.imageUrls){
            formDataJson.imageUrls.forEach((url,index)=>{
                formData.append(`imageUrls[${index}]`,url);
            });
        }

        Array.from(formDataJson.imageFiles).forEach((imageFile)=>{
            formData.append(`imageFiles`,imageFile);

        });


        onSave(formData)
    })

    return (
        <FormProvider {...formMethods}>
            <form className="flex flex-col gap-10" onSubmit={onSubmit}>  
                <DetailsSecion/>
                <Facilities/>
                <ImagesSection/>
                <span className="flex justify-end">
                    <button 
                    disabled={isLoading}
                    type="submit" 
                    className="bg-red-600 text-white p-2 font-bold hover:bg-green-500 disabled:bg-gray-500">
                        {isLoading?"Saving...":"Save"}
                        </button>
                </span>
            </form>
        </FormProvider>
        

    )

}
export default ManageBanqueteForm