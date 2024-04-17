import ListaPlanetas from "@/components/planetas/ListadePlanetas";
import Image from "next/image";

export default function Planetas() {
    return (
        <div className="bg-black">
            <div className="flex justify-center items-center p-6">
                <Image
                    src="/Planetas.png"
                    alt="planetas-de-star-wars"
                    width={450}
                    height={50}
                    className="rounded-lg"
                />
            </div>
            <ListaPlanetas />
        </div>
    );
}
