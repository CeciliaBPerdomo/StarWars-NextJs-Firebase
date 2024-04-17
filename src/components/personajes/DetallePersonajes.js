import Image from "next/image";

const PersonajeIndividual = async ({ id }) => {
    const item = await fetch(`${process.env.API_URL}/api/personajes/${id}`, {
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
                    <div className="flex items-center">
                        <Image
                            src={item.photo}
                            alt={item.name}
                            width={320}
                            height={860}
                            className="rounded-lg ml-10"
                        />
                    </div>

                    <div className="basis-1/2">
                        <h2 className="text-4xl text-blue-800 font-semibold pb-4 mb-4 mt-16">
                            {item.name}
                        </h2>

                        <p className="text-xl font-semibold pb-2">Género: {item.gender}</p>
                        <p className="text-xl font-semibold pb-2">Año de nacimiento: {item.birth_year}</p>
                        <p className="text-xl font-semibold pb-2">Color de cabello: {item.hair_color}</p>
                        <p className="text-xl font-semibold pb-2">Color de ojos: {item.eye_color}</p>
                        <p className="text-xl font-semibold pb-2">Color de piel: {item.skin_color}</p>
                        <p className="text-xl font-semibold pb-2">Peso: {item.mass} kg</p>
                        <p className="text-xl font-semibold pb-2">Altura: {item.height} cm</p>

                    </div>

                </section>
            </div>
        </div>
    )
}

export default PersonajeIndividual