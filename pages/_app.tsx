import { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/404.css";
import "bootstrap/dist/css/bootstrap.css";
import { SSRProvider } from "react-bootstrap";
import { Layout } from "../components/Layout";
import { UserContextProvider } from "../components/Context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </SSRProvider>
  );
}
