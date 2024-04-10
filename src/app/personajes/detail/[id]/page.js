import PersonajeIndividual from "@/components/personajes/DetallePersonajes"

function DetallePersonajes({params}) {
    const {id} = params

    return (
        <div>
            <PersonajeIndividual id={id} />
        </div>
    )
}

export default DetallePersonajes