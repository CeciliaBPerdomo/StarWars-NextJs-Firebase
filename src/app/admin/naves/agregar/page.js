import AgregarNaves from "@/components/naves/AgregarNaves";

// http://localhost:3000/admin/naves/agregar
export default function CrearNaves() {
    return (
        <div className="bg-black">
            <h1 className="text-blue-800 pl-8 pt-10 text-3xl text-center">
                Agregar Naves
            </h1>

            <AgregarNaves />
        </div>
    );
}
