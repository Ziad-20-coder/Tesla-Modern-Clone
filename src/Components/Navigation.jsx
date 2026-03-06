import { useState } from 'react'
import { links, megaContent } from '../Services/NavigationLinks'
import { TbWorld, TbUserCircle } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { IoIosArrowForward } from "react-icons/io";
import { MdClose } from "react-icons/md";
import MegaMenu from './MegaMenu';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeItem, setActiveItem] = useState(null)
    const [activeMenu, setActiveMenu] = useState(null)
  return (
    <nav onMouseLeave={() => {setActiveMenu(null)
                            setActiveItem(null)}} 
                            className='fixed lg:bg-white min-w-screen z-50'>
        <div className='px-7 py-3 lg:px-14 lg:py-3 flex items-center justify-between'>
            <h2 className='text-xl lg:text-2xl font-bold tracking-[0.8rem] text-white lg:text-black'>Tesla</h2>
            
            {/* Desktop */}
            <ul className='hidden lg:flex items-center justify-center w-full lg:gap-12'>
                {links.map((link) => (
                    <li key={link.id}
                        onMouseEnter={() => {setActiveMenu(link.title) 
                                            setActiveItem(link.title)}}
                        className={`px-4 py-2 hover:bg-black/20 rounded-xl transition-all duration-300 cursor-pointer ${activeItem == link.title ? "bg-black/20" : "bg-none"}`}>
                        <a href={link.link}>{link.title}</a>
                    </li>
                ))}
            </ul>
                
            <div className='hidden lg:block'>
                <MegaMenu activeMenu={activeMenu}/>
            </div>

            <div className='hidden lg:flex gap-2'>
                <div className='p-2 text-2xl hover:bg-black/20 cursor-pointer rounded-xl transition-all duration-300'>
                    <AiOutlineQuestionCircle />
                </div>

                <div className='p-2 text-2xl hover:bg-black/20 cursor-pointer rounded-xl transition-all duration-300'>
                    <TbWorld />
                </div>

                <div className='p-2 text-2xl hover:bg-black/20 cursor-pointer rounded-xl transition-all duration-300'>
                    <TbUserCircle />
                </div>
            </div>

            {/* Mobile && Tablet */}
            <button onClick={() => setIsOpen(true)} className='lg:hidden'>
                <p className='text-md px-3 py-0.5 text-white bg-white/20 backdrop-blur-lg rounded-md'>Menu</p>
            </button>

            {isOpen && (
                <nav className='fixed inset-0 bg-white min-h-screen min-w-screen z-50 lg:hidden'>
                    <div className='px-7 py-3 flex justify-end'>
                        <button className='px-3 py-2' onClick={() => setIsOpen(false)}>
                            <MdClose className='text-2xl'/>
                        </button>
                    </div>
                    <ul className='relative px-7 py-2 h-[calc(100vh-100px)] flex flex-col gap-15 overflow-y-auto lg:hidden'>
                        {links.map((link) => {
                            const hasContent = megaContent[link.title]
                            return (
                                <li key={link.id} onClick={() => setActiveMenu(link.title)} className='border-b-2 border-black/10 pb-5 last:border-none'>
                                    <div className='flex items-center justify-between'>
                                        <a href={link.link}>{link.title}</a>
                                        {hasContent ? <IoIosArrowForward className='text-xl'/> : null}
                                    </div>
                                    {activeMenu == link.title && hasContent && (
                                        hasContent.map((item) => (
                                            <div className='flex flex-col items-center justify-center w-full overflow-y-auto'>
                                                <div className='grid grid-cols-2 items-center justify-center mt-3 gap-2'>
                                                    <img src={item.image} alt={item.title} className='w-32'/>
                                                    <p className='truncate'>{item.title}</p>
                                            </div>
                                        </div>
                                        ))
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            )}
        </div>
    </nav>
  )
}

export default Navigation