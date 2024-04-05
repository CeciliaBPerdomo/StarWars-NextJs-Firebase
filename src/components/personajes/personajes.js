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
                        <h4 className="text-sm my-4 text-center text-white">Nombre: <b>{item.name}</b></h4>
                        <h4 className="text-sm my-4 text-center text-white">Género: {item.gender}</h4>
                    </div>
                    <div className="px-4 border-t border-gray-200 mt-2 p-4 grid justify-items-end">
                        <button className="text-center bg-blue-200 rounded-full border p-2">
                            + info
                        </button>
                    </div>
                </Link>
            </article>
        </div>
    );
}
