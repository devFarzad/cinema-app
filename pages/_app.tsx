import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/redux";
import Header from "../src/components/header/Header";
import Main from "../src/components/main/Main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        {/* <Main /> */}
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
