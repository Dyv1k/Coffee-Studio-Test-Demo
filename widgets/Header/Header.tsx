import {FC} from 'react'

import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import HeaderSearch from './components/HeaderSearch/HeaderSearch'

import data from './config'

import style from './Header.module.scss'

const Header: FC = () =>{

    return (
        <header className={style['header']}>
            <div className="container">
                <div className={style['header__wrapper']}>
                    <HeaderMenu data={data}/>
                    <h1 className="title title_header">Туры по Пскову <br/> и области</h1>
                    <HeaderSearch />
                </div>
            </div>
        </header>
    )
}

export default Header