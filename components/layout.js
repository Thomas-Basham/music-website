import Head from "next/head";
import Header from "../components/Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Tommy Basham Official Site | Music, Videos, News & more</title>
        <link rel="icon" href="/logo-icon.png" />
        <meta name="robots" content="index, follow"/>
        <meta
          name="description"
          content="Tommy Basham's Official Website. Discover music, news, videos, and much more."
        />
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <Header />

      <main className="w-5/6 px-12 pt-px pb-12 mx-auto mb-20 leading-loose text-white ">
        {router.pathname != "/" && (
          <div className="mb-12 page-title">
            <h1>
              {router.pathname
                .replace("/", "")
                .replace("/", " / ")
                .replace("-", " ")
                .toUpperCase()}
            </h1>
          </div>
        )}

        {children}
      </main>

      <Footer />
    </div>
  );
}
