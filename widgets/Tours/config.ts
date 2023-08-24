import { StaticImageData } from "next/image"

import tour_img from 'public/images/Tours/tour_img.png'

export interface IDataToursItem{
    tag: string,
    marks?: string[],
    image: StaticImageData,
    duration: string,
    date: string,
    title: string,
    subtitle: string,
    href: string,
}

export type DataTours = {
    title: string,
    items: IDataToursItem[]
}

const data: DataTours = {
    title: 'Туры по Псковской области',
    items: [
        {
            tag: 'Туры',
            marks: [
                'до 30 декабря'
            ],
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Туры',
            image: tour_img,
            duration: '3 дня/2 ночи',
            date: '24-27 декабря',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Туры',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Туры',
            marks: [
                'до 30 декабря',
                'test'
            ],
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Туры',
            image: tour_img,
            duration: '3 часа',
            date: '24-27 декабря',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Туры',
            image: tour_img,
            duration: '3 часа',
            date: '24-27 декабря',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Туры',
            marks: [
                'до 30 декабря'
            ],
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Туры',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Экскурсии',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Экскурсии',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Экскурсии',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Экскурсии',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Экскурсии',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Экскурсии',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Test tag',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Test tag',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Test tag',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
        {
            tag: 'Test tag',
            image: tour_img,
            duration: '3 часа',
            date: 'ПН, СР, ПТ',
            title: 'Пешеходная экскурсия по Кремлю и центру города',
            subtitle: 'Псков–Изборск–Печоры–Пушкинские горы–Остров ',
            href: '#',
        },
    ]
}

export default data