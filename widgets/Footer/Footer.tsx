import { FC } from "react";

import FooterTop from "./components/FooterTop";
import FooterMain from "./components/FooterMain";
import FooterBottom from "./components/FooterBottom";

import data from "./config";

import style from './Footer.module.scss'

const Footer: FC = () => {

    return (
        <footer className={style["footer"]}>
            <div className={style["footer__wrapper"]}>
                <div className="container">
                    <FooterTop logo={data.logo} socialList={data.social} />
                    <div className={style["footer__separator"]}></div>
                    <FooterMain links={data.links}/>
                </div>
                <FooterBottom developer={data.developer} privacyPolicy={data.privacyPolicy} />
            </div>
        </footer>
    )
}

export default Footer