"use client";

export default function Footer() {
    const footerLinks = [
        { group: 'About Us', links: [{ name: 'About StudyBee', href: '#' }, { name: 'Donate', href: '#' }, { name: 'Our Mission', href: '#' }] },
        { group: 'Users', links: [{ name: 'Learn', href: '#' }, { name: 'Teachers', href: '#' }, { name: 'Live', href: '#' }, { name: 'Import Profile', href: '#' }] },
        { group: 'Support', links: [{ name: 'GitHub', href: '#' }, { name: 'Contribute', href: '#' }] },
        { group: 'Resources', links: [{ name: 'Help Center', href: '#' }, { name: 'Community Guidelines', href: '#' }, { name: 'Privacy & Terms', href: '#' }, { name: 'Cookie Settings', href: '#' }] },
    ]

    return (
        <footer>
            <div className="bg-background-secondary text-foreground-secondary pt-4 px-16 flex justify-between pb-16">
                {
                    footerLinks.map((section) => (
                        <div key={section.group}>
                            <div className="text-lg font-bold mb-2">
                                {section.group}
                            </div>
                            <div className="space-y-1 text-md">
                                {section.links.map((link) => (
                                    <div key={link.name}>
                                        <a href={link.href} className="hover:underline">
                                            {link.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="bg-background-quaternary text-foreground-quaternary py-4 px-16">
                <p className="text-xl">
                    &copy;StudyBee 2024. All rights reserved.
                </p>
            </div>
        </footer>
    );
}