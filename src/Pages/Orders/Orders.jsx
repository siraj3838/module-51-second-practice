
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import OrderCard from "./Order/OrderCard";

const Orders = () => {
    const [data, setData] = useState([])
    const apiData = useLoaderData()
    useEffect(()=>{
        setData(apiData)
    },[apiData])
    return (
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {
                data.map(sdata => <OrderCard key={sdata.id} sdata={sdata}></OrderCard>)
            }
            
        </div>
    );
};

export default Orders;