import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardNaves({ item }) {
    return (
        <div className="bg-black mb-8">
            <article className="basis-72 shadow-lg rounded border">
                    <div className="flex justify-center align-center" >
                        <Image
                            alt={item.name}
                            src={item.photo}
                            width={250}
                            height={60}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="px-4 border-t border-gray-200" >
                        <h4 className="text-sm my-4 text-center text-white">Nombre: <b>{item.name}</b></h4>
                        <h4 className="text-sm my-4 text-center text-white">Módelo: {item.model}</h4>
                    </div>
                    <Link href={`/naves/detail/${item.id}`}>
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