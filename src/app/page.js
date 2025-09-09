import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StudySetCard from "@/components/StudySetCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans w-full">
      <Header />
      <div className="flex flex-col items-center bg-quaternary text-quaternary-foreground">
        <div className="px-8 max-w-7xl w-full">
          <div className="flex flex-col-reverse lg:flex-row items-start justify-between py-12 lg:py-24">
            <div className="w-full lg:w-[45%] h-full flex flex-col items-between">
              <div className="flex justify-center lg:justify-start mt-4 lg:mt-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 w-[60%] lg:w-full text-center lg:text-left">
                  Learn anything with <span className="text-highlight">flashcards</span>
                </h1>
              </div>
              <p className="text-lg mb-8 text-primary-foreground-passive text-center lg:text-left">Join students using StudyBee to study smarter, not harder. Create your own flashcards or choose from millions created by other students.</p>
              <div className="space-x-4 mb-8 flex justify-center lg:justify-start">
                <button
                  className="bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover px-4 py-3 rounded-lg font-semibold text-sm"
                >
                  Get started for free
                </button>
                <button
                  className="bg-button-tertiary text-button-tertiary-foreground hover:bg-button-tertiary-hover px-4 py-3 rounded-lg font-semibold text-sm border-1 border-button-tertiary-border"
                >
                  Browse study sets
                </button>
              </div>
              <div className="flex justify-center lg:justify-start space-x-20 text-sm text-primary-foreground-passive">
                <div className="flex flex-col items-center">
                  <div className="bg-highlight/20 rounded-full p-3 mb-4">
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
                      className="bg-transparent text-highlight"
                    >
                      <path d="M12 7v14"/>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
                    </svg>
                  </div>
                  <p>0+ study sets</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-highlight/20 rounded-full p-3 mb-4">
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
                      className="bg-transparent text-highlight"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <circle cx="9" cy="7" r="4"/>
                    </svg>
                  </div>
                  <p>0+ students</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-highlight/20 rounded-full p-3 mb-4">
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
                      className="bg-transparent text-highlight"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
                    </svg>
                  </div>
                  <p>Study faster</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image src="/notes.jpg" alt="Notes" width={600} height={600} className="rounded-2xl w-full h-72 md:h-96 lg:w-auto lg:h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-primary text-primary-foreground">
        <div className="px-8 max-w-7xl w-full py-12 lg:py-24">
          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-semibold">Featured study sets</h2>
            <p className="text-quaternary-foreground-passive">Popular study sets created by our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StudySetCard />
            <StudySetCard />
            <StudySetCard />
            <StudySetCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-quaternary text-quaternary-foreground">
        <div className="px-8 max-w-7xl w-full">
          <div className="flex flex-col-reverse lg:flex-row items-start justify-between py-12 lg:py-24">
            <div className="w-full lg:w-1/2">
              <Image src="/cards.jpg" alt="Notes" width={600} height={600} className="rounded-2xl w-full h-72 md:h-96 lg:w-auto lg:h-auto" />
            </div>
            <div className="w-full lg:w-[45%] h-full flex flex-col items-between">
              <div className="flex justify-center lg:justify-start mt-4 lg:mt-0">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 w-[60%] lg:w-full text-center lg:text-left">
                  Create your own <span className="text-highlight">study sets</span>
                </h2>
              </div>
              <p className="text-center lg:text-left text-lg mb-8 text-primary-foreground-passive">Turn your notes into interactive flashcards. Add images, audio, and more to make studying engaging and effective.</p>
              <div className="flex flex-col justify-start space-x-20 text-primary-foreground space-y-4">
                <div className="flex items-center">
                  <div className="bg-highlight/20 rounded-full p-2 mr-4">
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
                      className="bg-transparent text-highlight"
                    >
                      <path d="M5 12h14"/>
                      <path d="M12 5v14"/>
                    </svg>
                  </div>
                  <p>Easy-to-use flashcard creator</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-highlight/20 rounded-full p-2 mr-4">
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
                      className="bg-transparent text-highlight"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
                    </svg>
                  </div>
                  <p>Multiple study modes and games</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-highlight/20 rounded-full p-2 mr-4">
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
                      className="bg-transparent text-highlight"
                    >
                      <circle cx="18" cy="5" r="3"/>
                      <circle cx="6" cy="12" r="3"/>
                      <circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
                    </svg>
                  </div>
                  <p>Share with classmates and friends</p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
                <Link
                  className="inline-block bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover rounded-lg font-semibold px-4 py-2 text-sm mt-8 cursor-pointer"
                  href={"/create"}
                >
                  <span className="mr-4">+</span> Create your first set
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
