import React from "react";
import Link from "next/link";


const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-end h-[80vh] text-white text-center pb-20">
            <div className="w-full">
                <h1 className="text-6xl font-bold text-pg-green font-paskowy">
                    code_collective
                </h1>
                <p className="text-xl mb-4 text-pg-green font-autopilot">
                    a community of developers
                </p>

                <p className="text-md mb-4 text-pg-green font-autopilot">
                    <Link
                        href="https://github.com/pixl-garden"
                        className="text-pg-green hover:text-green-900"
                    >
                        check out our github
                    </Link>
                </p>
                <div className="webring mt-4">
                    <a
                        href="https://pg-webring.vercel.app/prev?site=https://pixl.garden"
                        className="text-pg-green hover:text-green-900"
                    >
                        prev
                    </a>
                    <a
                        href="https://pg-webring.vercel.app"
                        className="mx-4 text-pg-green hover:text-green-900"
                    >
                        pixl garden webring
                    </a>
                    <a
                        href="https://pg-webring.vercel.app/next?site=https://pixl.garden"
                        className="text-pg-green hover:text-green-900"
                    >
                        next
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
