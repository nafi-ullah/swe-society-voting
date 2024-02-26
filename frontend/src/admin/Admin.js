import React, { useEffect, useState } from "react";
import { getProducts } from "../Utils"; 
import Cart from "./Cart";

const Admin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getProducts();
            setData(response.results);

            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className='grid grid-cols-2 gap-4 '>
      {data && data.map((product, index) => (
         <div>
               <Cart
          key={index} // Add a unique key prop
          results={product}
         

        />
             
         </div>
       
      ))}
    </div>
  )
}

export default Admin