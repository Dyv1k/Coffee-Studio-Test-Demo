import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/UI/Button/Button";

import { IDataRevervedPlaseItem } from "../config";

import arrow_img from 'public/images/icons/list_arrow.svg'

import style from '../ReservedPlaces.module.scss'


const ReservedPlacesItem: FC<IDataRevervedPlaseItem> = ({href, image, subtitle, title}) =>{

    return(
        <div className={style["places__slider-slide-item"]}>
            <Image {...image} alt={title}/>
            <div className={style["places__slider-slide-item__info"]}>
                <div className={style["places__slider-slide-item__info__wrapper"]}>
                    <div>
                        <h3 className="title title_places">{title}</h3>
                        <p className={style["places__slider-slide-item__info__subtitle"]}>{subtitle}</p>
                    </div>
                    <Link className={style["places__slider-slide-item__info__button"]} href={href}>
                        <Button color="white" size="medium">
                            <p>Подробнее</p>
                            <Image {...arrow_img} alt='Подробнее'/>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ReservedPlacesItem