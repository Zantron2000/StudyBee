const { default: Image } = require("next/image");

export default function StudySetCard() {
    const description = 'Spanish is a beautiful and widely spoken language with a rich cultural heritage. This study set covers essential vocabulary for beginners, including common phrases, everyday objects, and basic grammar rules to help you get started on your language learning journey.';
    const trimmedDescription = description.length > 255 ? description.substring(0, 252) + '...' : description; 

    return (
        <div className="group border-1 border-primary-border rounded-lg hover:shadow-lg transition">
            <div className="px-4 py-4 bg-primary rounded-t-lg">
                <p className="bg-yellow-300 inline px-2 py-1 rounded-lg text-sm">Languages</p>
                <div className="my-3">
                    <p className="font-semibold mb-2 overflow-hidden transition group-hover:text-highlight w-full text-ellipsis text-nowrap">Spanish Vocabulary - Level 1 asdfasd asd ad sasd asd f</p>
                    <p className="text-primary-foreground-passive text-sm h-24 md:h-28 lg:h-32 text-ellipsis">{trimmedDescription}</p>
                </div>
                <div className="w-full text-primary-foreground-passive text-sm flex justify-between">
                    <p>5 terms</p>
                    <div className="flex space-x-4">
                        <div className="flex items-center">
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
                                className="mr-1"
                            >
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            <p className="">2.5k</p>
                        </div>
                        <div className="flex items-center">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="mr-1 text-yellow-400"
                            >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                            </svg>
                            <p>4.8</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-b-lg border-t-1 border-primary-border p-4 bg-gray-100 flex items-center space-x-2">
                <div className="w-8 h-8">
                    <Image src="/notes.jpg" alt="Notes" width={200} height={200} className="h-full w-full object-cover rounded-full" />
                </div>
                <p className="text-sm text-primary-foreground-passive">by Maria Rodriguez</p>
            </div>
        </div>
    )
}