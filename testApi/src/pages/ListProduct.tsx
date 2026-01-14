import React, { useContext, useEffect } from 'react'
import { ProductData } from '../context/FetchContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ListProduct = () => {

    const navigate = useNavigate()

    const [data,setData] = useContext(ProductData)

    // console.log(data)

  return (
    <div>
        {data.map((e,index:number)=>(
            <div key={index}>

            <div onClick={()=>{navigate(`/product/${index}`)}}> {e.title} </div>

            </div>
        ))}
    </div>
  )
}

export default ListProduct