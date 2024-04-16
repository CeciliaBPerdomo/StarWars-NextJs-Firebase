"use client"
import React, { useState } from "react"

// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"

const crearNave = async (values) => {
    try {
        const docRef = doc(db, "naves", values.id)
        await setDoc(docRef, values)
        console.info("Nave guardada")
    } catch (error) {
        console.log(error)
    }
}

export default function AgregarNaves() {

    const [values, setValues] = useState({
        id: "",
        name: "",
        model: "",
        manufacturer: "",
        length: 0,
        cost_in_credits: 0,
        max_atmosphering_speed: 0,
        crew: "",
        passengers: "",
        cargo_capacity: 0,
        photo: "",
        consumables: "",
        hyperdrive_rating: "",
        MGLT: "",
        starship_class: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        await crearNave(values)
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

                    {/* Nombre */}
                    <div>
                        <label className="text-white text-xl text-center">Nombre: </label>
                        <input
                            type="text"
                            required
                            value={values.name}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="name"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Modelo */}
                    <div>
                        <label className="text-white text-xl text-center">Módelo: </label>
                        <input
                            type="text"
                            required
                            value={values.model}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="model"
                            onChange={handleChange}
                        />
                    </div>

                    {/* manufacturer */}
                    <div>
                        <label className="text-white text-xl text-center">Fabricante: </label>
                        <input
                            type="text"
                            required
                            value={values.manufacturer}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="manufacturer"
                            onChange={handleChange}
                        />
                    </div>

                    {/* length */}
                    <div>
                        <label className="text-white text-xl text-center">Longitud: </label>
                        <input
                            type="number"
                            required
                            value={values.length}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="length"
                            onChange={handleChange}
                        />
                    </div>

                    {/* cost_in_credits */}
                    <div>
                        <label className="text-white text-xl text-center">Costo en créditos: </label>
                        <input
                            type="number"
                            required
                            value={values.cost_in_credits}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="cost_in_credits"
                            onChange={handleChange}
                        />
                    </div>

                    {/* max_atmosphering_speed */}
                    <div>
                        <label className="text-white text-xl text-center">Velocidad máxima: </label>
                        <input
                            type="number"
                            required
                            value={values.max_atmosphering_speed}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="max_atmosphering_speed"
                            onChange={handleChange}
                        />
                    </div>

                    {/* crew */}
                    <div>
                        <label className="text-white text-xl text-center">Tripulación: </label>
                        <input
                            type="text"
                            required
                            value={values.crew}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="crew"
                            onChange={handleChange}
                        />
                    </div>

                    {/* passengers */}
                    <div>
                        <label className="text-white text-xl text-center">Pasajeros: </label>
                        <input
                            type="text"
                            required
                            value={values.passengers}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="passengers"
                            onChange={handleChange}
                        />
                    </div>

                    {/* cargo_capacity */}
                    <div>
                        <label className="text-white text-xl text-center">Capacidad de carga: </label>
                        <input
                            type="number"
                            required
                            value={values.cargo_capacity}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="cargo_capacity"
                            onChange={handleChange}
                        />
                    </div>

                    {/* consumables */}
                    <div>
                        <label className="text-white text-xl text-center">Consumbiles: </label>
                        <input
                            type="text"
                            required
                            value={values.consumables}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="consumables"
                            onChange={handleChange}
                        />
                    </div>

                    {/* hyperdrive_rating */}
                    <div>
                        <label className="text-white text-xl text-center">Ranking: </label>
                        <input
                            type="text"
                            required
                            value={values.hyperdrive_rating}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="hyperdrive_rating"
                            onChange={handleChange}
                        />
                    </div>


                    {/* MGLT */}
                    <div>
                        <label className="text-white text-xl text-center">MGLT: </label>
                        <input
                            type="text"
                            required
                            value={values.MGLT}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="MGLT"
                            onChange={handleChange}
                        />
                    </div>

                    {/* starship_class */}
                    <div>
                        <label className="text-white text-xl text-center">Clase: </label>
                        <input
                            type="text"
                            required
                            value={values.starship_class}
                            className="p-2 rounded w-full border border-white-800 block my-2"
                            name="starship_class"
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

                    <div className="px-4 mt-2 p-4 grid justify-items-end">
                        <button className="text-center bg-blue-200 rounded-full border p-2" type="submit">
                            Guardar nueva nave
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
