import { FC, Fragment, ReactNode, useState } from "react";
import Image from 'next/image'

import HeaderMenuList from "./HeaderMenuList";
import Radio from "@/UI/Radio/Radio";
import Button from "@/UI/Button/Button";

import { DataHeaderMenuItem } from "../../config";

import logo_img from 'public/images/logo/logo_default.svg'

import style from '../../Header.module.scss'

const HeaderMenu: FC<{data: DataHeaderMenuItem[]}> = ({data}) =>{

    const [activeList, setActiveList] = useState<boolean|number>(false)

    const setNavigation = (): ReactNode => {
        return data.map((item, index)=>{
            switch (item.type) {
                case 'radio':
                    return (
                        <li key={index} className={style["header-menu-navigation-item"]}>
                            <Radio key={index} {...item}/>
                        </li>
                    )                   
                    break;
                case 'list':
                    return (
                        <li key={index} className={style["header-menu-navigation-item"]}>
                            <HeaderMenuList 
                                key={index}
                                index={index}
                                state={[activeList, setActiveList]} 
                                title={item.title} 
                                items={item.items} 
                            />
                        </li>
                    )              
                    break;
                case 'default':
                    return (
                        <li
                            key={index}
                            className={`${style["header-menu-navigation-item"]} ${style["header-menu-navigation-item_default"]}`}
                        >
                            {item.icon && (
                                <Image {...item.icon} alt={item.title}/>
                            )}
                            <h4 className="title">{item.title}</h4>
                        </li>
                    )                
                    break;
                case 'list-language':
                    return (
                        <Fragment key={index}>
                            <div 
                                className={`${style["header-menu-navigation-item"]} ${style["header-menu-navigation-item_separator"]}`}
                            ></div>
                            <li className={style["header-menu-navigation-item"]}>
                                <HeaderMenuList 
                                    key={index}
                                    index={index} 
                                    state={[activeList, setActiveList]} 
                                    title={item.title} 
                                    items={item.items} 
                                />
                            </li>
                        </Fragment>
                    )
                    break;
                case 'phone':
                    return (
                        <li key={index} className={style["header-menu-navigation-item"]}>
                            <a href={`tel:${item.href}`}>
                                <Button color="white" size="medium">
                                    {item.value}
                                </Button>
                            </a>
                        </li>
                    )             
                    break;
                default:
                    break;
            }
        })
    }

    return(
        <div className={style["header-menu"]}>
            <div className={style["header-menu__logo"]}>
                <Image {...logo_img}/>
            </div>
            <nav className={style["header-menu-navigation"]}>
                <ul className={style["header-menu-navigation__items"]}>
                    {setNavigation()}
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMenu