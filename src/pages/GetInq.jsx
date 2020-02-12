import React, {useState, useEffect} from 'react'
import { axiosWithoutAuth } from '../configs/Axios'
import axios from 'axios'
const GetInq = () => {
    const [inquiry, setInquiry] = useState()

    useEffect(() => {
        return axios.get('http://localhost:2019/api/signup/burnsign')
        .then((res) => {
            console.log(res.data)
            setInquiry(res.data)
        })
    
    }, [])
    return (
        <div className="mnPg">
{inquiry && inquiry.map((inquiries) => {
       return(
        <div className="inquiryCard">
        <h1>{inquiries.fname}</h1>
        </div>)  })}   
        </div>
    )
}

export default GetInq

