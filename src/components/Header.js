import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-background-primary text-white p-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
                <Image src="/StudyBeeLogo.png" alt="StudyBee Logo" width={50} height={50} />
                <Image src="/BusinessName.png" alt="Business Name" width={150} height={50} />
            </Link>
            <div className="w-1/4">
                <form className="text-black flex border border-gray-300 rounded-lg overflow-hidden hover:border-black transition">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-grow px-4 py-2 focus:outline-none bg-input-background-primary text-input-foreground-active placeholder-input-foreground-passive"
                    />
                    <button className="bg-gray-200 px-4 py-2 hover:bg-gray-300 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </form>
            </div>
            <div className="space-x-4">
                <button className="bg-button-background-secondary text-black px-4 py-2 rounded-lg hover:bg-button-background-hover-secondary transition">
                    + Create
                </button>
                <button className="bg-button-background-primary text-button-foreground-primary px-4 py-2 rounded-lg hover:bg-button-background-hover-primary transition">
                    Log In
                </button>
            </div>
        </header>
    );
};