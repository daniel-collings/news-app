import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white mt-24">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6">

                    <a href="/#" className="col-start-2 text-gray-400 hover:text-gray-500">
                        🧞‍♂️
                    </a>

                </div>
                <div className="grid grid-flow-row justify-items-center md:justify-items-end">
                    <Link href='/'>Page 1</Link>
                    <Link href='/page2'>Page 2</Link>
                    <p className="text-center text-xs leading-5 text-gray-500">&copy; 2023 Daniel Collings. All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}