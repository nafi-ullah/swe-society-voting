export const postCred = async ({regno, password}) => {
    try {
      const uri = 'http://localhost:5000';
  
      const data = { regno, password };
    //   console.log(data);
  
      const response = await fetch(`${uri}/api/signin/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
        // console.log(responseData);
  
      return responseData;
    } catch (error) {
      console.error("Error:", error);
  
    }
  };