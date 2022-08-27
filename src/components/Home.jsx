import { useEffect, useState } from 'react';
import axios from 'axios';
import Rcard from './Card';
function Home() {
  let [data,updateData]=useState([]);
  useEffect(()=>{
    async function show()
    {
      var d=await axios.get("http://restp.herokuapp.com/language/");
      updateData(d.data);
    }
    show();
  });
  return (
    <>
    <div className='row'>
        {data.map((v)=>{
            return (<div className='col-sm-3'>
                <Rcard id={v.id} lname={v.lname} duration={v.duration} trainer={v.trainer} fees={v.fees} />
            </div>)
        })}
        </div>
    </>
  );
}
export default Home;
