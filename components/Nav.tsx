import type {FC} from "react";
import Link from "next/link";

const Nav:FC = ()=>{
    return(
        <div className = "bg-brown-light flex items-center justify-between w-full h-16 px-60 font-oswald">
            {/* Logo */}
            <div>
                <h1 className = "text-white text-3xl font-bold">Folio</h1>
            </div>
            {/* Navigation links */}
            <div className = "flex items-center space-x-20 text-sm">
                <Link href = "#">
                    <a className = "text-white">Home</a>
                </Link>
                <Link href = "#">
                    <a className = "text-white">About</a>
                </Link>
                <Link href = "#">
                    <a className = "text-white">Portfolio</a>
                </Link>
                <Link href = "#">
                    <a className = "text-white">Blog</a>
                </Link>
                <Link href = "#">
                    <a className = "text-white">Contact</a>
                </Link>
            </div>
            {/* lets chats */}
            <button className = "text-white border-2 border-red-dark px-4 py-2">Lets chats</button>
        </div>
    )
}


export default Nav;