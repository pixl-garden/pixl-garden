import "@/styles/globals.css";
import "@/styles/fonts.css";
import Script from "next/script";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"
                strategy="beforeInteractive"
            />
            <Component {...pageProps} />
        </NextUIProvider>
    );
}

export default MyApp;
