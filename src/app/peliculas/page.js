import ListaPeliculas from "@/components/peliculas/ListaPeliculas";
import Image from "next/image";

export default function Peliculas() {
    return (
      <div className="bg-black">
        <div className="flex justify-center items-center p-6">
                <Image
                    src="/Peliculas.png"
                    alt="peliculas-de-star-wars"
                    width={450}
                    height={50}
                    className="rounded-lg"
                />
            </div>
        <ListaPeliculas />

      </div>
    );
  }
  