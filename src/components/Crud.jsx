import { useEffect, useState } from 'react';
import axios from 'axios';
function Crud() {
  let [lang,updatelang]=useState({id:'',lname:'',duration:'',trainer:'',fees:''});
  let [data,updateData]=useState([]);
  useEffect(()=>{
    async function show()
    {
      var d=await axios.get("http://restp.herokuapp.com/language/");
      updateData(d.data);
    }
    show();
  });
  const change=(e)=>{
    updatelang({...lang,[e.target.name]:e.target.value});
  }
  return (
    <>
    <table className='table table-bordered table-center'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Language Name</th>
          <th>Duration</th>
          <th>Trainer</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v)=>{
            return <tr key={v.id}><td>{v.id}</td><td>{v.lname}</td><td>{v.duration}</td><td>{v.trainer}</td><td>{v.fees}</td>
            <td><button className='btn btn-danger' onClick={()=>{
              async function deleteData(id=v.id)
              {
                 let r=await axios.delete(`http://restp.herokuapp.com/language/${id}/`);
                 if(r.status===204)
                 {
                   alert("data sucessfully deleted");
                 }
              }
              deleteData();
            }}>Delete</button></td>
            <td><button className='btn btn-warning' onClick={()=>{
              updatelang(v);
            }}>Update</button></td>
            </tr>
        })}
      </tbody>
    </table>
    <form onSubmit={(e)=>{
      e.preventDefault();
      async function addData()
      {
        if(lang.id==="")
        {
          let r=await axios.post("http://restp.herokuapp.com/language/",lang);
          if(r.status===201)
          {
            alert('data added sucessfully');
          }
        }
        else{
          let r=await axios.put(`http://restp.herokuapp.com/language/${lang.id}/`,lang);
          if(r.status===200)
          {
            alert('data updated sucessfully')
          }
        }
        updatelang({id:'',lname:'',duration:'',trainer:'',fees:''});
      }
      addData();
    }}>
      <div className='form-group'>
        <label>Language Name</label>
        <input type="text" className='form-control' name="lname" value={lang.lname} onChange={change} placeholder="please enter language name" />
      </div>
      <div className='form-group'>
        <label>Duration</label>
        <input type="text" name="duration" className='form-control' value={lang.duration} onChange={change} placeholder="please enter duration" />
      </div>
      <div className='form-group'>
        <label>Trainer</label>
        <input type="text" name="trainer" className='form-control' value={lang.trainer} onChange={change} placeholder="please enter trainer name" />
      </div>
      <div className='form-group'>
        <label>Fees</label>
        <input type="number" name="fees" className='form-control' value={lang.fees} onChange={change} placeholder="please enter feese" />
      </div>
      <button className='btn btn-primary'>Add Language</button>
    </form>
    </>
  );
}
export default Crud;
