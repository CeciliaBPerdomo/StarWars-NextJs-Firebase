import PeliculaIndividual from "@/components/peliculas/DetallePeliculas"

function DetallePeliculas({params}) {
    const {id} = params

    return (
        <div>
            <PeliculaIndividual id={id} />
        </div>
    )
}

export default DetallePeliculas