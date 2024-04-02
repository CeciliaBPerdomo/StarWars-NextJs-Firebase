import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardPersonajes({ item }) {
    return (
        <div className="bg-black mb-8">
            <article className="basis-72 shadow-lg rounded border">
                <Link
                href="/"
                    // href={`/productos/detail/${item.slug}`} 
                    className="flex flex-col">
                    <div className="flex justify-center align-center" >
                        <Image
                            alt={item.name}
                            src={item.photo}
                            width={240}
                            height={200}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="px-4 border-t border-gray-200" >
                        <h4 className="text-sm my-4 text-center text-white">{item.name}</h4>
                    </div>
                    <div className="px-4 border-t border-gray-200 mt-2">
                        {/* <p className="text-2xl font-semibold mb-6 text-end text-red-600">u$s {item.price}</p> */}
                    </div>
                </Link>
            </article>
        </div>
    );
}
