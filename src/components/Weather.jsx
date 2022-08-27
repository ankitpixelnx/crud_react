import axios from "axios";
import React, { useState } from "react";
const Weather=()=>{ 
    let [city,updatecity]=useState('indore');
    let [data,updatedata]=useState({temp:'',city:'',icon:'',state:'',situation:''});
return(
    <>
    <input type="text" name="name" value={city} onChange={(e)=>{
        updatecity(e.target.value);
    }} />
    <img src={data.icon} alt="noimage" />
    <h1>{data.city}</h1>
    <h2>{data.temp}</h2>
    <h2>{data.state}</h2>
    <h2>{data.situation}</h2>
    <button onClick={()=>{
        async function show()
        {
            let r=await axios.get(`https://api.weatherapi.com/v1/current.json?key=e87ff57f979c4616a9b160742221106&q=${city}&aqi=no`);
            updatedata({temp:r.data.current.temp_c,city:r.data.location.name,icon:r.data.current.condition.icon,state:r.data.location.region,situation:r.data.current.condition.text});
        }
        show();
    }}>Get Weather</button>
    </>
)
}
export default Weather;