"use client"
import React, { useState } from "react"

// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"

const crearPelicula = async (values) => {
    try {
        const docRef = doc(db, "peliculas", values.id)
        await setDoc(docRef, values)
        console.info("Pelicula guardada")
    } catch (error) {
        console.log(error)
    }
}

export default function AgregarPelicula() {

    const [values, setValues] = useState({
        id: "",
        title: "",
        producer: "",
        director: "",
        episode_id: 0,
        release_date: "",
        opening_crawl: "",
        photo: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        await crearPelicula(values)
    }


    return (
        <div className="bg-black">
            <div className="container m-auto max-w-lg">
                <form onSubmit={handleSubmit} className="py-12 bg-black">

                    {/* Id */}
                    <div>
                    <label className="text-white text-xl text-center">Id: </label>
                    <input
                        type="text"
                        required
                        value={values.id}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="id"
                        onChange={handleChange}
                    />
                    </div>

                    {/* Titulo */}
                    <div>
                    <label className="text-white text-xl text-center">Título: </label>
                    <input
                        type="text"
                        required
                        value={values.title}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="title"
                        onChange={handleChange}
                    />
                    </div>

                    {/* Productor */}
                    <div>
                    <label className="text-white text-xl text-center">Productor(es): </label>
                    <input
                        type="text"
                        required
                        value={values.producer}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="producer"
                        onChange={handleChange}
                    />
                    </div>

                    {/* Director */}
                    <div>
                    <label className="text-white text-xl text-center">Director(es): </label>
                    <input
                        type="text"
                        required
                        value={values.director}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="director"
                        onChange={handleChange}
                    />
                    </div>

                    {/* episode_id */}
                    <div>
                    <label className="text-white text-xl text-center">Id episodio: </label>
                    <input
                        type="number"
                        required
                        value={values.episode_id}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="episode_id"
                        onChange={handleChange}
                    />
                    </div>

                    {/* release_date */}
                    <div>
                    <label className="text-white text-xl text-center">Fecha de producción: </label>
                    <input
                        type="date"
                        required
                        value={values.release_date}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="release_date"
                        onChange={handleChange}
                    />
                    </div>

                        {/* Foto */}
                    <div>
                    <label className="text-white text-xl text-center">Imágen: </label>
                    <input
                        type="text"
                        required
                        value={values.photo}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="photo"
                        onChange={handleChange}
                    />
                    </div>

                    {/* opening_crawl */}
                    <div>
                    <label className="text-white text-xl text-center">Sipnosis: </label>
                    <textarea
                        type="text"
                        required
                        value={values.opening_crawl}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="opening_crawl"
                        onChange={handleChange}
                    />
                    </div>                  

                    <div className="px-4 border-t border-gray-200 mt-2 p-4 grid justify-items-end">
                        <button className="text-center bg-blue-200 rounded-full border p-2"
                        type="submit"
                        >
                            Guardar nueva pelicula
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
