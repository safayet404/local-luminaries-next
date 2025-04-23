import React from 'react'

import sd from "@/public/images/sd.png"
import pd from "@/public/images/pd.png"
import atv from "@/public/images/atv.png"
import bicycle from "@/public/images/bicycle.png"
import Image from 'next/image'
const activity = [
    {
        id:1,
        title : "Scuba Diving",
        desc : "Drenaline-pumping excursions for the experienced",
        image : sd
    },
    {
        id:2,
        title : "Paragliding",
        desc : "Wild landscapes and rough rivers and you will rafting.Wild landscapes and rough rivers and you will rafting.",
        image : pd
    },
    {
        id:3,
        title : "ATV",
        desc : "Start your engines and get ready for an adventure",
        image : atv
    },
    {
        id:4,
        title : "Bicycle",
        desc : "Thrilling off-road experience public roads maximum security.",
        image : bicycle
    },
]
const Activity = () => {
  return (
    <div className='conainer mx-auto p-4 bg-[#CED0D1]'>
        <h1 className='tracking-widest uppercase font-medium text-4xl text-center text-black mt-3 mb-3' >Activities</h1>
      <div className='grid grid-cols-2 mx-auto gap-5 md:grid-cols-3 lg:grid-cols-4'>
        {activity.map((item)=> (
            <div key={item.id} className='bg-white p-4 rounded-lg'>
                <Image alt=" " className='w-15 h-15 mb-3' src={item.image} />
                <h1 className='text-black uppercase font-sans'>{item.title}</h1>
                <p className='text-black text-xs mt-2'>{item.desc}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Activity
