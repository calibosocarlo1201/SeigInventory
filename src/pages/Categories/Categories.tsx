import { useEffect, useState } from 'react'
import ReusableTable from '../../components/ReusableTable/ReusableTable'
import axios from 'axios';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const Categories = () => {

    const [categData, setCategData] = useState([]);
    // const [error, setError] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('https://localhost:7269/api/Categories/Get');
                setCategData(response.data);
            }catch(error){
                console.log(error);
            }
        };

        fetchData();
    }, [])

    const headers = [
        { title: "Category ID" },
        { title: "Category Name" },
    ]

    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Categories" />
                <ReusableTable headers={headers} data={categData}  />
            </DefaultLayout>
        </>
    )
}

export default Categories