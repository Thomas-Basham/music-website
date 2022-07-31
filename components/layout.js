import Head from "next/head";
import Header from "../components/Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Tommy Basham Official Site | Music, Videos, News & more</title>
        <link rel="icon" href="/logo-icon.png" />
      </Head>
      <Header />
      <main className="w-5/6 mx-auto mb-24">
        <div className="page-title">
          <h1>{useRouter().pathname.replace("/", "").toUpperCase()}</h1>
        </div>

        {children}
      </main>

      <Footer />
    </div>
  );
}
