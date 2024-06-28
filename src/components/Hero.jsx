import React from "react";
import Link from "next/link";
import CheckOutLinks from "./CheckOutLinks";



const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white text-center">
            <h1 className="text-6xl font-bold mb-4 text-pg-green font-paskowy">
                code_collective
            </h1>
            <p className="text-xl mb-4 text-pg-green font-autopilot">
                a community of developers
            </p>
            <CheckOutLinks />
        </div>
    );
};

export default Hero;
