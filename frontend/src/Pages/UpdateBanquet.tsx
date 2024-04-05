import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from '../Api/AddBanquetApi';
import ManageBanqueteForm from "../forms/manageBanqueteForm/manageBanquetForm";

const UpdateBanquet = () => {
    const { banquetId } = useParams();

    const { data: banquet, isLoading, isError } = useQuery(["fetchMyBanketsById", banquetId], () =>
        apiClient.fetchMyBanketsById(banquetId || ''), {
        enabled: !!banquetId,
    });

    const { mutate, isLoading: isUpdating } = useMutation(apiClient.updateMyBanquetId, {
        onSuccess: () => { },
        onError: () => { }
    });

    const handleSave = (banquetFormData: FormData) => {
        mutate(banquetFormData);
    }

    if (isError) {
        return <div>Error fetching banquet data.</div>;
    }

    return (
        <ManageBanqueteForm banquet={banquet} onSave={handleSave} isLoading={isLoading || isUpdating} />
    );
}

export default UpdateBanquet;
