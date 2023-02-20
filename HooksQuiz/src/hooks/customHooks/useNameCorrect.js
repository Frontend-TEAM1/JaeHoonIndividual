import { useEffect, useState } from "react";

const useNameCorrect =(name)=>{
    const [isNameCorrect, setNameIsCorrect] = useState(false);
   
    useEffect(()=>{
      if(name === '김성용'){
        setNameIsCorrect(true)
      }
      else{setNameIsCorrect(false)
      }
      },[name]);

    return [isNameCorrect];
  
   }

   export default useNameCorrect;