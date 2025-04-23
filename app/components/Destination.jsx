import React from 'react'
import { base_url } from '../utils/base_url'
import Image from 'next/image';

const Destination = async () => {

    const res = await fetch(`${base_url}destination/all-destination`, {
        cache: 'no-store',
    });
    const data = await res.json()
    console.log(data)
    return (
        <div className='conainer mx-auto p-4 bg-[#CED0D1]'>
            <h1 className='tracking-widest uppercase font-medium text-4xl text-center text-black mt-3 mb-3' >Activities</h1>
            <div className='grid grid-cols-2 mx-auto gap-5 md:grid-cols-3 lg:grid-cols-4'>
                {data?.map((item) => (
                    <div key={item.id} className=' rounded-sm'>

                        <div className='relative'>
                            <Image
                                src={item.image.replace('i.ibb.co.com', 'i.ibb.co')} // 🔧 fix bad domain
                                alt={item.name}
                                width={1000}
                                height={1000}
                                className="object-cover w-full h-[300px] rounded-sm"
                            />

                        <div className='absolute bottom-5 bg-sky-700  left-1/2 transform -translate-x-1/2'>

                            <h1 className='text-white px-5 py-2 uppercase font-sans'>{item.name}</h1>
                        </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Destination
