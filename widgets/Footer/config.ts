import { StaticImageData } from 'next/image'

import logo_img from 'public/images/logo/logo_primary.svg'

import vk from 'public/images/icons/social/vk.svg'
import telegram from 'public/images/icons/social/telegram.svg'
import whatsapp from 'public/images/icons/social/whatsapp.svg'
import viber from 'public/images/icons/social/viber.svg'

export interface IDataFooterLinksItem{
    type: 'link' | 'map' | 'phone' | 'email' | 'working mode',
    title: string,
    href?: string,
}

interface IDataFooterLinksItemOffice {
    subtitle: string;
    values: IDataFooterLinksItem[];
}

export interface IDataFooterLinks {
    title: string;
    items: (IDataFooterLinksItem | IDataFooterLinksItemOffice)[];
}

export interface IDataFooterSocial {
    img: StaticImageData,
    href: string,
}

export interface IDataFooterPrivacyPolicy {
    title: string,
    href: string,
}

export interface IDataFooterDeveloper {
    title: string,
    subtitle: string,
    href: string,
}

type DataFooter = {
    logo: StaticImageData,
    social: IDataFooterSocial[],
    links: IDataFooterLinks[],
    privacyPolicy: IDataFooterPrivacyPolicy,
    developer: IDataFooterDeveloper,
}

const mapLink: string = 'https://yandex.ru/maps?text='

const data: DataFooter = {
    logo: logo_img,
    social: [
        {
            img: vk,
            href: 'https://vk.com',
        },
        {
            img: telegram,
            href: 'https://web.telegram.org',
        },
        {
            img: whatsapp,
            href: 'https://web.whatsapp.com',
        },
        {
            img: viber,
            href: 'https://viber.com',
        },
    ],
    links: [
        {
            title: 'Туры в Псков',
            items: [
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
            ]
        },
        {
            title: 'Сборные экскурсии',
            items: [
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
            ]
        },
        {
            title: 'Индивидуальные экскурсии',
            items: [
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
            ]
        },
        {
            title: 'Путеводитель',
            items: [
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
            ]
        },
        {
            title: 'Корпоративные туры',
            items: [
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
            ]
        },
        {
            title: 'Для школьных групп',
            items: [
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
            ]
        },
        {
            title: 'О нас',
            items: [
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
                {
                    type: 'link',
                    title: 'Пункт меню',
                    href: '#'
                },
            ]
        },
        {
            title: 'Псковский офис',
            items: [
                {
                    subtitle: 'Адреса',
                    values: [
                        {
                            type: 'map',
                            title: 'Россия, Псков, Советcкая 60а, офис 12',
                            href: `${mapLink}Россия, Псков, Советcкая 60а, офис 12`
                        },
                        {
                            type: 'map',
                            title: 'Россия, Псков, пл. Ленина, 2 (около памятника В.И. Ленина)',
                            href: `${mapLink}Россия, Псков, пл. Ленина, 2`
                        }
                    ]
                },
                {
                    subtitle: 'Номера для связи',
                    values: [
                        {
                            type: 'phone',
                            title: '+7 (8112) 66-22-06',
                            href: '+78112662206'
                        },
                        {
                            type: 'phone',
                            title: '+7 (960) 220-69-06',
                            href: '+79602206906'
                        }
                    ]
                },
                {
                    subtitle: 'Адрес эл. почты',
                    values: [
                        {
                            type: 'email',
                            title: 'pskov@pskovatmosfera.ru',
                            href: 'pskov@pskovatmosfera.ru'
                        },
                    ]
                },
                {
                    subtitle: 'Режим работы',
                    values: [
                        {
                            type: 'working mode',
                            title: 'ПН–ПТ: 10.00- 19.00 СБ-ВС: 12.00-18.00',
                        },
                    ]
                },
            ]
        },
        {
            title: 'Московский офис',
            items: [
                {
                    subtitle: 'Адреса',
                    values: [
                        {
                            type: 'map',
                            title: 'Россия, 107031, Москва, ул. Кузнецкий мост, д. 21/5, подъезд №1, 3-ий этаж (обязательно возьмите с собой паспорт)',
                            href: `${mapLink}Россия, 107031, Москва, ул. Кузнецкий мост, д. 21/5, подъезд №1, 3-ий этаж`
                        },
                    ]
                },
                {
                    subtitle: 'Номера для связи',
                    values: [
                        {
                            type: 'phone',
                            title: '+7 (495) 532-00-67',
                            href: '+74955320067'
                        },
                    ]
                },
                {
                    subtitle: 'Адрес эл. почты',
                    values: [
                        {
                            type: 'email',
                            title: 'pskov@pskovatmosfera.ru',
                            href: 'pskov@pskovatmosfera.ru'
                        },
                    ]
                },
            ]
        },
    ],
    privacyPolicy: {
        title: 'Политика конфиденциальности',
        href: '#'
    },
    developer: {
        title: 'Cделано в',
        subtitle: 'CoffeeStudio',
        href: 'https://coffeestudio.ru/'
    }
}

export default data