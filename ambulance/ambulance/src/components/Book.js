import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Book() {
  const[id,setid]=useState('')
  const[mobilenumber,setMobilenumber]=useState(0)
  const[address,setAddress]=useState('')
  const[bookinglist,setBookinglist]=useState([])
  const[current,setCurrent]=useState('create')

  //update staus
  const[id1,setid1]=useState('')
  const[mobilenumber1,setMobilenumber1]=useState(0)
  const[address1,setAddress1]=useState('')
  const[bookinglist1,setBookinglist1]=useState([])
  const[ispopup,setispopup] = useState(false)

  //read ambulance booking list
    useEffect(() => {
      axios.get(`http://localhost:3001/user/getUsers`)
      .then(res =>{setBookinglist(res.data)})
      .catch(err=>{console.log(err)})
    },[])

// create post ambulance booking
const handlesubmit = (e)=>{
  e.preventDefault()
  axios.post(`http://localhost:3001/user/submit`,{mobilenumber,address})
  .then(res=>{setBookinglist(res.data)})
  .catch(err=>console.log(err))
}
//create update ambulance booking
const handleupdate = ()=>{
  axios.put(`http://localhost:3001/user/update/${id1}`,
  {
    mobilenumber: mobilenumber1,address:address1
  })
  .then(res=>{console.log(res)})
  // alert('update successfully')
  .catch(err => console.log(err))
}
const opeOpoup =(x)=>{
  setispopup(true)
  setid1(x.id);setMobilenumber1(x.mobilenumber1);setAddress1(x.address1)
}

//create delete ambulance booking
const handledelete = (id)=>{
  axios.delete(`http://localhost:3001/user/delete/${id}`)
  .then(res=>{console.log(res)})
  // alert('delete successfully')
  .catch(err => console.log(err))
}
  return (
    <div>
      <h1>Ambulance bookinglist</h1>
      <button onClick={() =>setCurrent('create')}>Create</button>
      <button onClick={()=>setCurrent('read')}>Read</button>
      {current == "create" &&
      <div className='form2'>
        <form onSubmit={handlesubmit}>
          <label>Mobile Number:</label>
          <input type='number'value={mobilenumber} onChange={(e)=>{setMobilenumber(e.target.value)}} /><br/>
          <label>Address:</label>
          <textarea type='text' value={address} onChange={(e)=>{setAddress(e.target.value)}}/><br/>
          <button type='submit'>submit</button>
        </form>
      </div>}

      {current == "read" &&
      <table>
        <tr>
          <th>mobilenumber</th>
          <th>address</th>
          <th>Actions</th>
        </tr>

        <tbody>
          {
            bookinglist.map(x =>(
              <tr key={x.id}>
                <td>{x.mobilenumber}</td>
                <td>{x.address}</td>
                <td>
                  <button onClick={()=>handleupdate(x.id)}>update</button>
                  <button onClick={()=>handledelete(x.id)}>delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>}
      <br/>
      {
        ispopup && (
          <div className='form1'>
            <button onClick={()=>{setispopup(false) }}>booking edit</button>
        <form onSubmit={handleupdate}>
          <label>Mobile Number:</label>
          <input type='number'value={mobilenumber1} onChange={(e)=>{setMobilenumber1(e.target.value)}} /><br/>
          <label>Address:</label>
          <textarea type='text' value={address1} onChange={(e)=>{setAddress1(e.target.value)}}/><br/>
          <button type='submit'>update data</button>
        </form>
      </div>
        )
      }
    </div>
  )
}
