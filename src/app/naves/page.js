import ListaNaves from "@/components/naves/ListaNaves";
import Image from "next/image";

export default function Naves() {
    return (
      <div className="bg-black">
        <div className="flex justify-center items-center p-6">
                <Image
                    src="/Naves.png"
                    alt="navess-de-star-wars"
                    width={450}
                    height={50}
                    className="rounded-lg"
                />
            </div>

        <ListaNaves />
      </div>
    );
  }
  