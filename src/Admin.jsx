import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin=()=>{
    let [data,updatedata]=useState({name:'',pwd:''});
    let nav=useNavigate();
    const change=(e)=>{
        updatedata({...data,[e.target.name]:e.target.value});
    }
    return(<>
    <form onSubmit={(e)=>{
        e.preventDefault();
        if(data.name==="admin"&&data.pwd==="12345")
        {
            nav("/crud");
        }
        else{
            alert("Invalid id and password");
            nav("/admin")
        }
    }}>
        Name<input type="text" name="name" onChange={change} /><br/>
        Password<input type="password" name="pwd" onChange={change} /><br/>
        <button>Login</button>
    </form>
    </>)
}
export default Admin;