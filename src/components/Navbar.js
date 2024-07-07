"use client"
import Image from "next/image";
import SearchBar from "./SearchBar";
import CategoriesDropdown from "./CategoriesDropdown";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart} from "react-icons/fa"

const NavBar = () => {
    return (
        <nav className="flex justify-around items-center">
            <Image src={'/imgs/logo.png'} alt="Furhome E-commerce Store" width={150} height={75} />
            <SearchBar />
            <CategoriesDropdown />
            <p className="flex gap-6 text-xl">
                <FaRegHeart />
                <FiShoppingCart />
            </p>
            <Image src={'/imgs/user-profile.png'} alt="Furhome E-commerce Store" width={56} height={56} className="w-[56px] h-[56px] rounded-full" />
        </nav>
    )
}

export default NavBar;