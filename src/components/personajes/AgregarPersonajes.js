"use client"
import React, { useState } from "react"

// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"

const crearPersonaje = async (values) => {
    try {
        const docRef = doc(db, "personajes", values.id)
        await setDoc(docRef, values)
        console.info("Personaje guardado")
    } catch (error) {
        console.log(error)
    }
}

export default function AgregarPersonajes() {

    const [values, setValues] = useState({
        id: "",
        name: "",
        height: 0,
        mass: 0,
        birth_year: "",
        eye_color: "",
        hair_color: "",
        skin_color: "",
        gender: "",
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
        await crearPersonaje(values)
    }


    return (
        <div className="bg-black">
            <div className="container m-auto max-w-lg">
                <form onSubmit={handleSubmit} className="my-12 bg-black">

                    {/* Id */}
                    <label className="text-white text-xl text-center">Id: </label>
                    <input
                        type="text"
                        required
                        value={values.id}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="id"
                        onChange={handleChange}
                    />

                    {/* Nombre */}
                    <label className="text-white text-xl text-center">Nombre: </label>
                    <input
                        type="text"
                        required
                        value={values.name}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="name"
                        onChange={handleChange}
                    />

                    {/* Genero */}
                    <label className="text-white text-xl text-center">Género: </label>
                    <input
                        type="text"
                        required
                        value={values.gender}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="gender"
                        onChange={handleChange}
                    />

                    {/* Altura */}
                    <label className="text-white text-xl text-center">Altura: </label>
                    <input
                        type="number"
                        required
                        value={values.height}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="height"
                        onChange={handleChange}
                    />

                    {/* Peso */}
                    <label className="text-white text-xl text-center">Peso: </label>
                    <input
                        type="number"
                        required
                        value={values.mass}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="mass"
                        onChange={handleChange}
                    />

                    {/* Nacimiento */}
                    <label className="text-white text-xl text-center">Año de Nacimiento: </label>
                    <input
                        type="text"
                        required
                        value={values.birth_year}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="birth_year"
                        onChange={handleChange}
                    />

                    {/* Color de ojos */}
                    <label className="text-white text-xl text-center">Color de ojos: </label>
                    <input
                        type="text"
                        required
                        value={values.eye_color}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="eye_color"
                        onChange={handleChange}
                    />

                    {/* Color de pelo */}
                    <label className="text-white text-xl text-center">Color de pelo: </label>
                    <input
                        type="text"
                        required
                        value={values.hair_color}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="hair_color"
                        onChange={handleChange}
                    />

                    {/* Color de piel */}
                    <label className="text-white text-xl text-center">Color de piel: </label>
                    <input
                        type="text"
                        required
                        value={values.skin_color}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="skin_color"
                        onChange={handleChange}
                    />

                    {/* Foto */}
                    <label className="text-white text-xl text-center">Imágen: </label>
                    <input
                        type="text"
                        required
                        value={values.photo}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="photo"
                        onChange={handleChange}
                    />

                    <div className="px-4 border-t border-gray-200 mt-2 p-4 grid justify-items-end">
                        <button className="text-center bg-blue-200 rounded-full border p-2"
                        type="submit"
                        >
                            Guardar nuevo personaje
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
