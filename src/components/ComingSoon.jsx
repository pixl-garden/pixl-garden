import React from "react";
import CheckOutLinks from "./CheckOutLinks";

const ComingSoon = ({ featureName }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white text-center">
            <h1 className="text-6xl font-bold mb-4 text-pg-green font-paskowy">
                {featureName} coming soon
            </h1>

            <CheckOutLinks />
        </div>
    );
};

export default ComingSoon;
