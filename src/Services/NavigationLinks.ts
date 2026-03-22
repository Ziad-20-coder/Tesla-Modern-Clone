type linksType = {
    id: number
    title: string
    link: string
}

export const links: readonly linksType[] = [
    {
        id: 1,
        title: "Vehicles",
        link: "#"
    },
    {
        id: 2,
        title: "Energy",
        link: "#"
    },
    {
        id: 3,
        title: "Charging",
        link: "#"
    },
    {
        id: 4,
        title: "Discover",
        link: "#"
    },
    {
        id: 5,
        title: "Shop",
        link: "#"
    }
]

type megaKeyType = "Vehicles" | "Energy" | "Charging" | "Shop"

type megaValueType = {
    id: number
    title: string
    image: string
}

type megaContentType = Record<megaKeyType, megaValueType[]>

export const megaContent: megaContentType = {
    "Vehicles": [
        {
            id: 1,
            title: "Model S", 
            image: "/Images/NavigationImages/Mega-Menu-Vehicles-Model-S-New-NA-TW-KR.avif"
            },
        {
            id: 2,
            title: "Model 3",
            image: "/Images/NavigationImages/Mega-Menu-Vehicles-Model-3-Performance-LHD.avif"
        },
        {
            id: 3,
            title: "Model X",
            image: "/Images/NavigationImages/Mega-Menu-Vehicles-Model-X-New.avif"
        },
        {
            id: 4,
            title: "Model Y",
            image: "/Images/NavigationImages/Mega-Menu-Vehicles-Model-Y-2-v3.avif"
        },
        {
            id: 5,
            title: "CyberTruck",
            image: "/Images/NavigationImages/Mega-Menu-Vehicles-Cybertruck-1x.avif"
        }
    ],
    "Energy": [
        {
            id: 1,
            title: "Solar Panels",
            image: "/Images/NavigationImages/Mega-Menu-Energy-Solar-Panels.avif"
        },
        {
            id: 2,
            title: "Soalr Roofs",
            image: "/Images/NavigationImages/Mega-Menu-Energy-Solar-Roof.avif"
        },
        {
            id: 3,
            title: "Power Wall",
            image: "/Images/NavigationImages/Mega-Menu-Energy-Powerwall-US.avif"
        },
        {
            id: 4,
            title: "Mega Pack",
            image: "/Images/NavigationImages/Mega-Menu-Energy-Megapack.avif"
        }
    ],
    "Charging": [
        {
            id: 1,
            title: "Charging",
            image: "/Images/NavigationImages//Mega-Menu-Charging-Charging.avif"
        },
        {
            id: 2,
            title: "Home Charging",
            image: "Images/NavigationImages/Mega-Menu-Charging-Home-Charging.avif"
        },
        {
            id: 3,
            title: "Super Charging",
            image: "/Images/NavigationImages/Mega-Menu-Charging-Supercharging-NA.avif"
        },
        {
            id: 4,
            title: "Super Charger For Business",
            image: "/Images/NavigationImages/Mega-Menu-Charging-Supercharger-For-Business.avif"
        }
    ],
    "Shop": [
        {
            id: 1,
            title: "Charging",
            image: "/src/assets/Mega-Menu-Shop-Charging.avif"
        },
        {
            id: 2,
            title: "Vehicle Accessories",
            image: "/Images/NavigationImages/Mega-Menu-Shop-Vehicle-Accessories.avif"
        },
        {
            id: 3,
            title: "Apparel",
            image: "/Images/NavigationImages/Mega-Menu-Shop-Apparel.avif"
        },
        {
            id: 4,
            title: "Life Style",
            image: "/Images/NavigationImages/Mega-Menu-Shop-Lifestyle.avif"
        }
    ]
}

type heroDataType = {
    id: number
    header: string
    subHeader: string
    mainBTN: string
    subBTN: string
    content: string
}

export const heroData: readonly heroDataType[] = [
    {
        id: 1,
        header: "Full Self-Driving (Supervised)",
        subHeader: "Available for $99/mo",
        mainBTN: "Demo FSD (Supervised)",
        subBTN: "Learn More",
        content: "/videos/mylivewallpapers-com-Firefly-and-Stelle-FHD.mp4"
    },
    {
        id: 2,
        header: "Model 3",
        subHeader: "0.99% APR Available",
        mainBTN: "Order Now",
        subBTN: "View Inventory",
        content: "/Images/Homepage-Promo-Model-3-Desktop-US-CA-MX.avif"
    },
        {
        id: 3,
        header: "Model Y",
        subHeader: "0% APR Available",
        mainBTN: "Order Now",
        subBTN: "View Inventory",
        content: "/Images/Homepage-Promo-Meet-Model-Y-Desktop.avif"
    }
]

type snapCarouselBTNType = "Order Now" | "Learn More"

type snapCarouselType = {
    id: number
    header: string
    pLink?: string
    tag: string
    mainBTN: snapCarouselBTNType
    subBTN: snapCarouselBTNType
    image: string
}

export const snapCarousel: readonly snapCarouselType[] = [
    {
        id: 1,
        header: "Model 3",
        tag: "Sport Sedan",
        mainBTN: "Order Now",
        subBTN: "Learn More",
        image: "/Images/snapScrollImages/Homepage-Card-Model-3-Desktop-US_PR_MX.avif"
    },
    {
        id: 2,
        header: "Model Y",
        pLink: "Lease From $459/mo",
        tag: "Midsize SUV",
        mainBTN: "Order Now",
        subBTN: "Learn More",
        image: "/Images/snapScrollImages/Homepage-Vehicle-Card-Model-Y-Desktop-US-Snow.avif"
    },
    {
        id: 3,
        header: "Model X",
        pLink: "3.99% APR Available",
        tag: "Luxury SUV",
        mainBTN: "Order Now",
        subBTN: "Learn More",
        image: "/Images/snapScrollImages/Homepage-Card-Model-X-Desktop-US_PR_MX.avif"
    },
    {
        id: 4,
        header: "Model S",
        pLink: "3.99% APR Available",
        tag: "Luxury Sedan",
        mainBTN: "Order Now",
        subBTN: "Learn More",
        image: "/Images/snapScrollImages/Homepage-Card-Model-S-Desktop-US-v3.avif"
    },
    {
        id: 5,
        header: "Cyber Truck",
        pLink: "3.99% APR Available",
        tag: "Utility Truck",
        mainBTN: "Order Now",
        subBTN: "Learn More",
        image: "/Images/snapScrollImages/Homepage-Card-Cybertruck-Desktop-US_PR_MX.avif"
    }
]

type promotionCardsType = {
    id: number
    header: string
    title: string
    BTN: "Learn More"
    image: string
}

export const promotionCards: readonly promotionCardsType[] = [
    {
        id: 1,
        header: "Current Offers",
        title: "Explore limited-time offers on Tesla vehicles.",
        BTN: "Learn More",
        image: "/Images/cardsImages/Homepage-Grid-Current-Offers.avif"
    },
    {
        id: 2,
        header: "American Heroes",
        title: "$500 off for military, first responders, healthcare, teachers and students.",
        BTN: "Learn More",
        image: "/Images/cardsImages/Homepage-Grid-American-Heroes-v2.avif"
    }
]

type offersCardsType = {
    id: number
    header: string
    title?: string
    mainBTN: string
    subBTN?: string
    image: string
}

export const offersCards: readonly offersCardsType[] = [
    {
        id: 1,
        header: "Travel Safer, Arrive Refreshed",
        title: "Full Self-Driving (Supervised)",
        mainBTN: "Demo FSD (Supervised)",
        subBTN: "Learn More",
        image: "/Images/offerCardsImage/Homepage-FSD-Safety-Report-Split-Desktop.avif"
    },
    {
        id: 2,
        header: "Features That Come Standard",
        mainBTN: "Discover",
        image: "/Images/offerCardsImage/Homepage-Features-Desktop.avif"
    }
]

type chargeMapType = {
    id: number
    header: string
    title: string
    mainBTN: string
    subBTN: string
}

export const chargeMap: readonly chargeMapType[] = [
    {
        id: 1,
        header: "FIND YOUR CHARGE",
        title: "View the network of Tesla Superchargers and Destination Chargers available near you.",
        mainBTN: "View Network",
        subBTN: "Learn More",
    }
]

type iconsAndItemsType = {
    id: number
    superChargerNum: string
    superChargerText: string
    destantionChargerNum: string
    destantionChargerText: string
    image1: string
    image2: string
}

export const iconsAndItems: readonly iconsAndItemsType[] = [
    {
        id: 1,
        superChargerNum: "8,129",
        superChargerText: "SuperChargers",
        destantionChargerNum: "128",
        destantionChargerText: "Destantional Charges",
        image1: "/Images/mapImages/download.svg",
        image2: "/Images/mapImages/download (1).svg"
    }
]

type secondCarouselItemsType = {
    id: number
    header: "Solar Panels" | "Powerwall" | "Megapack" | "Solar Roof"
    title: string
    mainBTN?: snapCarouselBTNType
    subBTN: snapCarouselBTNType
    image: string
}

export const secondCarouselItems: readonly secondCarouselItemsType[] = [
    {
        id: 1,
        header: "Solar Panels",
        title: "Power Your Home and Reduce Your Electricity Bill",
        mainBTN: "Order Now",
        subBTN: "Learn More",
        image: "/Images/sec carousel Images/Homepage-Card-Solar-Roof-Desktop-v2.avif"
    },
    {
        id: 2,
        header: "Powerwall",
        title: "Keep Your Lights On During Outages",
        mainBTN: "Order Now",
        subBTN: "Learn More",
        image: "/Images/sec carousel Images/Homepage-Card-Powerwall-Desktop.avif"
    },
    {
        id: 3,
        header: "Megapack",
        title: "Massive Batteries for Massive Energy Support",
        subBTN: "Learn More",
        image: "/Images/sec carousel Images/Homepage-Card-Megapack-Desktop-v2.avif"
    },
    {
        id: 4,
        header: "Solar Roof",
        title: "Generate Clean Energy With Your Roof",
        mainBTN: "Order Now",
        subBTN: "Learn More",
        image: "/Images/sec carousel Images/Homepage-Card-Solar-Panels-Desktop-v2.avif"
    }
]

type footerType = {
    id: number
    link: string
}

export const footer: readonly footerType[] = [
    {
        id: 1,
        link: "tesla&copy;2026"
    },
    {
        id: 2,
        link: "Privacy & Legal"
    },
    {
        id: 3,
        link: "Vehicle Recalls"
    },
    {
        id: 4,
        link: "News"
    },
    {
        id: 5,
        link: "News"
    }
]