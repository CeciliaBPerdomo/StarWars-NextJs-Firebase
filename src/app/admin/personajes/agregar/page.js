import AgregarPersonajes from "@/components/personajes/AgregarPersonajes";

// http://localhost:3000/admin/personajes/agregar
export default function CrearPersonajes() {
    return (
        <div className="bg-black">
            <h1 className="text-blue-800 ml-8 pt-10 text-3xl text-center">
                Agregar personajes
            </h1>

            <AgregarPersonajes />
        </div>
    );
}
