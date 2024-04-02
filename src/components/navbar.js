"use client"
import React from "react";
import Image from 'next/image';
import Link from 'next/link';                   // Link
import { usePathname } from 'next/navigation';  // Links activos

const Navbar = () => {
    const pathname = usePathname()
    const links = [
        {
            label: "Personajes",
            href: "/personajes"
        },

        {
            label: "Planetas",
            href: "/planetas"
        },

        {
            label: "Peliculas",
            href: "/peliculas"
        },

        {
            label: "Naves",
            href: "/naves"
        }
    ]

    return (
        <div>
            <header className="w-full py-6 bg-black border-b border-white">
                <div className='container m-auto flex justify-between items-center'>
                    <p className='text-4xl text-bold text-slate-100 mr-8'>
                        <Link href={"/"}>
                            <Image
                                src={"/LogoStarWars.png"}
                                alt="Star Wars"
                                width={280}
                                height={200}
                            />
                        </Link>
                    </p>
                    <nav className='flex justify-between gap-2 mr-6'>
                        {links.map(link => {
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`${pathname === link.href ?
                                        'font-bold underline underline-offset-8' : ''} 
                                        text-base p-3 text-white text-3xl`}>
                                    {link.label}
                                </Link>
                            )
                        })}

                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar