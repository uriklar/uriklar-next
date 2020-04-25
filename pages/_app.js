import "../styles/index.css";
import Head from "next/head";
import Router from "next/router";
import Header from "../components/header";
import Newsletter from "../components/newsletter";
import * as gtag from "../lib/gtag";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));
/*
Attributions:
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
*/

function Layout({ children }) {
  return (
    <div className="min-h-screen border-t-4 border-b-4 border-brand2 border-solid font-body lg:text-lg bg-background lg:px-16 flex flex-col items-center">
      {children}
    </div>
  );
}

function ContentContainer({ children }) {
  return (
    <main className="p-8 flex flex-col max-w-screen-lg lg:w-2/3">
      {children}
    </main>
  );
}
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Uri Klar</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <ContentContainer>
        <Component {...pageProps} />
        <Newsletter />
      </ContentContainer>
      <link
        rel="stylesheet"
        href="https://highlightjs.org/static/demo/styles/railscasts.css"
      />
    </Layout>
  );
}
