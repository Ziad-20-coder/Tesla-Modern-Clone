import { megaContent } from "../Services/NavigationLinks"

const MegaMenu = ({activeMenu}) => {
    if(!activeMenu) return

    const itemsShow = megaContent[activeMenu]
    
  return (
    <div className="absolute top-full left-0 min-h-56 w-full flex items-center justify-center shadow-xl bg-white shadow-black/10 z-50">
        <div className={`w-full max-w-2/3 h-full ${itemsShow ? "grid grid-cols-3" : "flex flex-wrap"} items-center justify-center gap-10 overflow-hidden`}>
        {itemsShow ? itemsShow.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center p-4">
                
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-48 md:w-52 lg:w-72 cursor-pointer object-contain"
                />
                
                <p className="text-center font-medium mt-2 cursor-pointer w-full">
                    {item.title}
                </p>
                
                <div className="flex items-center justify-center gap-4 mt-2 cursor-pointer">
                    <span className="underline underline-offset-1 text-sm text-black/70 hover:text-black">
                        Learn
                    </span>
                    <span className="underline underline-offset-1 text-sm text-black/70 hover:text-black">
                        Order
                    </span>
                </div>
            </div>
        )) : <span>Loading...</span>}
        </div>
    </div>
  )
}

export default MegaMenu