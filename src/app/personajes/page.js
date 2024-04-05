import ListaPersonajes from "@/components/personajes/ListadePersonajes";

export default function Personajes() {
  return (
    <div className="bg-black">
      <h1 className="text-blue-800 ml-8 pt-8 text-3xl text-center mb-8">
        Personajes  
      </h1>
      <ListaPersonajes />
    </div>
  );
}
