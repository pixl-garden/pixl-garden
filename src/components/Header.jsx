import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    Link,
} from "@nextui-org/react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const links = [
        {
            href: "/codagotchi",
            text: "Codagotchi",
        },
        {
            href: "/shop",
            text: "Shop",
        },
        {
            href: "/about",
            text: "About",
        },
        {
            href: "/blog",
            text: "Blog",
        }
    ];

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            className="bg-transparent text-pg-green py-4 px-6 sm:px-10"
        >
            <NavbarContent className="container mx-auto flex justify-between items-center">
                <NavbarBrand className="text-2xl font-bold font-alagard tracking-wider flex items-center">
                    <img
                        src="/logo.png"
                        alt="Pixl Garden Logo"
                        className="h-8 w-8 mr-2"
                    />
                    <Link href="/" className="text-pg-green text-2xl">
                        pixl.garden
                    </Link>
                </NavbarBrand>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-pg-green text-lg font-semibold font-alagard tracking-wide hover:text-pg-green-dark"
                    >
                        {link.text}
                    </Link>
                ))}

                {/* For phone hamburger */}
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden focus:outline-none text-pg-green"
                />
                <NavbarMenu isOpen={isMenuOpen} className="sm:hidden">
                    {links.map((link) => (
                        <NavbarItem key={link.href}>
                            <Link href={link.href}>{link.text}</Link>
                        </NavbarItem>
                    ))}
                </NavbarMenu>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
