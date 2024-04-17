import Image from "next/image";

const PeliculaIndividual = async ({ id }) => {
    const item = await fetch(`${process.env.API_URL}/api/peliculas/${id}`, {
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
                    <div className="flex items-center">
                        <Image
                            src={item.photo}
                            alt={item.title}
                            width={320}
                            height={860}
                            className="rounded-lg ml-14"
                        />
                    </div>

                    <div className="basis-1/2">
                        <h2 className="text-4xl text-blue-800 font-semibold pb-4 mb-4 mt-16">
                            {item.title}
                        </h2>

                        <p className="text-xl font-semibold pb-2">Productor: {item.producer}</p>
                        <p className="text-xl font-semibold pb-2">Director: {item.director}</p>
                        <p className="text-xl font-semibold pb-2">Año de producción: {item.release_date}</p>
                        <p className="text-xl font-semibold pb-2">Sipnasis: {item.opening_crawl}</p>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default PeliculaIndividual