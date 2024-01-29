"use client"
import React, { useState } from 'react'

function page() {
  const[title,settitle]=useState('')
  const [desc,setdesc]=useState('')
  const [mainTask,setmainTask]=useState([]);

  const submitHandler=(e)=>{
    e.preventDefault();
    setmainTask([...mainTask,{title,desc }]);
    settitle("");
    setdesc("");
  }
  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1);
    setmainTask(copyTask);
  }
  
  let renderTask=<h2>No Task Available</h2>
  if (mainTask.length >0 ) {
    renderTask = mainTask.map((t,i)=>{
      return( 
        <li key={i} className='flex justify-between mb-6'> 
      <div className='w-2/3'>
        <h5 className='font-sans'>{t.title}</h5>
        <h6 className='text-lg font-bold'>{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i)}} className='bg-red-700 text-white p-3 rounded-xl border-2'>Delete</button>
      </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-blue-400 p-7 text-3xl font-bold pl-40 font text-white'>Nadeem's Todo App</h1>
      <form className='justify-between ml-20' onSubmit={submitHandler}>
        <input type="text" value={title} onChange={(e)=>{
          settitle(e.target.value);
        }} placeholder='Enter the title'className='p-3 w-3/12 m-8 rounded-xl border-2  border-sky-300 outline-0' />
        <input type="text" value={desc} onChange={(e)=>{
          setdesc(e.target.value);
        }} placeholder='Enter your Description 'className=' rounded-xl p-3 w-3/12 m-8 border-2  border-sky-300 outline-0' />
        <button className='bg-red-500 p-3 text-white border-2 rounded-3xl mx-28'>Add Task</button>
      </form>
      <hr />
      <div className='p-6 bg-slate-200'>
       <ul>
        {renderTask}
       </ul>
      </div>
    </>
  )
}

export default page
