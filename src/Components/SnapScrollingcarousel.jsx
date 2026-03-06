import { useRef, useState } from 'react'
import { snapCarousel } from '../Services/NavigationLinks'
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const snapScrollingcarousel = () => {
    const [isActive, setIsActive] = useState(0)
    const scrollRef = useRef(null)

    const handleScroll = (where) => {
        const container = scrollRef.current

        if(!container) return

        const card = container.firstElementChild;

        if(card) {

            const cardWidth = card.offsetWidth

            let gap = parseInt(window.getComputedStyle(container).gap || 0);

            console.log(cardWidth)
            console.log(gap)

            const distance = cardWidth + gap

            console.log(distance)

            container.scrollBy({
                left: where === "next" ? distance : -distance,
                behavior: "smooth"
            })
        }
    };

    const scrollToDot = (dotIndex) => {
        const container = scrollRef.current
        if(container) {

            const cardwidth = container.firstElementChild.offsetWidth

            const gap = parseInt(window.getComputedStyle(container).gap || 0)

            const totalWidth = cardwidth + gap;

            container.scrollTo({
                left: totalWidth * dotIndex,
                behavior: "smooth"
            })
        }
    }

    const hadnleSwipe = () => {
        const container = scrollRef.current;

        if(container) {
            let scrollLeft = container.scrollLeft;

            const card = container.firstElementChild

            if(card) {
                const cardWidth = card.offsetWidth

                let gap = parseInt(window.getComputedStyle(container).gap) || 0;

                const totalWidth = cardWidth + gap;
                
                const newIndex = Math.round(scrollLeft / totalWidth)
                
                console.log(newIndex)

                if(newIndex !== isActive) {
                    setIsActive(() => newIndex)
                }
            }
        }
    }

  return (
    <section className='relative min-w-full lg:mt-6'>
        <div ref={scrollRef} onScroll={hadnleSwipe} className='px-4 py-3 lg:px-12 lg:py-3 flex items-center gap-3 lg:gap-7 overflow-x-scroll snap-x snap-mandatory no-scrollbar'>
            {snapCarousel.map((item) => (
                <div key={item.id} className='relative min-h-130 lg:min-h-[500px] min-w-82.5 md:min-w-170 lg:min-w-247.5 snap-center'>
                    <img src={item.image} alt={item.header} className='absolute object-cover rounded-md h-full w-full'/>
                    <div className='absolute top-2 left-2 bg-white/20 backdrop-blur-lg p-2 rounded-sm'>
                        <p className='text-white text-sm cursor-pointer'>{item.tag}</p>
                    </div>
                    <div className='absolute inset-x-0 lg:inset-x-10 md:max-w-[90%] lg:max-w-1/3 bottom-0 lg:bottom-5 px-3.5 py-4 flex flex-col'>
                        <h3 className='text-white text-4xl font-semibold'>{item.header}</h3>
                        <a href='#' className='text-white underline mb-3'>{item.pLink}</a>
                        <div className='flex items-center gap-3'>
                            <button className='flex-1 bg-blue-400 hover:bg-blue-900 rounded-sm py-2.5 cursor-pointer transition-all duration-300'>
                                <span className='text-white font-semibold'>{item.mainBTN}</span>
                            </button>
                            <button className='flex-1 bg-white hover:bg-white/90 rounded-sm py-2.5 cursor-pointer transition-all duration-300'>
                                <span className='text-blac font-semibold'>{item.mainBTN}</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className='absolute inset-x-0 px-7 min-w-full hidden lg:flex items-center justify-between'>
                <button onClick={() => handleScroll('prev')} className='bg-gray-200 hover:bg-gray-300 p-2 rounded-md cursor-pointer'>
                    <GrFormPreviousLink className='text-2xl'/>
                </button>
                <button onClick={() => handleScroll('next')} className='bg-gray-200 hover:bg-gray-300 p-2 rounded-md cursor-pointer'>
                    < GrFormNextLink className='text-2xl'/>
                </button>
            </div>
        </div>
        <div className='mt-4 min-w-screen flex items-center justify-center gap-3'>
            {snapCarousel.map((item) => (
                <button key={item.id} onClick={() =>scrollToDot(item.id - 1)} className={`${isActive === item.id - 1 ? "bg-black w-8" : "bg-gray-300 w-3"} h-3 rounded-full cursor-pointer transition-all duration-150`}></button>
            ))}
        </div>
    </section>
  )
}

export default snapScrollingcarousel
