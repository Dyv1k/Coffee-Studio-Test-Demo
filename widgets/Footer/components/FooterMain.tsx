import { FC, ReactNode } from "react";
import Link from "next/link";

import { IDataFooterLinks, IDataFooterLinksItem } from "../config";

import style from '../Footer.module.scss'

type FooterMain = {
    links: IDataFooterLinks[]
}

const FooterMain: FC<FooterMain> = ({links}) => {

    const setCurrentLinks = (item: IDataFooterLinksItem): ReactNode => {
        switch (item.type) {
            case 'email':
                return(
                    <li className={style["footer-main-list__item"]}>
                        <a href={`mailto:${item.href}`}>{item.title}</a>
                    </li>
                )
                break;
            case 'map':
                return(
                    <li className={style["footer-main-list__item"]}>
                        <a target="_blank" rel="noopener noreferrer" href={item.href}>{item.title}</a>
                    </li>
                )
                break;
            case 'link':
                return(
                    <li className={style["footer-main-list__item"]}>
                        <Link href={item.href? item.href : '#'}>{item.title}</Link>
                    </li>
                )
                break;
            case 'phone':
                return(
                    <li className={style["footer-main-list__item"]}>
                        <a href={`tel:${item.href}`}>{item.title}</a>
                    </li>
                )
                break;
            case 'working mode':
                return(
                    <li className={style["footer-main-list__item"]}>
                        <p>Режим работы: {item.title}</p>
                    </li>
                )
                break;
            default:
                break;
        }       
    }

    const setMain = (): ReactNode => {
        return links.map((item, index) => {
            const returnArray = item.items.map((target, key) => {
                if ('subtitle' in target) {
                    const officeArray = target.values.map((value) => {
                        return setCurrentLinks(value)
                    });
                    return (
                        <div className={style["footer-main-list__wrapper"]}>
                            <h5 className="title title_footer">{target.subtitle}</h5>
                            {officeArray}
                        </div>
                    )
                } else {
                    return setCurrentLinks(target)
                }
            })
            return(
                <ul className={style["footer-main-list"]} key={index}>
                    <h4 className="title title_footer">{item.title}</h4>
                    {returnArray}
                </ul>
            )
        })
    }

    return(
        <div className={style["footer-main"]}>
            {setMain()}
        </div>
    )
}

export default FooterMain