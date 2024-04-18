import CardsHome from "@/components/CardsHome";

export default function Home() {
  return (
    <div className="bg-black pl-16 fondo">

      <div class="grid grid-cols-4 gap-4">
        <CardsHome imagen="Personajes.png" quien="personajes favoritos" linkTo="/personajes"/>
        <CardsHome imagen="Planetas.png" quien="planetas favoritos" linkTo="/planetas"/>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <CardsHome imagen="Peliculas.png" quien="películas favoritas" linkTo="/peliculas"/>
        <CardsHome imagen="Naves.png" quien="naves espaciales favoritas" linkTo="/naves"/>
      </div>

    </div>
  );
}
