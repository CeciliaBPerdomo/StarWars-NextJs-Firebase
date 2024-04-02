import React from "react";
import Image from 'next/image';
import Link from 'next/link';                   

const Footer = () => {
    return (
        <div>
            <header className="w-full bg-black border-t border-white">
                <div className='container m-auto flex justify-between items-center'>
                    <nav className='flex justify-between gap-2 mr-6 text-white'>
                        <p>made with 💛 by Cecilia Perdomo</p>
                    </nav>
                    <p className='text-4xl text-bold text-slate-100 mr-8'>
                        <Link href={"/"}>
                            <Image
                                src={"/logo.jpg"}
                                alt="Star Wars"
                                width={160}
                                height={200}
                            />
                        </Link>
                    </p>

                </div>
            </header>
            <br />
        </div>
    )
}

export default Footer