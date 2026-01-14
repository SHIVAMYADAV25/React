import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductData = createContext([]);

const FetchContext = (props:React.Component) => {
    

    const [data,setData] = useState([]);

    async function getData(){
        const resp = await axios.get("https://fakestoreapi.com/products")
        // console.log(resp)
        setData(resp.data)
    }

    useEffect(()=>{
        getData();
    },[])


  return (
    <ProductData.Provider value={[data,setData]}>
      {props.children}
    </ProductData.Provider>
  )
}

export default FetchContext