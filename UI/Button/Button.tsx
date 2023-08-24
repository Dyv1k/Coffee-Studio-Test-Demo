import { FC, ReactNode } from "react";

import style from './Button.module.scss'

type ButtonProps = {
    children: ReactNode,
    size: 'small' | 'medium' | 'large',
    color: 'orange' | 'gray' | 'white',
    isActive?: boolean,
    type?: 'button' | 'submit',
    callback?: () => void,
}

const Button: FC<ButtonProps> = (
    {children, size, color, isActive=true, type='button', callback=()=>{}}
    ) => {

    const classNames = {
        default: style['button'],
        size: style[`button_${size}`],
        color: style[`button_${color}`],
        isActive: isActive? style[`button_active`] : style[`button_disable`],
    }

    return(
        <button 
            className={`${classNames.default} ${classNames.size} ${classNames.color} ${classNames.isActive}`}
            type={type}
            onClick={callback}
        >
            {children}
        </button>
    )
}

export default Button