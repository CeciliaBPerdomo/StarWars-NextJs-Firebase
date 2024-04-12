import ListaPeliculas from "@/components/peliculas/ListaPeliculas";

export default function Peliculas() {
    return (
      <div className="bg-black">
        <h1 className="text-blue-800 ml-8 pt-8 text-3xl text-center mb-8">
          Peliculas 
        </h1>
        <ListaPeliculas />

      </div>
    );
  }
  