import ListaPersonajes from "@/components/cards/ListadePersonajes";

export default function Personajes() {
  return (
    <div className="bg-black">
      <h1 className="text-blue-800 ml-8 p-10 text-3xl text-center">
        Personajes
        </h1>

        <ListaPersonajes />
    </div>
  );
}
