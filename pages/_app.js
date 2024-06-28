import "../src/styles/globals.css";
import "../src/styles/fonts.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"
                strategy="beforeInteractive"
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
