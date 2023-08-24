import { StaticImageData } from "next/image"

interface IDataBenefitsItem{
    image: false | StaticImageData,
    title: string,
    description: string,
}


type IDataBenefits = {
    title: string,
    items: IDataBenefitsItem[],
}

const data: IDataBenefits = {
    title: 'Заголовок-УТП про крутость путешествовать с АП',
    items: [
        {
            image: false,
            title: 'Пешеходная экскурсия по Кремлю',
            description: 'Основание, например, трансформирует нестационарный гироскоп.',
        },
        {
            image: false,
            title: 'Пешеходная экскурсия по Кремлю',
            description: 'Основание, например, трансформирует нестационарный гироскоп.',
        },
        {
            image: false,
            title: 'Пешеходная экскурсия по Кремлю',
            description: 'Основание, например, трансформирует нестационарный гироскоп.',
        },
        {
            image: false,
            title: 'Пешеходная экскурсия по Кремлю',
            description: 'Основание, например, трансформирует нестационарный гироскоп.',
        },
    ]
}

export default data