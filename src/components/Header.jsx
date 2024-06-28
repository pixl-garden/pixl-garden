import Link from "next/link";

const links = [
    { href: "/", text: "home" },
    { href: "/codagotchi", text: "codagotchi"},
    { href: "/shop", text: "shop" },
    { href: "/about", text: "about" },
];

const Header = () => {
    return (
        <header className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="Pixl Garden Logo"
                        className="h-8 w-8 mr-2"
                    />
                    <span className="text-xl font-bold text-pg-green font-alagard">
                        pixl.garden
                    </span>
                </div>
                <nav>
                    <ul className="flex space-x-4 text-pg-green font-alagard">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="hover:text-pg-green-dark"
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
