import React from 'react'
import { chargeMap } from '../Services/NavigationLinks'

const Map = () => {
    return (
        <div className='min-w-screen'>
            <div className='px-4 py-3 lg:px-12 lg:py-7'>
                <div className='flex items-center justify-center bg-gray-300 min-w-full h-96 lg:h-178 p-4 rounded-xl'>
                    <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>I don't have money to make map in the project</h1>
                </div>
                <div className='flex flex-col mt-5'>
                    {chargeMap.map((item) => (
                        <div key={item.id}>
                            <div className='lg:w-1/2'>
                                <h2 className='text-3xl font-semibold'>{item.header}</h2>
                                <p>{item.title}</p>
                                <div className='flex items-stretch gap-4 mt-4 min-w-0 md:max-w-[40%] lg:max-w-[60%]'>
                                    <button className='flex-1 bg-black text-white py-3 rounded-md font-medium cursor-pointer'>{item.mainBTN}</button>
                                    <button className='flex-1 bg-gray-100 rounded-md font-medium cursor-pointer'>{item.subBTN}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Map