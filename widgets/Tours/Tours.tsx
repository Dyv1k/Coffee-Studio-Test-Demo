import { FC, ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "@/UI/Button/Button";
import ToursTags from "./components/ToursTags";
import ToursItem from "./components/ToursItem";

import data from "./config";

import arrow_img from 'public/images/icons/pagination_arrow.svg'

import style from './Tours.module.scss'

const Tours: FC = () =>{

    const [activeTag, setActiveTag] = useState<string>(data.items[0].tag)

    const setItems = (): ReactNode => {
        const currentItemsList = data.items.filter((item)=>{return item.tag === activeTag})
        return currentItemsList.map((item, index)=>{
            if (index <= 7){
                return(
                    <ToursItem key={index} {...item}/>
                )
            }
        })
    }

    return(
        <section className={style["tours"]}>
            <div className="container">
                <h2 className="title title_tours">{data.title}</h2>
                <ToursTags data={data} state={[activeTag, setActiveTag]} />
                <div className={style["tours__list"]}>
                    {setItems()}
                </div>
                <Link href={'#'} className={style["tours__link"]}>
                    <Button color="gray" size="large">
                        <p>Все туры</p>
                        <Image {...arrow_img} alt="Все туры"/>
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default Tours