import { StaticImageData } from 'next/image'

import icon_1 from 'public/images/icons/cards/icon_1.svg'
import icon_2 from 'public/images/icons/cards/icon_2.svg'

export interface IDataCardsSliderItem{
    title: string,
    icons: StaticImageData[],
    items: string[],
    desctiption: string,
    href: string,
}

export interface IDataCardsStaticItem{
    title: string,
    desctiption: string,
}

type IDataCards = (IDataCardsSliderItem | IDataCardsStaticItem)[]

const data: IDataCards = [
    {
        title: 'Кешбек 5%',
        icons: [
            icon_1,
            icon_2,
        ],
        items: [
            'Основание, например, трансформирует',
            'Основание, например, трансформирует нестационарный гироскоп.',
            'Условие 3'
        ],
        desctiption: 'Основание, например, трансформирует нестационарный гироскоп. Установившийся режим позволяет пренебречь колебаниями',
        href: '#',       
    },
    {
        title: 'Test 15%',
        icons: [
            icon_1,
            icon_2,
        ],
        items: [
            'Основание, например, трансформирует Основание, например, трансформирует',
            'Основание, например, трансформирует нестационарный гироскоп.',
            'Условие 3 Основание, например, трансформирует'
        ],
        desctiption: 'Основание, например, трансформирует нестационарный гироскоп. Установившийся режим позволяет пренебречь колебаниями Основание, например, трансформирует нестационарный гироскоп. Установившийся режим позволяет пренебречь колебаниями',
        href: '#',      
    },
    {
        title: 'Кешбек 20%',
        icons: [
            icon_1,
            icon_2,
        ],
        items: [
            'Основание, например, трансформирует',
            'Основание, например, трансформирует нестационарный гироскоп.',
            'Условие 3'
        ],
        desctiption: 'Основание, например, трансформирует нестационарный гироскоп. Установившийся режим позволяет пренебречь колебаниями',
        href: '#',       
    },
    {
        title: 'Кешбек 30%',
        icons: [
            icon_1,
            icon_2,
        ],
        items: [
            'Основание, например, трансформирует',
            'Основание, например, трансформирует нестационарный гироскоп.',
            'Условие 3'
        ],
        desctiption: 'Основание, например, трансформирует нестационарный гироскоп. Установившийся режим позволяет пренебречь колебаниями',
        href: '#',     
    },
    {
        title: 'Кешбек 40%',
        icons: [
            icon_1,
            icon_2,
        ],
        items: [
            'Основание, например, трансформирует',
            'Основание, например, трансформирует нестационарный гироскоп.',
            'Условие 3'
        ],
        desctiption: 'Основание, например, трансформирует нестационарный гироскоп. Установившийся режим позволяет пренебречь колебаниями',
        href: '#',   
    },
    {
        title: 'Новый год 2023',
        desctiption: 'Групповые и сборные туры от 2х до 4х человек от 4 500 ₽ на человека',
    },
    {
        title: 'Туры из Москвы',
        desctiption: 'Групповые и сборные туры от 2х до 4х человек от 4 500 ₽ на человека',
    },
]

export default data