import type {FC} from "react";
import Nav from "./Nav";
import Link from "next/link";
import {FacebookIcon,TwitterIcon,InstagramIcon,GithubIcon, LinkedinIcon} from "./Icons";

const Header:FC = ()=>{
    return(
        <div className = "bg-brown-dark w-full h-screen relative">
            {/* signature */}
            <h1 className="text-brown-lighter font-cursive absolute text-8xl font-bold top-2/4 left-2/4 -translate-x-2/4 z-0 -rotate-12 tracking-wider">Ashish Prajapati</h1>
            {/* Nav bar */}
            <Nav/>
            <div className = "px-60 z-10"> <div>
                    <div className = "absolute top-2/4 -translate-y-2/4">
                        {/* social links */}
                        <div className = "flex space-x-4 items-center mb-6"> <Link href = "#">
                                <a className = "border-red-dark border-2 rounded-full p-1">
                                    <FacebookIcon width = {25} height = {25}/>
                                </a>
                            </Link>
                            <Link href = "#">
                                <a className = "border-red-dark border-2 rounded-full p-1">
                                    <TwitterIcon width = {25} height = {25}/>
                                </a>
                            </Link>
                            <Link href = "#">
                                <a className = "border-red-dark border-2 rounded-full p-1">
                                    <InstagramIcon width = {25} height = {25}/>
                                </a>
                            </Link>
                            <Link href = "#">
                                <a className = "border-red-dark border-2 rounded-full p-1">
                                    <GithubIcon width = {25} height = {25}/>
                                </a>
                            </Link>
                            <Link href = "#">
                                <a className = "border-red-dark border-2 rounded-full p-1">
                                    <LinkedinIcon width = {25} height = {25}/>
                                </a>
                            </Link>

                        </div>
                        <h1 className = "text-6xl font-bold text-white">I'm <span className = "text-red-dark">Ashish</span> Prajapati</h1>
                        <p className = "mt-4 text-xl text-white">I'm Ashish Prajapati, Professional web developer with <br/>long time experience in this field</p>

                        {/* button */}
                        <div>
                            <button className = "border-2 border-red-dark px-6 py-2 text-white font-oswald rounded-full mt-4">My Portfolio</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;