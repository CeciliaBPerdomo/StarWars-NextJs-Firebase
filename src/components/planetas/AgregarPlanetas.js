"use client"
import React, { useState } from "react"

import { doc, setDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"

const crearPlaneta = async (values) => {
    try {
        const docRef = doc(db, "planetas", values.id)
        await setDoc(docRef, values)
        console.info("Planeta guardado")
    } catch (error) {
        console.log(error)
    }
}

export default function AgregarPlaneta() {

    const [values, setValues] = useState({
        id: "",
        name: "",
        rotation_period: 0,
        orbital_period: 0,
        diameter: 0,
        climate: "",
        gravity: "",
        terrain: "",
        surface_water: 0,
        photo: "",
        population: 0
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        await crearPlaneta(values)
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

                    {/* rotation_period */}
                    <label className="text-white text-xl text-center">Período de rotación: </label>
                    <input
                        type="text"
                        required
                        value={values.rotation_period}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="rotation_period"
                        onChange={handleChange}
                    />

                    {/* orbital_period */}
                    <label className="text-white text-xl text-center">Período orbital: </label>
                    <input
                        type="number"
                        required
                        value={values.orbital_period}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="orbital_period"
                        onChange={handleChange}
                    />

                    {/* diameter */}
                    <label className="text-white text-xl text-center">Diámetro: </label>
                    <input
                        type="number"
                        required
                        value={values.diameter}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="diameter"
                        onChange={handleChange}
                    />

                    {/* climate */}
                    <label className="text-white text-xl text-center">Clima: </label>
                    <input
                        type="text"
                        required
                        value={values.climate}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="climate"
                        onChange={handleChange}
                    />

                    {/* Gravedad */}
                    <label className="text-white text-xl text-center">Gravedad: </label>
                    <input
                        type="text"
                        required
                        value={values.gravity}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="gravity"
                        onChange={handleChange}
                    />

                    {/* terrain */}
                    <label className="text-white text-xl text-center">Terreno: </label>
                    <input
                        type="text"
                        required
                        value={values.terrain}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="terrain"
                        onChange={handleChange}
                    />

                    {/* surface_water */}
                    <label className="text-white text-xl text-center">Superficie de agua: </label>
                    <input
                        type="number"
                        required
                        value={values.surface_water}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="surface_water"
                        onChange={handleChange}
                    />

                    {/* population */}
                    <label className="text-white text-xl text-center">Población: </label>
                    <input
                        type="number"
                        required
                        value={values.population}
                        className="p-2 rounded w-full border border-white-800 block my-2"
                        name="population"
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
                            Guardar nuevo planeta
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
