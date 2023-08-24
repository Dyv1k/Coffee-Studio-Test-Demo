import { Dispatch, FC, ReactNode, SetStateAction } from "react";

import Button from "@/UI/Button/Button";

import { DataTours } from "../config";

import style from '../Tours.module.scss'

type ToursTagsProps = {
    data: DataTours,
    state: [
        activeTag: string,
        setActiveTag: Dispatch<SetStateAction<string>>
    ]
}

const ToursTags: FC<ToursTagsProps> = ({data, state}) => {

    const [activeTag, setActiveTag] = state

    const setTags = (): ReactNode => {
        const set: Set<string> = new Set();
        const returnArray: ReactNode[] = []
        data.items.forEach((item)=>{
            set.add(item.tag)
        })
        set.forEach((item, index)=>{
            returnArray.push(
                <div 
                    className={
                        activeTag === item? 
                        `${style["tours__tags-item"]} ${style["tours__tags-item_active"]}`
                        : style["tours__tags-item"]
                    } 
                    key={index}
                >
                    <Button  
                        color={activeTag === item? "orange" : "gray"} 
                        size="medium"
                        callback={()=>activeTag !== item? setActiveTag(item) : null}
                    >
                        {item}
                    </Button>
                </div>
            )
        })
        return returnArray
    }

    return(
        <div className={style["tours__tags"]}>
            {setTags()}
        </div>
    )
}

export default ToursTags