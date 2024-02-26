
import React, {  useState } from "react";
import { getVotername } from "../Utils"; 

export const Verify = () => {
    const [regno, setRegno] = useState('');
    const [data, setData] = useState([]);


    const handleButtonClick = async () => {

        try{
            const response = await getVotername({
                regno,
              }
             );
             console.log(response);
             setData(response);

        }catch(err){
            console.error('Error:', err);
        }
      }


  return (
    <section className="text-gray-600 body-font">
    <div className=" px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="w-4/6 h-full border-2 border-gray-500">
        {data && data.map((product, index) => (
        
              <div>{product}<br/> </div>
      ))}
        </div>
      
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log In</h2>
        <div className="relative mb-4">
          <label htmlFor="Registration-No" class="leading-7 text-sm text-gray-600">Registration No</label>
          <input type="text" id="regno" name="regno" value={regno} onChange={(e) => setRegno(e.target.value)}  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        {/* <div className="relative mb-4">
          <label htmlFor="Registration-no" class="leading-7 text-sm text-gray-600">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div> */}
        <button onClick={handleButtonClick } className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log in</button>
        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
      </div>
    </div>
  </section>
  )
}
