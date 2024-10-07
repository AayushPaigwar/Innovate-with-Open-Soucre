import Link from "next/link"
import { Linkedin, Github } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";

const FooterColumn = ({ title, links }) => (
    <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-400 uppercase">{title}</h3>
        <ul className="space-y-1">
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

export default function Footer() {
    const footerLinks = {
        contact: [
            { label: "Aayush Paigwar", href: "https://github.com/AayushPaigwar" },
            { label: "Pawan Bhayde", href: "https://github.com/pawanbhayde" },
            { label: "Atharva Werulkar", href: "https://github.com/Atharva-werulkar" },
        ],
    }

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between gap-8">
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-semibold">Innovate With Open Source</span>
                        </Link>
                        <p className="text-gray-400">
                            Kickstart your open-source journey with beginner-friendly repository <br /> designed for first-time contributors this Hacktoberfest!
                        </p>
                    </div>
                    <FooterColumn title="Repository Maintainers" links={footerLinks.contact} />
                </div>
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <Link href="https://www.linkedin.com/in/aayush-paigwar/" className="text-gray-400 hover:text-white">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link href="https://github.com/AayushPaigwar" className="text-gray-400 hover:text-white">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-6 w-6" />
                        </Link>
                        <Link href="https://x.com/aayush27_11" className="text-gray-400 hover:text-white">
                            <span className="sr-only">Twitter</span>
                            <FaXTwitter className="h-6 w-6" />
                        </Link>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Copyright © {new Date().getFullYear()} Innovate With Open Source.
                    </p>
                </div>
            </div>
        </footer>
    )
}