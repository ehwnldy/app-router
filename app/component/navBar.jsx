import Link from "next/link";

export default function NavBar(){
    return(
        <nav>
            <Link href='/'>HOME </Link>
            <Link href='/page'>PAGE </Link>
            <Link href='/foo'>FOO </Link>
        </nav>
    )
}