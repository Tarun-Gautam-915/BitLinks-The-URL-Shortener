"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generatedurl, setGeneratedurl] = useState("")

    const generate = ()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url":url,
            "shorturl":shorturl
        })

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            setGeneratedurl(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            setUrl("")
            setShorturl("")
            console.log(result)
            alert(result.message)
        })
        .catch((error) => console.error(error));
    }

    return (
    <div className='flex flex-col gap-4 mx-auto max-w-lg bg-purple-100 rounded-lg my-16 p-8'>

        <h1 className='font-bold text-2xl'>Generate your short URLs</h1>

        <div className="flex flex-col gap-2">
            <input value={url} onChange={e =>{setUrl(e.target.value)}} className='px-4 py-2 rounded-md focus:outline-purple-600 bg-purple-50' type="text" placeholder='Enter your URL' />
            <input value={shorturl} onChange={e =>{setShorturl(e.target.value)}} className='px-4 py-2 rounded-md focus:outline-purple-600 bg-purple-50' type="text" placeholder='Enter your preferred short URL text' />
        </div>

        <button onClick={generate} className='bg-purple-500 font-bold px-3 py-1 rounded-lg shadow-2xl text-white cursor-pointer my-3'>Generate</button>

        {generatedurl && <>
            <span className='font-bold text-lg'>Your Link</span> 
            <code>
                <Link target="_blank" href={generatedurl}>{generatedurl}</Link>
            </code>
            </>}
    </div>
  )
}

export default Shorten