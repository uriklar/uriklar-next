import "../styles/index.css";
import Sidebar from "../components/sidebar";

/*
Attributions:
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
*/

function Layout({ children }) {
  return <div className="flex h-screen flex-col lg:flex-row">{children}</div>;
}

function ContentContainer({ children }) {
  return <main className="flex flex-1 justify-center">{children}</main>;
}
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Sidebar />
      <ContentContainer>
        <Component {...pageProps} />
      </ContentContainer>
    </Layout>
  );
}
