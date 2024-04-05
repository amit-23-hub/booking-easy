import { useMutation } from "react-query";
import ManageBanqueteForm from "../forms/manageBanqueteForm/manageBanquetForm";
import * as apiClient from '../Api/AddBanquetApi'
import { useAppContext } from "../contexts/AppContext";

const AddBanket = () =>{
    const {showToast} = useAppContext();

    const {mutate, isLoading} = useMutation(apiClient.addMyBanquet,{
        onSuccess:()=>{
            showToast({message: "Banquet Saved!",type:"SUCCESS"});
        },
        onError:()=>{
            showToast({message:"Error Saving Banquet", type:"ERROR"})
        },
    });

    const  handleSave = (banquetFormData: FormData)=>{
        mutate(banquetFormData)
    }

    return(
        <ManageBanqueteForm onSave={handleSave} isLoading={isLoading}/>
    )
};

export default AddBanket;