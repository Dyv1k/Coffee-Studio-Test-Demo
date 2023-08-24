import { Dispatch, FC, ReactNode, SetStateAction } from 'react'

import style from '../Cards.module.scss'

interface ICardsPagination{
    arrayLength: number, 
    state:[currentSlide: number, setCurrentSlide: Dispatch<SetStateAction<number>>]
}

const CardsPagination: FC<ICardsPagination> = ({arrayLength, state}) => {

    const [currentSlide, setCurrentSlide] = state

    const setPagination = ():ReactNode => {
        const returnArray = []
        for (let index = 0; index <= arrayLength-3; index++) {
            returnArray.push(
                <span 
                    className={
                        currentSlide === index? 
                        `${style["cards-pagination__item"]} ${style["cards-pagination__item_active"]}`
                        : style["cards-pagination__item"]
                    }
                    key={index}
                    onClick={()=>currentSlide!==index? setCurrentSlide(index): null}
                ></span>
            )
        }
        return returnArray
    }

    return(
        <div className={style["cards-pagination__wrapper"]}>
            {setPagination()}
        </div>
    )
}

export default CardsPagination