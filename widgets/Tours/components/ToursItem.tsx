import { FC, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import { IDataToursItem } from "../config";

import style from '../Tours.module.scss'

const ToursItem: FC<IDataToursItem> = ({date, duration, href, image, subtitle, tag, title, marks}) => {

    const setMarks = (marks: string[]): ReactNode => {
        return marks.map((item, index)=>{
            return (
                <p key={index} className={style["tours__list-item__marks-item"]}>{item}</p>
            )
        })
    }

    return (
        <Link href={href} className={style["tours__list-item"]}>
            {marks ? (
                <div className={style["tours__list-item__top"]}>
                    <Image className={style["tours__list-item__image"]} {...image} alt={title} />
                    <div className={style["tours__list-item__wrapper"]}>
                        <div className={style["tours__list-item__marks"]}>
                            {setMarks(marks)}
                        </div>
                    </div>
                </div>
            ) : (
                <Image className={style["tours__list-item__image"]} {...image} alt={title} />
            )}
            <div className={style["tours__list-item__info"]}>
                <p className={style["tours__list-item__info__duration"]}>{duration}</p>
                <p className={style["tours__list-item__info__date"]}>{date}</p>
            </div>
            <h3 className="title title_tours">{title}</h3>
            <p className={style["tours__list-item__subtitle"]}>{subtitle}</p>
        </Link>
    )
}

export default ToursItem