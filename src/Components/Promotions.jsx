import React from 'react'
import { promotionCards } from '../Services/NavigationLinks'

const Promotions = () => {
  return (
    <section className='min-w-screen mt-7'>
        <div className='px-4 py-3 lg:px-12 lg:py-3 min-w-[90%] grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-8'>
            {promotionCards.map((item) => (
                <div key={item.id} className='relative flex flex-col md:flex-row bg-gray-100 rounded-xl min-h-full lg:max-h-48 min-w-full overflow-hidden'>
                    <div className='w-full md:w-1/2 p-8 flex flex-col justify-between items-start order-2 lg:order-1'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-2xl lg:text-3xl font-semibold'>{item.header}</h3>
                            <p>{item.title}</p>
                            <div className='mt-4 min-h-full rounded-sm overflow-hidden'>
                                <button className='bg-white hover:bg-gray-200 p-1.5 w-full font-semibold text-sm cursor-pointer transition-all duration-150'>{item.BTN}</button>
                            </div>
                        </div>
                    </div>
                    <div className='h-44 md:h-auto w-full md:w-1/2 overflow-hidden order-1 md:order-2 lg:order-2'>
                        <img src={item.image} alt={item.header} className='h-full w-full object-cover'/>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Promotions