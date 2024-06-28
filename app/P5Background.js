"use client";

import dynamic from "next/dynamic";

const P5SketchNoSSR = dynamic(() => import("@/components/P5Sketch"), {
    ssr: false,
});

export default function P5Background() {
    return <P5SketchNoSSR />;
}
