import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center p24">
            <span className="text-5xl">Hola mundo</span>

            <Link href={'/about'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">About page</Link>
        </main>
    );
}

