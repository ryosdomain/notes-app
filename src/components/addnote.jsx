import React, { useState } from 'react'

const addnote = (props) => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(title ,description)
    props.addNote(title, description)
    
    setTitle('')
    setDescription('')

    props.onClose()

  }
  

  return (
    <div className={`w-full h-full top-0 left-0 ${props.open?'fixed':'hidden'}`}>
        <div className='border rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 pb-5'>
        <div className='w-full h-10'>

          <button onClick={props.onClose} className='absolute hover:bg-red-950 hover:text-white right-4.5 top-3 border border-red-900 rounded-full text-red  m-auto leading-tight px-2 py-1 text-red-900 font-semibold'>X</button>
        </div>
          <form onSubmit={submitHandler} className='flex flex-col '>
            <label>Title</label>
            <input onChange={(e)=>{setTitle(e.target.value)}} className='border px-4 py-2 rounded' type="text" value={title} />
            <label>Description</label>
            <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} className='border px-4 py-2 rounded'></textarea>
            <button className='w-full px-4 py-1 border rounded bg-[#3c91e6] text-[#fafffd] mt-5' type="submit">Add</button>
          </form>

        </div>
    </div>
  )
}

export default addnote