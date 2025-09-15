"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header({ authenticated }) {
    const [showSubjects, setShowSubjects] = useState(false);
    const [activeSubject, setActiveSubject] = useState(0);
    const [openHamburger, setOpenHamburger] = useState(false);
    const router = useRouter();

    // TODO: Remove dummy data and fetch from backend
    const subjects = [
        { name: "Math", subs: ["Algebra", "Geometry", "Calculus A", "Calculus B", "Calculus C"] },
        { name: "Science", subs: ["Biology", "Chemistry"] },
        { name: "History", subs: ["Ancient", "Modern"] },
    ];

    const search = (e) => {
        e.preventDefault();

        const query = e.target[0].value?.trim();
        if (query) {
            router.push(`/search?query=${encodeURIComponent(query)}`);
        } else {
            router.push(`/search`);
        }
    }

    const toggleHamburger = () => {
        setOpenHamburger(!openHamburger);
    }

    return (
        <header className="bg-primary text-primary-foreground flex justify-center items-center h-16 border-b-1 border-primary-border">
            <div className="px-8 max-w-7xl w-full flex justify-between items-center">
                {/** Logo */}
                <Link
                    className="flex items-center text-highlight text-2xl font-bold"
                    href={"/"}
                >
                    <Image src={'/StudyBeeLogo.png'} alt="StudyBee Logo" width={50} height={30} />
                    <div>StudyBee</div>
                </Link>

                {/** Search Bar */}
                <div className="w-1/3 hidden lg:block">
                    <div className="bg-input-background text-input-foreground rounded-lg w-full focus-within:ring-1 focus-within:ring-input-placeholder">
                        <form 
                            onSubmit={search}
                            className="flex items-center px-2 py-2 text-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-input-placeholder mr-2"
                            >
                                <path d="m21 21-4.34-4.34" />
                                <circle cx="11" cy="11" r="8" />
                            </svg>
                            <input type="text" placeholder="Search study sets, categories and more..." className="bg-transparent placeholder-input-placeholder outline-none w-full" />
                        </form>
                    </div>
                </div>

                {/** Header Nav Buttons */}
                <div className="hidden lg:flex space-x-4 items-center space-between text-sm">
                    <div className="hidden relative xl:inline-block">
                        <button
                            className="font-semibold flex items-center cursor-pointer bg-button-tertiary text-button-tertiary-foreground hover:bg-button-tertiary-hover px-2 py-1 rounded-lg"
                            onClick={() => setShowSubjects((v) => !v)}
                            type="button"
                        >
                            Subjects
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-down-icon lucide-chevron-down"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                        <div
                            className="absolute top-10 -left-10 bg-white border-1 border-primary-border w-80 2xl:w-96 rounded-lg flex"
                            hidden={!showSubjects}
                        >
                            <div className="w-[40%] border-r-1 border-primary-border">
                                {subjects.map((subject, idx) => (
                                    <div
                                        key={idx}
                                        className={`px-4 py-2 font-semibold ${idx === 0 ? "rounded-tl-lg": ""} ${idx === subjects.length - 1 ? "rounded-bl-lg": ""} ${idx === activeSubject ? "bg-primary-hover": ""}`}
                                        onMouseEnter={() => setActiveSubject(idx)}
                                    >
                                        {subject.name}
                                    </div>
                                ))}
                            </div>
                            <div className="w-[60%]">
                                {subjects[activeSubject].subs.map((sub, idx) => (
                                    <div
                                        key={idx} 
                                        className="px-4 py-2 hover:bg-primary-hover cursor-pointer"
                                    >
                                        {sub}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Link
                        className="border-1 border-button-secondary-border bg-button-secondary text-button-secondary-foreground hover:bg-button-secondary-hover px-2 py-2 rounded-lg font-semibold flex items-center cursor-pointer"
                        href={authenticated ? "/create" : "/login"}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="lucide lucide-plus-icon lucide-plus mr-1"
                        >
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                        </svg>
                        Create
                    </Link>
                    <Link
                        className="border-1 border-button-primary bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover px-4 py-2 rounded-lg font-semibold flex items-center cursor-pointer"
                        href={authenticated ? "/profile" : "/login"}
                    >
                        {authenticated ? "Profile" : "Log In"}
                    </Link>
                </div>

                {/** Hamburger Menu */}
                <div className="lg:hidden">
                    <button 
                        className="bg-primary p-2 rounded-lg hover:bg-primary-hover cursor-pointer" 
                        onClick={toggleHamburger}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="lucide lucide-menu-icon lucide-menu"
                        >
                            <path d="M4 5h16"/>
                            <path d="M4 12h16"/>
                            <path d="M4 19h16"/>
                        </svg>
                    </button>
                    <div
                        className="absolute bg-black/50 top-0 right-0 h-screen w-screen"
                        hidden={!openHamburger}
                    >
                        <div className="absolute top-0 right-0 bg-primary h-screen w-full sm:w-96 flex flex-col px-4 py-6">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center text-highlight text-2xl font-bold">
                                    <Image src={'/StudyBeeLogo.png'} alt="StudyBee Logo" width={50} height={30} />
                                    <div>StudyBee</div>
                                </div>
                                <button
                                    className="bg-button-tertiary text-button-tertiary-foreground hover:bg-button-tertiary-hover rounded-lg p-2"
                                    onClick={toggleHamburger}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="lucide lucide-x-icon lucide-x"
                                    >
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="bg-input-background text-input-foreground rounded-lg w-full focus-within:ring-1 focus-within:ring-input-placeholder">
                                <form 
                                    onSubmit={search}
                                    className="flex items-center px-2 py-2 text-sm"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-input-placeholder mr-2"
                                    >
                                        <path d="m21 21-4.34-4.34" />
                                        <circle cx="11" cy="11" r="8" />
                                    </svg>
                                    <input type="text" placeholder="Search study sets" className="bg-transparent placeholder-input-placeholder outline-none w-full" />
                                </form>
                            </div>
                            <hr className="border-primary-border my-8" />
                            <div>
                                <Link
                                    href={authenticated ? "/create" : "/login"}
                                    className="border-1 border-button-secondary-border bg-button-secondary text-button-secondary-foreground hover:bg-button-secondary-hover px-2 py-2 rounded-lg font-semibold flex items-center cursor-pointer w-full justify-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-plus-icon lucide-plus mr-2 inline"
                                    >
                                        <path d="M5 12h14"/>
                                        <path d="M12 5v14"/>
                                    </svg>
                                    Create
                                </Link>
                                <Link
                                    href={authenticated ? "/profile" : "/login"}
                                    className="border-1 border-button-primary bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover px-4 py-2 rounded-lg font-semibold flex items-center cursor-pointer w-full justify-center mt-4"
                                >
                                    {authenticated ? "Profile" : "Log In"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};