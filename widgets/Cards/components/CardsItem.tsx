import { FC, Fragment, ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import Button from '@/UI/Button/Button'

import { IDataCardsSliderItem, IDataCardsStaticItem } from '../config'

import separation_img from 'public/images/icons/close_plus.svg'
import button_arrow from 'public/images/icons/button_arrow.svg'

import style from '../Cards.module.scss'

const CardsItem: FC<{
        item: IDataCardsStaticItem | IDataCardsSliderItem, 
        flovers_img: StaticImageData, 
        index?: number,
        currentSlide?: number
    }> 
    = ({item, flovers_img, index, currentSlide}) => {

    const setImages = (item: IDataCardsSliderItem): ReactNode => {
        return item.icons.map((img, index)=>{
            return (
                <Fragment key={index}>
                    {index !== item.icons.length-1? (
                            <>
                                <Image {...img} alt={item.title}/>
                                <Image {...separation_img} />
                            </>
                        ):
                        (
                            <Image {...img} alt={item.title}/>
                        )
                    }
                </Fragment>
            )
        })
    }

    const setCardList = (item: IDataCardsSliderItem): ReactNode => {
        return item.items.map((target, index)=>{
            return(
                <li key={index} className={style["cards-item-list__item"]}>{target}</li>
            )
        })
    }

    return(
        <div 
            className={
                currentSlide === index?
                `${style["cards-item"]} ${style["cards-item_active"]}`
                : style["cards-item"]
            }
        >
            {'icons' in item? (
                    <>
                        <div className={style["cards-item-top"]}>
                            <h2 className="title title_cards">{item.title}</h2>
                            <div className={style["cards-item-top__icons"]}>
                                {setImages(item)}
                            </div>
                        </div>
                        <ol className={style["cards-item-list"]}>
                            {setCardList(item)}
                        </ol>
                        <p className={style["cards-item__description"]}>{item.desctiption}</p>
                        <Button color='white' size='medium'>
                            <Link href={item.href} className={style["cards-item__more"]}>
                                <p>Подробнее</p>
                                <Image {...button_arrow}/>
                            </Link>
                        </Button>
                    </>
                ):(
                    <>
                        <h2 className="title title_cards">{item.title}</h2>
                        <p className={style["cards-item__description"]}>{item.desctiption}</p>
                    </>
                )
            }
            <Image className={style["cards-item__flovers"]} {...flovers_img} alt={'flovers'}/>
        </div>
    )
}

export default CardsItem