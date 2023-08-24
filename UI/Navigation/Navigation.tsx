import { FC } from "react";
import Image from "next/image";

import arrow_img from 'public/images/icons/pagination_arrow.svg'

import style from './Navigation.module.scss'

type NavigationProps = {
    handlePrev: ()=> void,
    handleNext: ()=> void,
}

const Navigation: FC<NavigationProps> = ({handleNext, handlePrev}) =>{

    return(
        <div className={style["navigation"]}>
            <button className={style["navigation-button"]} onClick={handlePrev}>
                <Image {...arrow_img} alt='Назад'/>
            </button>
            <button className={style["navigation-button"]} onClick={handleNext}>
                <Image {...arrow_img} alt='Вперед'/>
            </button>
        </div>
    )
}

export default Navigation