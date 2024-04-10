import ListaPlanetas from "@/components/planetas/ListadePlanetas";


export default function Planetas() {
    return (
        <div className="bg-black">
            <h1 className="text-blue-800 ml-8 pt-8 text-3xl text-center mb-8">
                Planetas
            </h1>
            <ListaPlanetas />
        </div>
    );
}
