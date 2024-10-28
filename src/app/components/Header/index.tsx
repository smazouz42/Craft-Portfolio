'use client';


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const Header = () => {
    return (
        <nav className="container mx-auto flex justify-between items-center py-5">
            <div className="text-white font-semibold flex gap-2 ">
                {/* <Image
                    src="/logo.png"
                    alt="logo"
                    width={10}
                    height={10} /> */}
                <a href="#home">Daiis</a>
            </div>
            <ul className="flex space-x-7 text-[#ABB2BF] items-center">
                {["home", "works", "about-me", "contacts"].map((section) => (
                    <li key={section}>
                        <a href={`#${section}`}>
                            <span className="text-purple-400">#</span> {section}
                        </a>
                    </li>
                ))}
                <Select>
                    <SelectTrigger className="w-16 bg-transparent border-none ">
                        <SelectValue placeholder="EN" />
                    </SelectTrigger>
                    <SelectContent>
                        {["EN", "FR", "AR"].map((lang) => (
                            <SelectItem key={lang} value={lang}>
                                {lang}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </ul>
        </nav>
    );
};

export { Header };
