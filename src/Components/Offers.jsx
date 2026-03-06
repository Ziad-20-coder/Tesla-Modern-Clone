import React from 'react'
import { offersCards } from '../Services/NavigationLinks'

const offers = () => {
  return (
    <section className='min-w-screen'>
        <div className='px-4 py-3 lg:px-12 lg:py-7 mb-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-4'>
            {offersCards.map((item) => (
                <div key={item.id} className='relative min-h-128 min-w-[90%]'>
                    <div className='absolute inset-0 h-full w-full rounded-md overflow-hidden bg-red-500'>
                        <img src={item.image} alt="" className='h-full w-full object-cover'/>
                    </div>
                    <div className='absolute bottom-0 p-6 text-white flex flex-col justify-center gap-1.5'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{item.header}</h2>
                        <p>{item.title}</p>
                        <div className='flex gap-2 mt-2 overflow-hidden font-bold'>
                            <button className='md:flex-none px-3 py-2 w-1/2 md:w-1/3 bg-blue-400 hover:bg-blue-900 rounded-sm text-white text-sm transition-all duration-300 cursor-pointer'>
                                <span>{item.mainBTN}</span>
                            </button>
                            {item.subBTN && (
                            <button className='md:flex-none min-w-0 md:w-1/3 px-3 py-2 w-1/2 bg-white hover:bg-gray-200 rounded-sm text-black text-sm transition-all duration-300 cursor-pointer'>
                                <span>{item.subBTN}</span>
                            </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default offers