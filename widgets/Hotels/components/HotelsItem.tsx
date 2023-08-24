import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/UI/Button/Button";

import { Numbers } from '@/interface/splitNumbers'

import { IDataHotelsItem } from "../config";

import rating_img from 'public/images/icons/star.svg'

import style from '../Hotels.module.scss'

const HotelsItem: FC<IDataHotelsItem> = ({description, href, image, location, price, rating, title}) =>{
    return(
        <div className={style["hotels__slider-slide__item"]}>
            <Image {...image} alt={title} />
            <div className={`${style["hotels__slider-slide__item-wrapper"]} ${style["hotels__slider-slide__item-wrapper_rating"]}`}>
                <p>{location}</p>
                <div className={style["hotels__slider-slide__item__rating"]}>
                    <Image {...rating_img} alt={`Рейтинг отеля ${rating}`}/>
                    <p>{rating}</p>
                </div>
            </div>
            <h3 className="title title_hotels">{title}</h3>
            <p className={style["hotels__slider-slide__item__description"]}>
                {description.split('').splice(1, 124).join('')}...
            </p>
            <div className={`${style["hotels__slider-slide__item-wrapper"]} ${style["hotels__slider-slide__item-wrapper_botton"]}`}>
                <p>от {Numbers.splitNumbers(price)} ₽</p>
                <Link href={href}>
                    <Button color="orange" size="medium">Забронировать</Button>
                </Link>
            </div>
        </div>
    )
}

export default HotelsItem