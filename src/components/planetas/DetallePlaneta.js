import Image from "next/image";

const PlanetaIndividual = async ({ id }) => {
    const item = await fetch(`${process.env.API_URL}/api/planetas/${id}`, {
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
            <div className="max-w-6xl m-auto p-6 text-white border border-white rounded-lg">
                <section className="flex gap-6">
                    <div className="relative basis-1/2 mt-4">
                        <Image
                            src={item.photo}
                            alt={item.name}
                            width={320}
                            height={860}
                            className="rounded-lg ml-10"
                        />
                    </div>

                    <div className="basis-1/2">
                        <h2 className="text-4xl text-blue-800 font-semibold pb-2">
                            {item.name}
                        </h2>

                        <p className="text-xl font-semibold pb-2">Clima: {item.climate}</p>
                        <p className="text-xl font-semibold pb-2">Población: {item.populationx}</p>
                        <p className="text-xl font-semibold pb-2">Terreno: {item.terrain}</p>
                        <p className="text-xl font-semibold pb-2">Diámetro: {item.diameter}</p>
                        <p className="text-xl font-semibold pb-2">Gravedad: {item.gravity}</p>
                        <p className="text-xl font-semibold pb-2">Período de orbita: {item.orbital_period}</p>
                        <p className="text-xl font-semibold pb-2">Período de rotación: {item.rotation_period}</p>
                        <p className="text-xl font-semibold pb-2">Superficie de agua: {item.surface_water}</p>

                    </div>

                </section>
            </div>
        </div>
    )
}

export default PlanetaIndividual