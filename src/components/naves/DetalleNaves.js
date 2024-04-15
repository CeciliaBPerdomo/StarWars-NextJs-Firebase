import Image from "next/image";

const NavesIndividual = async ({ id }) => {
    const item = await fetch(`${process.env.API_URL}/api/naves/${id}`, {
        cache: "no-store"
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .catch(error => console.error('Fetch error:', error));

    return (
        <div className="bg-black p-10">
            <div className="max-w-6xl m-auto pb-2 pr-2 text-white border border-white rounded-lg">
                <section className="flex gap-6">
                    <div className="relative basis-1/2">
                        <Image
                            src={item.photo}
                            alt={item.name}
                            width={320}
                            height={860}
                            className="rounded-lg ml-14 mt-10"
                        />
                    </div>

                    <div className="basis-1/2">
                        <h2 className="text-4xl text-blue-800 font-semibold pb-4 mb-4 mt-16">
                            {item.name}
                        </h2>

                        <p className="text-xl font-semibold pb-2">Módelo: {item.model}</p>
                        <p className="text-xl font-semibold pb-2">Fabricante: {item.manufacturer}</p>
                        <p className="text-xl font-semibold pb-2">Costo en créditos: {item.cost_in_credits}</p>
                        <p className="text-xl font-semibold pb-2">Velocidad máxima: {item.max_atmosphering_speed}</p>
                        <p className="text-xl font-semibold pb-2">Tripulación: {item.crew}</p>
                        <p className="text-xl font-semibold pb-2">Pasajeros: {item.passengers}</p>
                        <p className="text-xl font-semibold pb-2">Capacidad de carga: {item.cargo_capacity}</p>
                        <p className="text-xl font-semibold pb-2">Consumibles: {item.consumables}</p>
                        <p className="text-xl font-semibold pb-2">Ranking: {item.hyperdrive_rating}</p>
                        <p className="text-xl font-semibold pb-2">MGLT: {item.MGLT}</p>
                        <p className="text-xl font-semibold pb-2">Clase: {item.starship_class}</p>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default NavesIndividual