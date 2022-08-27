import axios from "axios";
import React, { useState } from "react";
const Search=()=>{
    let [data,updatedata]=useState(0);
    let [lang,updatelang]=useState({id:'',lname:'',duration:'',trainer:'',fees:''});
return(
    <>
        <input type="text" name="id" value={data} placeholder="please enter id" onChange={(e)=>{
            updatedata(e.target.value);
        }} />
        <button className="btn btn-secondary" onClick={()=>{
            async function show()
            {
                try {
                let r=await axios.get(`http://restp.herokuapp.com/language/${data}/`);
                if(r.status===200)
                {
                    updatelang(r.data)
                }
            } catch (error) {
             alert('no records found')       
            }
            }
            show();
        }}>Search</button>
        <div>
            {lang.id!==""? <h2>Id : {lang.id} Name: {lang.lname} Duration : {lang.duration} Fees:{lang.fees} Trainer:{lang.trainer}</h2>:null}
        </div>
    </>
)
}
export default Search;