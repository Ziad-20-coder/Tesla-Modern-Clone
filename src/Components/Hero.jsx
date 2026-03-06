import { useEffect, useRef, useState } from 'react'
import Navigation from './Navigation'
import { heroData } from '../Services/NavigationLinks'
import { IoMdPause } from "react-icons/io";
import { IoPlay } from 'react-icons/io5';

const Hero = () => {
	const [index, setIndex] = useState(0)
	const curr = heroData[index]
	const isVideo = curr.content.endsWith('.mp4') || curr.content.endsWith('.webm')
	const videoRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(true)

	useEffect(() => {
		if(!isPlaying) return
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % heroData.length)
			setIsPlaying(() => true)
		}, 5000)

		return () => clearInterval(interval)
	}, [index, isPlaying])

	const togglePlay = () => {
		if(!videoRef.current) return

		if(videoRef.current.paused) {
			setIsPlaying(() => true)
			videoRef.current.play()
		} else {
			setIsPlaying(() => false)
			videoRef.current.pause()
		}
	}

  return (
    <main className='relative h-[83vh] min-w-screen bg-red-500'>
        <Navigation />
        <div className='px-7 py-18 lg:px-14 lg:py-25'>
            <div className='absolute inset-0 h-full w-full'>
				{isVideo ? (<video key={curr.content} src={curr.content} ref={videoRef} muted autoPlay loop className='object-cover h-full w-full -z-50'></video>) :
				(<img src={curr.content} alt={curr.header} className='object-cover object-center h-full w-full -z-50'/>)}
			</div>
			<div className='absolute bottom-3 left-[50%] translate-[-50%] flex items-center gap-3'>
				{heroData.map((item) => (
					<button key={item.id} onClick={() => setIndex(item.id - 1)} className={`w-3 h-3 rounded-full ${item.id === curr.id ? "bg-white" : "bg-gray-300 cursor-pointer"}`}></button>
				))}
			</div>
			<div className={`absolute bottom-8 left-8 ${curr.id === 1 ? "block" : "hidden"}`}>
				<button onClick={() => togglePlay()} className='bg-white/20 backdrop-blur-lg min-w-2.5 min-h-2.5 p-3 flex items-center justify-center rounded-md text-white cursor-pointer'>
					{isPlaying ? <IoMdPause /> : <IoPlay />}
				</button>
			</div>
			<div className='relative flex flex-col items-center justify-center gap-3'>
				<h1 className={`${curr.id === 1 ? "text-2xl" : "text-3xl"} text-white lg:text-5xl font-bold md:mt-10`}>{curr.header}</h1>
				<p className='text-white/80 lg:text-xl mb-3.5'>{curr.subHeader}</p>
				<div className='flex items-center justify-between gap-2 w-full max-w-92'>
					<button className='min-h-2.5 py-1 w-full rounded-sm bg-blue-400 hover:bg-blue-900 transition-all duration-200 cursor-pointer'>
						<span className={`text-white ${curr.id == 1 ? "text-sm" : "text-md"} lg:text-md`}>{curr.mainBTN}</span>
					</button>
					<button className='min-h-2.5 py-1 w-full bg-white rounded-sm hover:bg-gray-200 transition-all duration-200 cursor-pointer'>
						<span className='text-black'>{curr.subBTN}</span>
					</button>
				</div>
			</div>
        </div>
    </main>
  )
}

export default Hero