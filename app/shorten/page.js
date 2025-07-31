"use client"
import React, { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generatedurl, setGeneratedurl] = useState(false)

    return (
    <div className='flex flex-col gap-4 mx-auto max-w-lg bg-purple-100 rounded-lg my-16 p-8'>

        <h1 className='font-bold text-2xl'>Generate your short URLs</h1>

        <div className="flex flex-col gap-2">
            <input onChange={e =>{setUrl(e.target.value)}} className='px-4 py-2 rounded-md focus:outline-purple-600 bg-purple-50' type="text" placeholder='Enter your URL' />
            <input onChange={e =>{setShorturl(e.target.value)}} className='px-4 py-2 rounded-md focus:outline-purple-600 bg-purple-50' type="text" placeholder='Enter your preferred short URL text' />
        </div>

        <button className='bg-purple-500 font-bold px-3 py-1 rounded-lg shadow-2xl text-white cursor-pointer my-3'>Generate</button>
    </div>
  )
}

export default Shorten