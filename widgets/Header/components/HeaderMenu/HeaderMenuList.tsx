import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";

import list_arrow from 'public/images/icons/list_arrow.svg'

import style from '../../Header.module.scss'

interface IHeaderMenuList{
    title: string;
    items: {
        value: string;
        href?: string;
        callback?: () => void;
    }[];
    state:[
        activeList: boolean|number, setActiveList: Dispatch<SetStateAction<number | boolean>>
    ],
    index: number;
}

const HeaderMenuList: FC<IHeaderMenuList> = ({title, items, state, index}) =>{

    const [activeList, setActiveList] = state

    const setItems = (): ReactNode => {
        return items.map((item, index)=>{
            if (item?.callback) {
                return(
                    <li 
                        key={index} 
                        className={style["header-menu-navigation-item_list__dropdown__item"]}
                        onClick={item.callback}
                    >
                        <h4 className="title">{item.value}</h4>
                    </li>
                )
            }
            else if (item.href){
                return(
                    <li 
                        key={index} 
                        className={style["header-menu-navigation-item_list__dropdown__item"]}
                    >
                        <Link href={item.href}><h4 className="title">{item.value}</h4></Link>
                    </li>
                )
            }
        })
    }

    return(
        <div
            className={
                activeList===index? 
                `${style["header-menu-navigation-item_list"]} ${style["header-menu-navigation-item_list_active"]}`
                : style["header-menu-navigation-item_list"]
            }
        >
            <div 
                className={style["header-menu-navigation-item_list__wrapper"]} 
                onClick={()=>setActiveList(activeList===index? false: index)}>
                <h4 className="title">{title}</h4>
                <Image {...list_arrow} />
            </div>
            <ul className={style["header-menu-navigation-item_list__dropdown"]}>
                {setItems()}
            </ul>
        </div>
    )
}

export default HeaderMenuList