import ListaPersonajes from "@/components/personajes/ListadePersonajes";
import Image from "next/image";

export default function Personajes() {
  return (
    <div className="bg-black m-auto">
      <div className="flex justify-center items-center p-6">
        <Image
          src="/Personajes.png"
          alt="personajes-de-star-wars"
          width={450}
          height={50}
          className="rounded-lg"
        />
      </div>

      <ListaPersonajes />
    </div>
  );
}
