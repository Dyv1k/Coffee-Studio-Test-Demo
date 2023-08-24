import { StaticImageData } from 'next/image'

import hotel_img from 'public/images/Hotels/hotel_img.png'

export interface IDataHotelsItem {
    image: StaticImageData,
    location: string, 
    rating: number,
    title: string,
    description: string,
    price: number,
    href: string
}

type DataHotels = {
    title: string,
    items: IDataHotelsItem[]
}

const data: DataHotels = {
    title: 'Гостиницы в Псковской области',
    items: [
        {
            image: hotel_img,
            location: 'Псков',
            rating: 4.3,
            title: 'Отель «Покровский» 4*',
            description: '30 мансардных номеров (DBL и TWIN), 32 стандартных номера (DBL и TWIN), 8 номеров категории комфорт, 4 одноместных номера, 3 семейных двухкомнатных номера, 2 номера категории Suite и 2 номера категории Luxe и 1 номер – апартаменты (с кухней)',
            price: 2000,
            href: '#',
        },
        {
            image: hotel_img,
            location: 'Псков',
            rating: 4.3,
            title: 'Отель «Покровский» 4*',
            description: '30 мансардных номеров (DBL и TWIN), 32 стандартных номера (DBL и TWIN), 8 номеров категории комфорт, 4 одноместных номера, 3 семейных двухкомнатных номера, 2 номера категории Suite и 2 номера категории Luxe и 1 номер – апартаменты (с кухней)',
            price: 2000,
            href: '#',
        },
        {
            image: hotel_img,
            location: 'Псков',
            rating: 4.3,
            title: 'Отель «Покровский» 4*',
            description: '30 мансардных номеров (DBL и TWIN), 32 стандартных номера (DBL и TWIN), 8 номеров категории комфорт, 4 одноместных номера, 3 семейных двухкомнатных номера, 2 номера категории Suite и 2 номера категории Luxe и 1 номер – апартаменты (с кухней)',
            price: 2000,
            href: '#',
        },
        {
            image: hotel_img,
            location: 'Псков',
            rating: 4.3,
            title: 'Отель «Покровский» 4*',
            description: '30 мансардных номеров (DBL и TWIN), 32 стандартных номера (DBL и TWIN), 8 номеров категории комфорт, 4 одноместных номера, 3 семейных двухкомнатных номера, 2 номера категории Suite и 2 номера категории Luxe и 1 номер – апартаменты (с кухней)',
            price: 2000,
            href: '#',
        },
        {
            image: hotel_img,
            location: 'Псков',
            rating: 4.3,
            title: 'Отель «Покровский» 4*',
            description: '30 мансардных номеров (DBL и TWIN), 32 стандартных номера (DBL и TWIN), 8 номеров категории комфорт, 4 одноместных номера, 3 семейных двухкомнатных номера, 2 номера категории Suite и 2 номера категории Luxe и 1 номер – апартаменты (с кухней)',
            price: 2000,
            href: '#',
        },
        {
            image: hotel_img,
            location: 'Псков',
            rating: 4.3,
            title: 'Отель «Покровский» 4*',
            description: '30 мансардных номеров (DBL и TWIN), 32 стандартных номера (DBL и TWIN), 8 номеров категории комфорт, 4 одноместных номера, 3 семейных двухкомнатных номера, 2 номера категории Suite и 2 номера категории Luxe и 1 номер – апартаменты (с кухней)',
            price: 2000,
            href: '#',
        },
        {
            image: hotel_img,
            location: 'Псков',
            rating: 4.3,
            title: 'Отель «Покровский» 4*',
            description: '30 мансардных номеров (DBL и TWIN), 32 стандартных номера (DBL и TWIN), 8 номеров категории комфорт, 4 одноместных номера, 3 семейных двухкомнатных номера, 2 номера категории Suite и 2 номера категории Luxe и 1 номер – апартаменты (с кухней)',
            price: 2000,
            href: '#',
        },
        {
            image: hotel_img,
            location: 'Псков',
            rating: 4.3,
            title: 'Отель «Покровский» 4*',
            description: '30 мансардных номеров (DBL и TWIN), 32 стандартных номера (DBL и TWIN), 8 номеров категории комфорт, 4 одноместных номера, 3 семейных двухкомнатных номера, 2 номера категории Suite и 2 номера категории Luxe и 1 номер – апартаменты (с кухней)',
            price: 2000,
            href: '#',
        },
    ]
}

export default data