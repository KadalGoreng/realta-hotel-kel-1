import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/Redux/Store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
import Layout from "@/components/layout";

// let persistor = persistStore(store);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </PersistGate> */}
    </Provider>
  );
}
