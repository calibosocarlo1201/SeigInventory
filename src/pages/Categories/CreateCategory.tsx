// CreateCategory.tsx
import DefaultLayout from '../../layout/DefaultLayout'
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'
import ReusableInput from '../../components/Forms/ReusableInput'
import ReusableSubmitBtn from '../../components/Forms/ReusableSubmitBtn'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'

// Define FormFields type
export type FormFields = {
    categoryName: string;
    categoryDescription: string;
    categoryID: string;
};

const pattern = /^[a-zA-Z0-9\s]*$/;

const schema = z.object({
    categoryName: z.string().min(1, 'Category Name is required.').regex(pattern, "Special Characters are not allowed."),
    categoryDescription: z.string().regex(pattern, "Special Characters are not allowed."),
    CategoryID: z.string()
});

const CreateCategory = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormFields>({
        resolver: zodResolver(schema)
    });

    const [categID, setCategID] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    }, [categID])

    useEffect(() => {  
        handleGetCategoryLatestID()
    }, []);

    const onSubmit = (data: FormFields) => {
        console.log(data);
        handleSave(data);
    }

    const handleSave = async (data: FormFields) => {
        //console.log('submitted');
        try{
            const response = await axios.post('https://localhost:7269/api/Categories/Post',data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            reset();
            toast.success(`Category ${data.categoryName} has been added successfully!`);
            handleGetCategoryLatestID();
        }catch(error){
            console.log(error);
        }
    }

    const handleGetCategoryLatestID = async () => {
        try{
            const response = await axios.get('https://localhost:7269/api/Categories/LatestCategoryID/Get');
            setCategID(response.data);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Category" />
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Create New
                    </h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-6.5">
                        <div className="mb-4.5">
                        <ReusableInput name="CategoryID" label="Category ID" placeholder='' value={categID} register={register} readonly />
                        </div>
                        <div className="mb-4.5">
                            <ReusableInput name="categoryName" label="Category Name" placeholder='Enter Category Name' register={register} />
                            {errors.categoryName && (
                                <span className="text-red-500">{errors.categoryName.message}</span>
                            )}
                        </div>

                        <div className="mb-4.5">
                            <ReusableInput name="categoryDescription" label="Category Description" placeholder='Enter Category Description' isTextArea register={register} />
                            {errors.categoryDescription && (
                                <span className="text-red-500">{errors.categoryDescription.message}</span>
                            )}
                        </div>
                        <ReusableSubmitBtn disabled={isLoading}>Save</ReusableSubmitBtn>
                    </div>
                </form>
            </div>
        </DefaultLayout>
    )
}

export default CreateCategory
