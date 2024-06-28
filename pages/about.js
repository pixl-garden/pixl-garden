import dynamic from "next/dynamic";
import Header from "@/components/Header";
import ComingSoon from "@/components/ComingSoon";

const P5SketchNoSSR = dynamic(() => import("@/components/P5Sketch"), {
    ssr: false,
});

export default function Codagotchi() {
    return (
        <>
            <P5SketchNoSSR />
            <div className="relative z-10">
                <Header />
                <ComingSoon featureName="about us page" />
            </div>
        </>
    );
}
