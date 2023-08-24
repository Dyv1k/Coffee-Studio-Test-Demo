import { StaticImageData } from 'next/image';

import chat from 'public/images/Header/chat.svg'

interface IRadioItem {
    type: 'radio';
    state: boolean;
    callback: () => void;
}

export interface IListItem {
    type: 'list';
    title: string;
    items: {
        value: string;
        href: string;
    }[];
}

interface ILanguageItem {
    type: 'list-language';
    title: string;
    items: {
        value: string;
        callback: () => void;
    }[];
}

interface IDefaultItem {
    type: 'default';
    title: string;
    icon?: StaticImageData;  
    href: string;
}

interface IPhoneItem {
    type: 'phone';
    value: string;
    href: string;
}

export type DataHeaderMenuItem = IRadioItem | IListItem | IDefaultItem | IPhoneItem | ILanguageItem;

const data: DataHeaderMenuItem[] = [
    {
        type: 'radio',
        state: false,
        callback: ()=>console.log('Что-то должно произойти'),
    },
    {
        type: 'list',
        title: 'Туры в Псков',
        items: [
            {
                value: 'Туры в Псков',
                href: '#'
            },
            {
                value: 'Туры в Псков',
                href: '#'
            },
            {
                value: 'Туры в Псков',
                href: '#'
            }
        ]
    },
    {
        type: 'list',
        title: 'Экскурсии',
        items: [
            {
                value: 'Экскурсии',
                href: '#'
            },
            {
                value: 'Экскурсии',
                href: '#'
            },
            {
                value: 'Экскурсии',
                href: '#'
            },
            {
                value: 'Экскурсии',
                href: '#'
            },
            {
                value: 'Экскурсии',
                href: '#'
            }
        ]
    },
    {
        type: 'list',
        title: 'О нас',
        items: [
            {
                value: 'О нас',
                href: '#'
            },
            {
                value: 'О нас',
                href: '#'
            },
            {
                value: 'О нас',
                href: '#'
            }
        ]
    },
    {
        type: 'list-language',
        title: 'RU',
        items: [
            {
                value: 'ENG',
                callback: ()=>console.log('Смена языка'),
            },
        ]
    },
    {
        type: 'default',
        title: 'Написать',
        icon: chat,
        href: '#',
    },
    {
        type: 'phone',
        value: '+7 (999) 999-99-99',
        href: '+79999999999',
    }
]

export const searchParams = [
    {
        tag: 'Туры',
        inputs: [
            {
                type: 'select',
                name: 'location',
                placeholder: 'Точка выезда',
                list: [
                    'Из Москвы',
                    'Из Пскова',
                ],
            },
            {
                type: 'date',
                name: 'date',
                placeholder: 'Даты поездки',
            },
            {
                type: 'range',
                name: 'dayRange',
                prefix: 'дней',
                range: [1, 12]
            },
            {
                type: 'select',
                name: 'peopleCount',
                list: [
                    '2 человека',
                    '3 человека',
                    '4 человека',
                    '5 человек',
                ],
            }
        ]
    },
    {
        tag: 'Экскурсии',
        inputs: [
            {
                type: 'select',
                name: 'location',
                placeholder: 'Точка выезда',
                list: [
                    'test',
                    'test',
                ],
            },
            {
                type: 'date',
                name: 'date',
                placeholder: 'Даты поездки',
            },
            {
                type: 'range',
                name: 'dayRange',
                prefix: 'дней',
                range: [1, 12]
            },
            {
                type: 'select',
                name: 'peopleCount',
                list: [
                    '2 test',
                    '3 test',
                    '4 test',
                    '5 test',
                ],
            }
        ]
    },
    {
        tag: 'Гостиницы',
        inputs: [
            {
                type: 'select',
                name: 'location',
                placeholder: 'Точка выезда',
                list: [
                    'Из test',
                    'Из test',
                ],
            },
            {
                type: 'date',
                name: 'date',
                placeholder: 'Даты поездки',
            },
            {
                type: 'range',
                name: 'dayRange',
                prefix: 'дней',
                range: [1, 12]
            },
            {
                type: 'select',
                name: 'peopleCount',
                list: [
                    '2 человека',
                    '3 человека',
                    '4 test',
                    '5 человек',
                ],
            }
        ]
    }
]

export default data

