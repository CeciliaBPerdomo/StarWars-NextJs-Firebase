import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="grid justify-items-end">
        <Image
          src={"/images/fondo3.jpg"}
          alt="Star Wars"
          width={900}
          height={200}
        />
      </div>
    </div>
  );
}
