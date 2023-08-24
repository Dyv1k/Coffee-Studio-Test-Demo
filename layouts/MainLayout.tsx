import { FC, ReactNode } from 'react'
import Head from 'next/head'

import Header from '@/widgets/Header/Header'
import Footer from '@/widgets/Footer/Footer'

const MainLayout: FC<{children: ReactNode}> = ({children}) => {

    return(
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Header/>
            <main className="content">
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default MainLayout