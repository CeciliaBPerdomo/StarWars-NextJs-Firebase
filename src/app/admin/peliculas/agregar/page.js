import AgregarPelicula from "@/components/peliculas/AgregarPeliculas";

// http://localhost:3000/admin/peliculas/agregar
export default function CrearPeliculas() {
    return (
        <div className="bg-black">
            <h1 className="text-blue-800 pl-8 pt-10 text-3xl text-center">
                Agregar peliculas
            </h1>

            <AgregarPelicula />
        </div>
    );
}
