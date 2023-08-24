import { FC, ReactNode, useCallback, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import HotelsItem from "./components/HotelsItem";
import Navigation from "@/UI/Navigation/Navigation";

import data from "./config";

import style from './Hotels.module.scss'

const Hotels: FC = () =>{

    const sliderRef = useRef<SwiperRef | null>(null);

    const handlePrev = useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.swiper.slidePrev();
        }
        else return;
      }, []);
    
      const handleNext = useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.swiper.slideNext();
        }
        else return;
      }, []);

    const setSlides = (): ReactNode => {
        return data.items.map((item, index)=>{
            return (
                <SwiperSlide className={style["hotels__slider-slide"]} key={index}>
                    <HotelsItem {...item}/>
                </SwiperSlide>
            )
        })
    }

    return(
        <section className={style["hotels"]}>
            <div className="container">
                <div className={style["hotels__header"]}>
                    <h2 className="title title_hotels">{data.title}</h2>
                    <Navigation handleNext={handleNext} handlePrev={handlePrev}/>
                </div>
                <Swiper
                    ref={sliderRef}
                    slidesPerView={4}
                    spaceBetween={32}
                    className={style["hotels__slider"]}
                >
                    {setSlides()}
                </Swiper>
            </div>
        </section>
    )
}

export default Hotels;