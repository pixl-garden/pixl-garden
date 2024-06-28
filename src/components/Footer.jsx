// src/components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-pg-background p-4 border-t border-black">
            <div className="container mx-auto text-center">
                <p>Contact us:</p>
                <p>contact@pixl.garden</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/twitter-icon.png"
                            alt="Twitter"
                            className="h-6 w-6"
                        />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/instagram-icon.png"
                            alt="Instagram"
                            className="h-6 w-6"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
