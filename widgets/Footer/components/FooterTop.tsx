import { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import { IDataFooterSocial } from "../config";

import style from '../Footer.module.scss'

type FooterTop = {
    logo: StaticImageData,
    socialList: IDataFooterSocial[]
}

const FooterTop: FC<FooterTop> = ({logo, socialList}) => {

    const setSocial = (): ReactNode => {
        return socialList.map((item, index) => {
            return (
                <a
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.href}
                    className={style["footer-top-social__item"]}
                >
                    <Image {...item.img} alt={item.href} />
                </a>
            )
        })
    }

    return(
        <div className={style["footer-top"]}>
            <Image {...logo} alt="logo" />
            <div className={style["footer-top-social"]}>
                {setSocial()}
            </div>
        </div>
    )
}

export default FooterTop