import AgregarPlaneta from "@/components/planetas/AgregarPlanetas";

// http://localhost:3000/admin/planetas/agregar
export default function CrearPlanetas() {
    return (
        <div className="bg-black">
            <h1 className="text-blue-800 ml-8 pt-10 text-3xl text-center">
                Agregar planetas
            </h1>
            
            <AgregarPlaneta />
        </div>
    );
}
