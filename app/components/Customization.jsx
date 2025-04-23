import React from 'react'

const Customization = () => {
  return (
    <div className='container mx-auto p-4 bg-white'>
          <h1 className='tracking-widest text-center mb-4 font-medium text-xl text-black uppercase'>Customize Your Tour</h1>  
        <div className='grid grid-cols-5 gap-5'>

            <div>
                <select name="destination" className='w-full p-3 border border-gray-400 rounded-xl text-black' id="destination">
                    <option value="dhaka">Select Destination</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="khulna">Khulna</option>
                </select>
            </div>

            <div>
                <input placeholder='How many peson?' type='number' className='w-full p-3 border border-gray-400 r  rounded-xl text-black'/>
            </div>
            <div>
                <input placeholder='Duration?' type='number' className='w-full p-3 border border-gray-400 r  rounded-xl text-black'/>
            </div>
            <div>
                <input placeholder='Duration?' type='date' className='w-full p-3 border border-gray-400 r  rounded-xl text-black'/>
            </div>
            <div>
                <button className='bg-yellow-500 w-full rounded-lg px-5 py-3'>Booking</button>
            </div>
        </div>
      
    </div>
  )
}

export default Customization
