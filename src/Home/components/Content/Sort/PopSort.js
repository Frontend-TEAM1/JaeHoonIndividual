import React, { useEffect, useState } from "react";
import Moive from "../../../../components/Movie";
import { dummy } from "../../../../moiveDummy";

export function  PopSort(){
    
    const[sortedData,setSortData]=useState([]);

    useEffect(()=>{
        setSortData(dummy.results.sort((a,b) => b.popularity - a.popularity));
    },[]);
   
    sortedData.results.map((item)=>{
        return(<Moive
        title={item.title}
        poster_path={item.poster_path}
        vote_average={item.vote_average}
        release_date={item.release_date}
        />
        
        )})
    
    
}