import "../styles/index.css";
import Sidebar from "../components/sidebar";
import Head from "next/head";

/*
Attributions:
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
*/

function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col lg:flex-row font-body">
      {children}
    </div>
  );
}

function ContentContainer({ children }) {
  return (
    <main className="flex flex-1 justify-center overflow-auto">{children}</main>
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
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Sidebar />
      <ContentContainer>
        <Component {...pageProps} />
      </ContentContainer>
      <link
        rel="stylesheet"
        href="https://highlightjs.org/static/demo/styles/railscasts.css"
      />
    </Layout>
  );
}
