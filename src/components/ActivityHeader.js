"use client";
import Link from "next/link";
import { useState } from "react";
import ActivitySettings from "./ActivitySettings";

export default function ActivityHeader({ authenticated, activity, guideId, settings, confirmSettings }) {
    const [showOptions, setShowOptions] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const studyMethods = [
        { name: "Flashcards", href: `/${guideId}/flashcards` },
        { name: "Study", href: `/${guideId}/study` },
        { name: "Quiz", href: `/${guideId}/quiz` },
    ];

    const links = [
        { name: "Home", href: `/${guideId}` },
        { name: "Search", href: `/search` },
    ];

    return (
        <header className="bg-primary text-primary-foreground flex justify-center items-center h-16 border-b-1 border-primary-border">
            <div className="px-8 max-w-7xl w-full flex justify-between items-center">
                <div className="relative">
                    <button 
                        className="text-sm font-semibold flex items-center space-x-2 cursor-pointer hover:bg-button-tertiary-hover bg-button-tertiary text-button-tertiary-foreground px-3 py-2 rounded-lg"
                        onClick={() => setShowOptions(!showOptions)}
                    >
                        <p>{activity}</p>
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
                        className="absolute top-10 bg-primary shadow-lg py-2 w-48 rounded-lg border-1 border-primary-border flex flex-col"
                        hidden={!showOptions}
                    >
                        {studyMethods.filter(({ name}) => name !== activity).map((method, idx) => (
                            <Link
                                key={idx}
                                href={method.href}
                                className="bg-button-tertiary text-button-tertiary-foreground hover:bg-button-tertiary-hover px-4 py-2 text-sm"
                            >
                                {method.name}
                            </Link>
                        ))}
                        <hr className="my-2 text-primary-border" />
                        {links.map((method, idx) => (
                            <Link
                                key={idx}
                                href={method.href}
                                className="bg-button-tertiary text-button-tertiary-foreground hover:bg-button-tertiary-hover px-4 py-2 text-sm"
                            >
                                {method.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4 text-sm font-semibold">
                    <button
                        onClick={() => setShowSettings(true)}
                        className="text-sm cursor-pointer flex items-center space-x-2 border-1 border-button-secondary-border bg-button-secondary text-button-secondary-foreground hover:bg-button-secondary-hover px-2 py-2 rounded-lg"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        >
                            <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        <p>Options</p>
                    </button>
                    <Link
                        className="text-sm bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover px-4 py-2 rounded-lg font-semibold flex items-center cursor-pointer"
                        href={authenticated ? "/profile" : "/login"}
                    >
                        {authenticated ? "Profile" : "Log In"}
                    </Link>
                    <Link
                        href={`/${guideId}`}
                        className="text-button-tertiary-foreground-passive hover:bg-button-tertiary-hover p-2 rounded-lg"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18"/>
                            <path d="m6 6 12 12"/>
                        </svg>
                    </Link>
                </div>
                {showSettings ? <ActivitySettings
                    settings={settings}
                    confirmSettings={confirmSettings}
                    closeSettings={() => setShowSettings(false)}
                /> : null}
            </div>
        </header>
    );
}