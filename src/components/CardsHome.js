import Image from "next/image";
import Link from 'next/link';

export default function CardsHome({ imagen, quien, linkTo }) {
    return (
        <div className="container m-auto pt-8 pb-8">
            <Link href={linkTo} 
            class="block max-w-sm p-6 bg-white border border-gray-200 
            rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bg-opacity-50">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Image
                        src={"/" + imagen}
                        alt="Star Wars"
                        width={450}
                        height={50}
                        className="rounded-lg bg-opacity-25"
                    />
                </h5>
                <p class="font-normal text-black dark:text-gray-400 text-center">
                    Toda la información detallada que querías conocer acerca de tus {quien}.
                </p>
            </Link>
        </div>
    )

}

