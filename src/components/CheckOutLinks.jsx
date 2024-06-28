import React from "react";
import Link from "next/link";

const socialLinks = [
    { name: "GitHub", url: "https://github.com/pixl-garden", icon: "" },
    {
        name: "Instagram",
        url: "https://www.instagram.com/pixl_garden",
        icon: "",
    },
];

const CheckOutLinks = () => {
    return (
        <div>
        <p className="text-xl mb-4 text-pg-green font-autopilot">
                check out our links below
            </p>
            <div className="flex space-x-4 ">
                {socialLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-pg-green-dark text-black px-4 py-2 bg-pg-green transition-colors lowercase font-autopilot"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CheckOutLinks;




