import PlanetaIndividual from "@/components/planetas/DetallePlaneta"

function DetallePersonajes({params}) {
    const {id} = params

    return (
        <div>
           <PlanetaIndividual id={id} />
        </div>
    )
}

export default DetallePersonajes