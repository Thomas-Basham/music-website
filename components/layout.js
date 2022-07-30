
import Head from 'next/head'
import Header from '../components/Header'
import Footer from './Footer'

export default function Layout({ children }) {


    return (
        <div>
            <Head>
                <title>Tommy Basham Official Site | Music, Videos, News & more</title>
                <link rel="icon" href="/favicon.ico" />
            
            </Head>
                <Header/>
            <main className="w-5/6 mx-auto">{children}</main>
      
            <Footer/>    
        </div>
    )
}
