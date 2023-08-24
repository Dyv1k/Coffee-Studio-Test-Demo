import { FC, ReactNode, useState } from 'react'

import CardsItem from './components/CardsItem'
import CardsPagination from './components/CardsPagination'

import data from './config'

import flovers_1 from 'public/images/Cards/flovers_1.svg'
import flovers_2 from 'public/images/Cards/flovers_2.svg'
import flovers_3 from 'public/images/Cards/flovers_3.svg'

import style from './Cards.module.scss'

const Cards: FC = () =>{

    const [currentSlide, setCurrentSlide] = useState<number>((data.length-3)%2 === 0? (data.length-3)/2 : (data.length-4/2)+1)

    const setitems = (): ReactNode => {
        return data.map((item, index)=>{
            if (index+1 === data.length-1 || index === data.length-1) {
                return (
                    <CardsItem 
                        key={index} 
                        flovers_img={index+1 === data.length-1? flovers_2: flovers_3} 
                        item={item}
                    />
                )
            }
            else return (
                <CardsItem 
                    key={index} 
                    flovers_img={flovers_1} 
                    item={item}
                    index={index}
                    currentSlide={currentSlide}
                />
            )
        })
    }

    return(
        <section className={style["cards"]}>
            <div className="container">
                <div className={style["cards__wrapper"]}>
                    {setitems()}
                    <div className={style["cards-pagination"]}>
                        {data.length-2 > 1 && (
                            <CardsPagination 
                                arrayLength={data.length} 
                                state={[currentSlide, setCurrentSlide]}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards