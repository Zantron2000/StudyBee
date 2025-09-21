"use client";
import ActivityHeader from "@/components/ActivityHeader";
import GuideTerm from "@/components/GuideTerm";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [termIdx, setTermIdx] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [remembered, setRemembered] = useState([]);
    const [forgotten, setForgotten] = useState([]);
    const [finished, setFinished] = useState(false);
    const [settings, setSettings] = useState({
        order: 'sequential',
        display: 'all',
        show: 'term',
    });

    const markRemembered = (idx) => {
        setRemembered([...remembered, idx]);
        if (idx + 1 >= guide.terms.length) {
            setFinished(true);
        } else {
            setTermIdx(idx + 1);
            setFlipped(false);
        }
    }

    const markForgotten = (idx) => {
        setForgotten([...forgotten, idx]);
        if (idx + 1 >= guide.terms.length) {
            setFinished(true);
        } else {
            setTermIdx(idx + 1);
            setFlipped(false);
        }
    }

    const restart = () => {
        setTermIdx(0);
        setFlipped(false);
        setRemembered([]);
        setForgotten([]);
        setFinished(false);
    };

    const confirmSettings = (newSettings) => {
        setSettings(...newSettings);
        restart();
    }

    // TODO: Fetch guide data from backend
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
    };

    const terms = guide.terms;

    return (
        <div>
            <ActivityHeader 
                authenticated={true}
                guideId={guide.id}
                activity={"Flashcards"}
                settings={[
                    { name: 'order', current: settings.order, options: ['sequential', 'random'], label: 'Order' },
                    { name: 'display', current: settings.display, options: ['all', 'favorites'], label: 'Display' },
                    { name: 'show', current: settings.show, options: ['term', 'definition', 'both'], label: 'Show' },
                ]}
                confirmSettings={confirmSettings}
            />
            <main className="bg-primary text-primary-foreground flex justify-center">
                <div className="w-full max-w-4xl px-4 py-6">
                    <div hidden={finished}>
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
                            <div className="flex items-center justify-between w-1/4">
                                <button
                                    className="bg-red-500 p-2 rounded-lg cursor-pointer hover:bg-red-600"
                                    onClick={() => { markForgotten(termIdx)}}
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        className="text-white"
                                    >
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </button>
                                <p className="text-lg font-semibold">{termIdx + 1}/{guide.terms.length}</p>
                                <button
                                    className="bg-green-500 p-2 rounded-lg cursor-pointer hover:bg-green-600"
                                    onClick={() => { markRemembered(termIdx) }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="text-white"
                                    >
                                        <path d="M20 6 9 17l-5-5"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div hidden={!finished} className="space-y-6">
                        <h2 className="text-4xl font-bold mb-4 text-center">Congratulations!</h2>
                        <div className="flex justify-center text-sm text-primary-foreground-passive space-x-10 items-center">
                            <div>
                                <p className="text-green-700 text-2xl font-semibold text-center">{remembered.length}</p>
                                <p>Remembered</p>
                            </div>
                            <div>
                                <p className="text-red-700 text-2xl font-semibold text-center">{forgotten.length}</p>
                                <p>Forgotten</p>
                            </div>
                        </div>
                        <div className="flex justify-center text-sm font-semibold space-x-10 items-center">
                            <button
                                className="bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover px-4 py-2 rounded-lg cursor-pointer"
                                onClick={restart}
                            >
                                Restart
                            </button>
                            <Link
                                href={`/${guide.id}/${guide.slug}`}
                                className="border-1 border-button-secondary-border bg-button-secondary text-button-secondary-foreground hover:bg-button-secondary-hover px-4 py-2 rounded-lg cursor-pointer"
                            >
                                Back to Study Guide
                            </Link>
                        </div>
                        <div>
                            <h3 className="text-left text-xl font-semibold">Your Results</h3>
                            {remembered.map((idx) => (
                                <div key={idx} className="mt-4">
                                    <GuideTerm term={terms[idx]} borderColor={"border-green-500"} />
                                </div>
                            ))}
                            {forgotten.map((idx) => (
                                <div key={idx} className="mt-4">
                                    <GuideTerm term={terms[idx]} borderColor={"border-red-500"} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}