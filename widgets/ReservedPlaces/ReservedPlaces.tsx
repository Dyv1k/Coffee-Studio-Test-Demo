import { FC, ReactNode } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import ReservedPlacesItem from "./components/ReservedPlacesItem";

import data from "./config";

import style from './ReservedPlaces.module.scss'

const ReservedPlaces: FC = () => {

    const setSlides = (): ReactNode => {
        return data.items.map((item, index)=>{
            if (index % 3 ===0){
                return(
                    <SwiperSlide className={style["places__slider-slide"]} key={index}>
                        <div className={style["places__slider-slide__wrapper"]}>
                            <ReservedPlacesItem {...item} />
                            {data.items[index+1] && (
                                <ReservedPlacesItem {...data.items[index+1]} />
                            )}
                            {data.items[index+2] && (
                                <ReservedPlacesItem {...data.items[index+2]} />
                            )}
                        </div>
                    </SwiperSlide>
                )
            }
        })
    }
    
    return(
        <section className={style["places"]}>
            <div className="container">
                <h2 className="title title_places">{data.title}</h2>
                <p className={style["places__subtitle"]}>{data.subtitle}</p>
            </div>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={32}
                freeMode={true}
                modules={[FreeMode]}
                className={style["places__slider"]}
            >
                {setSlides()}
            </Swiper>
        </section>
    )
}

export default ReservedPlaces