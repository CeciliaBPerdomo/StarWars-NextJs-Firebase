import NavesIndividual from "@/components/naves/DetalleNaves"

function DetalleNaves({params}) {
    const {id} = params

    return (
        <div>
            <NavesIndividual id={id} />
        </div>
    )
}

export default DetalleNaves