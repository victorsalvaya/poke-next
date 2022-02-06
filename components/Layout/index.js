import Footer from "../Footer/index";
import Navbar from "../Navbar/index";

import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <title>PokeNext</title>
            </Head>
            <Navbar />
            <main  className="main-container">{children}</main>
            <Footer />
        </>
    )
}