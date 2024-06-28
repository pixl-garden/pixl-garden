import Link from "next/link";
import P5Background from "./P5Background";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <P5Background />
            <main className="text-center relative z-10">
                <h1 className="font-autopilot text-6xl font-bold text-pg-green mb-4">
                    404
                </h1>
                <p className="font-alagard text-2xl text-pg-green-dark mb-8">
                    This page could not be found.
                </p>
                <Link
                    href="/"
                    className="font-paskowy text-lg text-pg-green hover:text-pg-green-dark transition-colors"
                >
                    Go back home
                </Link>
            </main>
        </div>
    );
}
