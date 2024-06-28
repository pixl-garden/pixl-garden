import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const P5SketchNoSSR = dynamic(() => import("@/components/P5Sketch"), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <P5SketchNoSSR />
            <div className="relative z-10">
                <Header />
                <Hero />
            </div>
        </>
    );
}
