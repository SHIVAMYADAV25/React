import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductData } from '../context/FetchContext';

const Product = () => {

    const params:number = useParams()
    const [data,setData] = useContext(ProductData);
    console.log(data)

    const actualData = data.find((e:any)=>e.id == (params.id - 1) )
    console.log(actualData);


  return (
    <div>{actualData.title}</div>
  )
}

export default Product