import { FC, ReactNode } from "react";

import data from "./config";

import style from './Benefits.module.scss'
import Image from "next/image";

const Benefits: FC = () => {

    const setItems = (): ReactNode => {
        return data.items.map((item, index)=>{
            return (
                <div key={index} className={style["benefits-list-item"]}>
                    {item.image? (
                        <Image className={style["benefits-list-item__image"]} {...item.image} alt={item.title}/>
                    ):(
                        <div className={style["benefits-list-item__image"]}></div>
                    )}
                    <h3 className="title title_benefits">{item.title}</h3>
                    <p className={style["benefits-list-item__description"]}>{item.description}</p>
                </div>
            )
        })
    }

    return(
        <section className={style["benefits"]}>
            <div className="container">
                <h2 className="title title_benefits">{data.title}</h2>
                <div className={style["benefits-list"]}>
                    {setItems()}
                </div>
            </div>
        </section>
    )
}

export default Benefits