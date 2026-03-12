import React from 'react'
import { secondCarouselItems } from '../Services/NavigationLinks'

const secCarousel = () => {
  return (
    <div className='min-w-screen'>
        <div className='min-w-full px-4 py-3 lg:px-12 lg:py-7 mt-5 flex items-center gap-3 overflow-x-auto snap-x snap-mandatory'>
            {secondCarouselItems.map((item) => (
                <div key={item.id} className='relative min-h-130 min-w-82.5 md:min-w-170 lg:min-w-247.5 snap-center'>
                    <img src={item.image} alt={item.title} className='absolute h-full w-full object-cover rounded-md'/>
                    <div className='absolute bottom-0 p-3 min-w-full md:min-w-[70%] lg:min-w-1/3'>
                        <h2 className='text-3xl md:text-4xl text-white font-semibold'>{item.header}</h2>
                        <p className='text-white'>{item.title}</p>
                        <div className='flex items-stretch gap-3 mt-3'>
                            {item.mainBTN ? <button className='flex-1 py-1.5 md:py-2.5 min-w-0 bg-blue-400 hover:bg-blue-900 text-white font-semibold rounded-sm cursor-pointer transition-colors duration-150'>{item.mainBTN}</button> : null}
                            <button className='flex-1 py-1.5 m-w-0 bg-white hover:bg-white/90 font-semibold rounded-sm cursor-pointer transition-colors duration-150'>{item.subBTN}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default secCarousel