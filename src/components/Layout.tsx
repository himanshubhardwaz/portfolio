import Head from 'next/head'
import Navbar from './Navbar'
import { FC, ReactNode } from "react";

type Props = { children: ReactNode }

const Layout: FC<Props> = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Himanshu | Fullstack Developer</title>
                <meta name="keyword" content="portfolio, javascript, developer" />
                <meta property="og:title" content="Himanshu Bhardwaz | Full Stack Web Developer" />
                <meta property="og:description" content="JavaScript wizard, chaotic good" />
                <meta property="og:image" content={process.env.IMAGE_URL} />
                <meta property="og:url" content="https://www.linkedin.com/in/himanshubhardwaz/" />
                <meta property="og:type" content="website" />
            </Head>
            <main>
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default Layout;