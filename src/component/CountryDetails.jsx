import React, { useState,useEffect } from 'react'
import { useLocation,useParams } from 'react-router-dom'

function CountryDetails() {
    var x=useParams()
    var [details,setDetails]=useState([])
    useEffect(()=>{
        fetch(`https://restcountries.com/v3/name/${x.cname}`)
        .then(res=>res.json())
        .then((data)=>{
            setDetails([data[0]])
        })
        },[x.cname])

        console.log(details)
    return (
        <div className='container'>
            <h1>{x.cname}CountryDetails</h1>
            <h1>{details.population}</h1>
            <h1>{details.capital}</h1>
             <img src={details[0].flags[0]} alt="" />
            
    </div>
  )
}
export default CountryDetails
