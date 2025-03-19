import React, { useState } from 'react'

function Home() {
  const [Name, setName] = useState("");
  const [Room, setRoomId] = useState("");
  const HandelSubmit =(e) => {
    e.preventDefault();
    console.log(Name);
    console.log(Room);
  }
  return (
    <div className='bg-[#F3F4F8] h-screen w-full'>
      <form onSubmit={HandelSubmit} method="post">
        <input type='text' value={Name} onChange={(e)=>{
            setName(e.target.value);
        }}></input>
        <input type='text' name={Room}  onChange={(e)=>{
            setRoomId(e.target.value);}}></input>
        <button type='submit' className='bg-amber-600'> submit</button>
        </form>
    </div>
  )
}

export default Home