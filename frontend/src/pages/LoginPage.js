
import React, {  useState } from "react";
import { postCred } from "../Utils"; 

const LoginPage = () => {
    const [regno, setRegno] = useState('');
    const [password, setPassword] = useState('');


    const handleButtonClick = async () => {
    
    
    
        try{
     console.log("button" + regno);
     console.log("button" + password);
          const response = await postCred({
            regno,
            password,
          }
         );
    
        //   console.log('Response:', regno);
        //   console.log('Response:', password);
        console.log(response);
    
        }catch(e){
          console.error('Error:', e);
        }
    
      };



  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">Software engineering is not just a job, it’s a passion. Thank you for being part of this amazing team and committee that makes our dreams come true.</h1>
      <p className="leading-relaxed mt-4">“Democracy is based upon the conviction there are extraordinary possibilities in ordinary people.” — Harry Emerson Fosdick, American pastor</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log In</h2>
      <div className="relative mb-4">
        <label htmlFor="Registration-No" class="leading-7 text-sm text-gray-600">Registration No</label>
        <input type="text" id="regno" name="regno" value={regno} onChange={(e) => setRegno(e.target.value)}  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="Registration-no" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={handleButtonClick } className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log in</button>
      <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>
</section>
  )
}

export default LoginPage