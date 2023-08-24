import { FC } from "react";
import Link from "next/link";

import { IDataFooterDeveloper, IDataFooterPrivacyPolicy } from "../config";

import style from '../Footer.module.scss'

type FooterBottom = {
    privacyPolicy: IDataFooterPrivacyPolicy,
    developer: IDataFooterDeveloper
}

const FooterBottom: FC<FooterBottom> = ({privacyPolicy, developer}) => {

    return(
        <div className={style["footer-bottom"]}>
            <div className="container">
                <div className={style["footer-bottom__wrapper"]}>
                    <Link href={privacyPolicy.href}>
                        {privacyPolicy.title}
                    </Link>
                    <p>
                        {`${developer.title} `}
                        <a href={developer.href} target="_blank" rel="noopener noreferrer">
                            {developer.subtitle}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom