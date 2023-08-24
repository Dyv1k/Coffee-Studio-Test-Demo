import { FC, useState } from "react";

import style from './Radio.module.scss'

const Radio: FC<{state: boolean, callback: () => void}> = ({state, callback}) =>{

    const [isActive, setIsActive] = useState(state)

    return(
        <div 
            className={
                isActive? `${style["radio"]} ${style["radio_active"]}` 
                : style["radio"]
            } 
            onClick={()=>{
                setIsActive(!isActive);
                callback()
            }}
        >
            <div className={style["radio__circle"]}></div>
        </div>
    )
}

export default Radio