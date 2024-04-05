import Image from "next/image";
import Link from "next/link";
import CardPersonajes from "./personajes";

const ListaPersonajes = async () => {
    try {
        const response = await fetch(`${process.env.API_URL}/api/personajes`, {
            cache: "no-store",
            next: { tags: ["personajes"] },
            headers: { 'Content-Type': 'application/json' }  // Especifica el tipo de contenido esperado
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const items = await response.json();
        if (items) {
            return (
                <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
                    {items.map(item => <CardPersonajes key={item.id} item={item} />)}
                </section>

            );
        } else {
            console.error('Cadena JSON vacía o indefinida.');
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }

    return <p>No hay personajes baby!</p>;
}

export default ListaPersonajes