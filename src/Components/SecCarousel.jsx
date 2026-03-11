import React from 'react'
import { secondCarouselItems } from '../Services/NavigationLinks'

const secCarousel = () => {
  return (
    <div className='px-4 py-3 lg:px-12 lg:py-7 mt-5'>
        <div className='min-w-full flex items-center gap-3 overflow-x-auto snap-x snap-mandatory'>
            {secondCarouselItems.map((item) => (
                <div key={item.id} className='relative min-h-130 min-w-82.5 snap-center no-scrollbar'>
                    <img src={item.image} alt={item.title} className='absolute h-full w-full object-cover rounded-md'/>
                    <div className='absolute bottom-0 p-3'>
                        <h2 className='text-3xl text-white font-semibold'>{item.header}</h2>
                        <p className='text-white'>{item.title}</p>
                        <div className='flex items-stretch min-w-full gap-3 mt-3'>
                            {item.mainBTN ? <button className='flex-1 py-1.5 bg-blue-400 hover:bg-blue-900 text-white rounded-sm'>{item.mainBTN}</button> : null}
                            <button className='flex-1 py-1.5 bg-white hover:bg-white/90 rounded-sm'>{item.subBTN}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default secCarousel