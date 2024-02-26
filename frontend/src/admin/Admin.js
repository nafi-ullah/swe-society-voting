import React, { useEffect, useState } from "react";
import { getProducts } from "../Utils"; 
import Cart from "./Cart";

const Admin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getProducts();
            console.log(response);
            setData(response);

            //console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className='w-full '>
<div className="w-full text-center text-5xl"><u>Vote Result</u></div>
 <div className="flex flex-wrap m-16">
 {data && data.map((product, index) => (
    <div key={index}>
      {product.candidatePost === "general_secretary" && (
        <Cart
          key={index} // Add a unique key prop
          name={product.candidateName}
          post={product.candidatePost}
          image={product.candidateImage}
          marka={product.candidateMarkaImage}
          vote={product.vote}

        />
      )}
    </div>
  ))}
  <hr/>
 </div>
  <div className="w-full h-[2px] bg-slate-600"></div>
  {/* new post */}
  <div className="flex w-full flex-wrap m-16">
 {data && data.map((product, index) => (
    <div key={index}>
      {product.candidatePost === "vice_president" && (
        <Cart
          key={index} // Add a unique key prop
          name={product.candidateName}
          post={product.candidatePost}
          image={product.candidateImage}
          marka={product.candidateMarkaImage}
          vote={product.vote}

        />
      )}
    </div>
  ))}
  <hr/>
 </div>
  <div className="w-full h-[2px] bg-slate-600"></div>

  {/* new post */}
  <div className="flex w-full flex-wrap m-16">
 {data && data.map((product, index) => (
    <div key={index}>
      {product.candidatePost === "assistant_general_secretary" && (
        <Cart
          key={index} // Add a unique key prop
          name={product.candidateName}
          post={product.candidatePost}
          image={product.candidateImage}
          marka={product.candidateMarkaImage}
          vote={product.vote}

        />
      )}
    </div>
  ))}
  
 </div>
  <div className="w-full h-[2px] bg-slate-600"></div>

  {/* new post */}
  <div className="flex w-full flex-wrap m-16">
 {data && data.map((product, index) => (
    <div key={index}>
      {product.candidatePost === "organizing_secretary" && (
        <Cart
          key={index} // Add a unique key prop
          name={product.candidateName}
          post={product.candidatePost}
          image={product.candidateImage}
          marka={product.candidateMarkaImage}
          vote={product.vote}

        />
      )}
    </div>
  ))}
  
 </div>
  <div className="w-full h-[2px] bg-slate-600"></div>

  {/* new post */}
  <div className="flex w-full flex-wrap m-16">
 {data && data.map((product, index) => (
    <div key={index}>
      {product.candidatePost === "sports_secretary" && (
        <Cart
          key={index} // Add a unique key prop
          name={product.candidateName}
          post={product.candidatePost}
          image={product.candidateImage}
          marka={product.candidateMarkaImage}
          vote={product.vote}

        />
      )}
    </div>
  ))}
  
 </div>
  <div className="w-full h-[2px] bg-slate-600"></div>

  {/* new post */}
  <div className="flex w-full flex-wrap m-16">
 {data && data.map((product, index) => (
    <div key={index}>
      {product.candidatePost === "publication_secretary" && (
        <Cart
          key={index} // Add a unique key prop
          name={product.candidateName}
          post={product.candidatePost}
          image={product.candidateImage}
          marka={product.candidateMarkaImage}
          vote={product.vote}

        />
      )}
    </div>
  ))}
  
 </div>
  <div className="w-full h-[2px] bg-slate-600"></div>

  {/* new post */}
  <div className="flex flex-wrap w-full m-16">
 {data && data.map((product, index) => (
    <div key={index}>
      {product.candidatePost === "assistant_publication_secretary" && (
        <Cart
          key={index} // Add a unique key prop
          name={product.candidateName}
          post={product.candidatePost}
          image={product.candidateImage}
          marka={product.candidateMarkaImage}
          vote={product.vote}

        />
      )}
    </div>
  ))}
  
 </div>
  <div className="w-full h-[2px] bg-slate-600"></div>






</div>

  )
}

export default Admin