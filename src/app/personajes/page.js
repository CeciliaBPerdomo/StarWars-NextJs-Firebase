import ListaPersonajes from "@/components/cards/ListadePersonajes";

export default function Personajes() {
  return (
    <div className="bg-black">
      <h1 className="text-white ml-8 p-10 text-3xl">
        Personajes
        </h1>

        <ListaPersonajes />
    </div>
  );
}
