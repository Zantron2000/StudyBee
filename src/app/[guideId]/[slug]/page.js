"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Page() {
    const [showOptions, setShowOptions] = useState(false);
    const [termIdx, setTermIdx] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const guide = {
        id: '123431',
        slug: 'spanish-vocabulary-level-1',
        title: 'Spanish Vocabulary - Level 1',
        bookmarked: true,
        terms: [
            {
                term: 'Hola',
                definition: 'Hello',
                favorite: true,
            },
            {
                term: 'Adiós',
                definition: 'Goodbye',
                favorite: true,
            },
            {
                term: 'Por favor',
                definition: 'Please',
                favorite: false,
            }
        ]
    }

    const methods = [
        { name: 'Flashcards', href: '/flashcards' },
        { name: 'Learn', href: '#' },
        { name: 'Quiz', href: '#' },
    ];

    return (
        <div className="font-sans w-full">
            <Header />
            <main className="bg-primary text-primary-foreground flex justify-center">
                <div className="w-full max-w-4xl px-4 py-6">
                    <div className="flex justify-between items-center mb-1">
                        <h1 className="text-2xl font-bold">{guide.title}</h1>
                        <div className="space-x-2 flex">
                            <button
                                className="text-button-tertiary-foreground hover:bg-button-tertiary-hover bg-button-tertiary border-1 border-button-tertiary-border-passive p-2 rounded-lg cursor-pointer"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill={guide.bookmarked ? "currentColor": "none"}
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                                </svg>
                            </button>
                            <div className="relative">
                                <button
                                    onClick={() => setShowOptions(!showOptions)}
                                    className="text-button-tertiary-foreground hover:bg-button-tertiary-hover bg-button-tertiary border-1 border-button-tertiary-border-passive p-2 rounded-lg cursor-pointer"
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
                                    >
                                        <circle cx="12" cy="12" r="1"/>
                                        <circle cx="19" cy="12" r="1"/>
                                        <circle cx="5" cy="12" r="1"/>
                                    </svg>
                                </button>
                                <div
                                    hidden={!showOptions}
                                    className="shadow-lg absolute bg-primary border-1 border-primary-border top-10 right-0 w-40 rounded-lg p-1"
                                >
                                    <button className="w-full bg-button-tertiary text-button-tertiary-foreground hover:bg-button-tertiary-hover rounded-lg p-1 flex items-center space-x-4 cursor-pointer">
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
                                            className="text-button-tertiary-foreground-passive"
                                        >
                                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                                        </svg>
                                        <p className="text-sm">Make a copy</p>
                                    </button>
                                    <button className="w-full bg-button-tertiary text-button-tertiary-foreground hover:bg-button-tertiary-hover rounded-lg p-1 flex items-center space-x-4 cursor-pointer">
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
                                            className="text-button-tertiary-foreground-passive"
                                        >
                                            <path d="M12 15V3"/>
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <path d="m7 10 5 5 5-5"/>
                                        </svg>
                                        <p className="text-sm">Export</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8">
                            <Image src="/notes.jpg" alt="Notes" width={200} height={200} className="h-full w-full object-cover rounded-full" />
                        </div>
                        <p className="text-primary-foreground-passive">by Maria Rodriguez</p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 my-6">
                        {methods.map((method, idx) => (
                            <Link
                                key={idx}
                                href={`/${guide.id}${method.href}`}
                                className="text-center bg-button-tertiary text-button-tertiary-foreground border-1 border-button-tertiary-border-passive px-4 py-2 rounded-lg inline-block hover:bg-button-tertiary-hover"
                            >
                                {method.name}
                            </Link>
                        ))}
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); setFlipped(!flipped) }} className="border-1 border-primary-border text-primary-foreground h-64 sm:h-80 rounded-lg flex flex-col w-full cursor-pointer">
                        <div className="rounded-t-lg pt-3 px-4 flex justify-end">
                            <button 
                                className={`
                                    hover:bg-button-tertiary-hover bg-button-tertiary p-2 rounded-lg cursor-pointer
                                    ${guide.terms[termIdx].favorite ? 'text-yellow-500': 'text-button-tertiary-foreground-passive'}
                                `}
                                onClick={(e) => { e.stopPropagation(); console.log('bye') }}
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill={guide.terms[termIdx].favorite ? "currentColor": "none"}
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    className=""
                                >
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-grow px-4 flex items-center justify-center text-xl font-semibold break-all">
                            { flipped ? guide.terms[termIdx].definition : guide.terms[termIdx].term }
                        </div>
                        <div className="px-4 py-3 rounded-b-lg bg-secondary text-secondary-foreground flex justify-center items-center text-center font-semibold">
                            Click to Flip
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-6 py-4">
                        <button
                            className="bg-button-tertiary text-button-tertiary-foreground border-1 border-button-tertiary-border-passive hover:bg-button-tertiary-hover p-2 rounded-lg cursor-pointer disabled:text-button-tertiary-foreground-passive disabled:border-button-tertiary-border-passive disabled:cursor-default disabled:hover:bg-button-tertiary"
                            disabled={termIdx === 0}
                            onClick={() => { setTermIdx(termIdx - 1); setFlipped(false); }}
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
                                <path d="m15 18-6-6 6-6"/>
                            </svg>
                        </button>
                        <p className="text-lg font-semibold">{termIdx + 1}/{guide.terms.length}</p>
                        <button
                            className="bg-button-tertiary text-button-tertiary-foreground border-1 border-button-tertiary-border-passive hover:bg-button-tertiary-hover p-2 rounded-lg cursor-pointer disabled:text-button-tertiary-foreground-passive disabled:border-button-tertiary-border-passive disabled:cursor-default disabled:hover:bg-button-tertiary"
                            disabled={termIdx === guide.terms.length - 1}
                            onClick={() => { setTermIdx(termIdx + 1); setFlipped(false); }}
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
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </button>
                    </div>
                    <div className="my-3">
                        <h2 className="text-xl font-semibold mb-2">Cards in Guide ({guide.terms.length})</h2>
                        <div className="space-y-4">
                            {guide.terms.map((term, idx) => (
                                <div
                                    key={idx}
                                    className="hover:shadow-lg w-full border-1 border-primary-border text-primary-foreground rounded-lg p-4 flex flex-row"
                                >
                                    <div className="flex-grow flex flex-col sm:flex-row space-y-2 sm:space-y-0">
                                        <div className="w-full sm:w-1/2">
                                            <p className="text-primary-foreground-passive">Term</p>
                                            <p className="text-md break-all">{term.term}</p>
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                            <p className="text-primary-foreground-passive">Definition</p>
                                            <p className="text-md break-all">{term.definition}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button 
                                            className={`
                                                hover:bg-button-tertiary-hover bg-button-tertiary p-2 rounded-lg cursor-pointer
                                                ${term.favorite ? 'text-yellow-500': 'text-button-tertiary-foreground-passive'}
                                            `}
                                        >
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="18" 
                                                height="18" 
                                                viewBox="0 0 24 24" 
                                                fill={term.favorite ? "currentColor": "none"}
                                                stroke="currentColor" 
                                                strokeWidth="2" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                                className=""
                                            >
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}