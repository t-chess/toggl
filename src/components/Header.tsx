import Link from "next/link";

export default function Header(){
    return(
        <header className="navbar bg-base-100">
            <Link href='/' className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link href='/projects' className="btn btn-ghost normal-case text-xl ml-auto">Projects</Link>
            <Link href='/time' className="btn btn-ghost normal-case text-xl">Time</Link>
            <Link href='/reports' className="btn btn-ghost normal-case text-xl">Reports</Link>
        </header>
    )
}