import {useRef, useState} from 'react'
import { secondCarouselItems } from '../Services/NavigationLinks'
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const secCarousel = () => {
    const scrollRef = useRef(null)

    const [activeIndex, setActiveIndex] = useState(0)

    const handleSwipe = () => {
        const container = scrollRef.current;

        if(!container) return

        const scrollLeft = container.scrollLeft

        const cardWidth = container.firstElementChild.offsetWidth

        const gap = parseInt(window.getComputedStyle(container).gap || 0)

        const totalWidth = cardWidth + gap;

        const newIndex = Math.round(scrollLeft / totalWidth)

        console.log(newIndex)

        if(activeIndex !== newIndex) {
            setActiveIndex(() => newIndex)
        }
    }
    const scrollToDot = (dotIndex) => {

        const container = scrollRef.current;

        if(!container) return

        const cardWidth = container.firstElementChild.offsetWidth

        const gap = parseInt(window.getComputedStyle(container).gap || 0)

        const totalWidth = cardWidth + gap;

        container.scrollTo({
            left: totalWidth * dotIndex,
            behavior: "smooth"
        })
    }

    const switchBTNS = (direction) => {

        const container = scrollRef.current

        if(!container) return

        const cardWidth = container.firstElementChild.offsetWidth

        const gap = parseInt(window.getComputedStyle(container).gap) || 0

        const totalWidth = cardWidth + gap

        container.scrollBy({
            left: direction === "next" ? totalWidth : -totalWidth,
            behavior: "smooth"
        })
    }
  return (
    <div className='relative min-w-screen'>
        <div ref={scrollRef} onScroll={handleSwipe} className='min-w-full px-4 py-3 lg:px-12 lg:py-7 mt-0 flex items-center gap-3 lg:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar'>
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
        <div className='absolute top-1/2 hidden lg:block min-w-full px-4 py-3 lg:px-12 lg:py-7'>
            <div className='flex items-center justify-between'>
                <button onClick={() => switchBTNS("prev")} className='p-2 text-2xl bg-gray-200 rounded-md cursor-pointer'>
                    <GrFormPreviousLink />
                </button>
                <button onClick={() => switchBTNS("next")} className='p-2 text-2xl bg-gray-200 rounded-md cursor-pointer'>
                    <GrFormNextLink />
                </button>
            </div>
        </div>
        <div className='min-w-full mt-4 flex items-center justify-center gap-3'>
            {secondCarouselItems.map((item) => (
                <button key={item.id} onClick={() => scrollToDot(item.id - 1)} className={`h-3 ${activeIndex === item.id - 1 ? "bg-black w-8" : "bg-gray-300 w-2"} rounded-full transition-all duration-150 cursor-pointer`}></button>
            ))}
        </div>
    </div>
  )
}

export default secCarousel