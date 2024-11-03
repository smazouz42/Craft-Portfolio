'use client';
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion"
import { FaDice } from "react-icons/fa";




const Header = () => {
    const [open, setIsOpen] = useState(false);

    return (
        <nav className="container mx-auto flex justify-between items-center p-5">
            <div className="text-white font-semibold flex gap-2 items-center">
                <FaDice />
                <a href="#home">Daiis</a>
            </div>

            <ul className="sm:flex space-x-7 text-[#ABB2BF] items-center hidden">
                {["home", "works", "about-me", "contacts"].map((section) => (
                    <li key={section}>
                        <a href={`#${section}`}>
                            <span className="text-purple-400">#</span> {section}
                        </a>
                    </li>
                ))}
                <LanguageSelector />
            </ul>

            <div className="sm:hidden flex items-center gap-4">
                <motion.button onClick={() => setIsOpen(!open)}
                 animate={{ rotate: open ? 90 : 0 }}
                 className={`${open ? 'text-purple-300' : 'text-white'} `}
                 >
                    {open ? <IoMenu className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
                </motion.button>

            </div>

            {open && (
                <ul className="absolute top-12 right-0 sm:hidden bg-purple-500 p-4 flex flex-col gap-4 text-white">
                    {["home", "works", "about-me", "contacts"].map((section) => (
                        <li key={section}>
                            <a href={`#${section}`} onClick={() => setIsOpen(false)}>
                                <span className="text-purple-900">#</span> {section}
                            </a>
                        </li>
                    ))}
                    <LanguageSelector />
                </ul>
            )}
        </nav>
    );
};

export { Header };
