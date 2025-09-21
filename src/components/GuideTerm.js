export default function GuideTerm({ term, borderColor }) {
    return (
        <div
            className={`
                w-full border-1 bg-primary text-primary-foreground rounded-lg p-4 flex flex-row
                ${borderColor ? borderColor : 'border-primary-border'}    
            `}
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
    );
}