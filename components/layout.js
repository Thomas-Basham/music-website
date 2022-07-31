import Head from "next/head";
import Header from "../components/Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Tommy Basham Official Site | Music, Videos, News & more</title>
        <link rel="icon" href="/logo-icon.png" />
      </Head>

      <Header />

      <main className="w-5/6 px-12 pt-px pb-12 mx-auto mb-24 bg-gray-900">
        { router.pathname != "/" && 
        <div className="mb-24  page-title">
          <h1>{router.pathname.replace("/", "").toUpperCase()}</h1>
        </div>}

        {children}
      </main>

      <Footer />
    </div>
  );
}
