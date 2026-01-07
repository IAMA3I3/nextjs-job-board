import Link from "next/link"

export const Navbar = () => {

    return (
        <nav className=" w-full py-4">
            <div className=" container m-auto px-6">
                <Link href={'/'} className=" text-3xl font-thin">Next.js Job Board</Link>
            </div>
        </nav>
    )
}