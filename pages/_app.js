import "@/styles/index.scss";
import Layout from "@/layout";

function App({ Component, pageProps }) {
  console.log('APP Component', Component)
  console.log('APP pageProps', pageProps)
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style global jsx>{`
        body {
          background: white;
        }
      `}</style>
    </>
  );
}

export default App;
