import { StaticImageData } from 'next/image'

import img_1 from 'public/images/ReservedPlaces/img_1.png'
import img_2 from 'public/images/ReservedPlaces/img_2.png'
import img_3 from 'public/images/ReservedPlaces/img_3.png'
import img_4 from 'public/images/ReservedPlaces/img_4.png'
import img_5 from 'public/images/ReservedPlaces/img_5.png'
import img_6 from 'public/images/ReservedPlaces/img_6.png'
import img_7 from 'public/images/ReservedPlaces/img_7.png'

export interface IDataRevervedPlaseItem{
    image: StaticImageData,
    title: string,
    subtitle: string,
    href: string,
}

type DataRevervedPlase = {
    title: string,
    subtitle: string,
    items: IDataRevervedPlaseItem[]
}


const data: DataRevervedPlase = {
    title: 'Заповедные места русской истории',
    subtitle: 'Мы продумали досуг жильцов, чтобы свободные вечера проходили с комфортом (здесь нужно описать задумку ландшафтного дизайнера с бульваром и преимущество парковой зоны внутри ЖК + наличие коммерческой недвижимости)',
    items: [
        {
            image: img_1,
            title: 'Скандинавская деревня',
            subtitle: '4 экскурсии',
            href: '#'
        },
        {
            image: img_2,
            title: 'Скандинавская деревня',
            subtitle: '4 экскурсии',
            href: '#'
        },
        {
            image: img_3,
            title: 'Скандинавская деревня',
            subtitle: '4 экскурсии',
            href: '#'
        },
        {
            image: img_4,
            title: 'Скандинавская деревня',
            subtitle: '4 экскурсии',
            href: '#'
        },
        {
            image: img_5,
            title: 'Скандинавская деревня',
            subtitle: '4 экскурсии',
            href: '#'
        },
        {
            image: img_6,
            title: 'Скандинавская деревня',
            subtitle: '4 экскурсии',
            href: '#'
        },
        {
            image: img_7,
            title: 'Скандинавская деревня',
            subtitle: '4 экскурсии',
            href: '#'
        },
    ]
}

export default data