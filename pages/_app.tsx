import { AppProps } from "next/app";
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.css";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
