"use client";

import Image from "next/image";

export default function Footer() {
    const footerLinks = [
        { group: 'Users', links: [{ name: 'Study modes', href: '#' }, { name: 'Teachers', href: '#' }, { name: 'Live', href: '#' }, { name: 'Import Profile', href: '#' }] },
        { group: 'Support', links: [{ name: 'GitHub', href: '#' }, { name: 'Contribute', href: '#' }, { name: 'Donate', href: '#' }] },
        { group: 'Resources', links: [{ name: 'Help Center', href: '#' }, { name: 'Community Guidelines', href: '#' }, { name: 'Privacy & Terms', href: '#' }, { name: 'Cookie Settings', href: '#' }] },
    ]

    return (
        <footer className="bg-secondary text-secondary-foreground flex justify-center">
            <div className="px-8 max-w-7xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-8">
                    <div className="text-lg font-semibold">
                        <div className="flex justify-center md:justify-start items-center mb-4">
                            <Image className="mr-2" src={'/StudyBeeLogo-light.png'} alt="StudyBee Logo" width={30} height={20} />
                            <div>StudyBee</div>
                        </div>
                        <div className="text-sm text-secondary-foreground-passive font-normal w-full text-center md:text-left">
                            The best way to study with flashcards. Join millions of students and educators worldwide.
                        </div>
                    </div>
                    {
                        footerLinks.map((section) => (
                            <div key={section.group}>
                                <div className="text-center md:text-left text-md font-bold mb-2 lg:mb-4">
                                    {section.group}
                                </div>
                                <div className="text-center md:text-left space-y-2 md:space-y-1 text-sm">
                                    {section.links.map((link) => (
                                        <div key={link.name}>
                                            <a href={link.href} className="hover:text-secondary-foreground text-secondary-foreground-passive">
                                                {link.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="bg-secondary text-secondary-foreground-passive border-t-1 border-secondary-border py-8">
                    <p className="text-sm text-center">
                        &copy;2025 StudyBee. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}