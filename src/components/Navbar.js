"use client"
import Image from "next/image";
import SearchBar from "./SearchBar";
import CategoriesDropdown from "./CategoriesDropdown";
import { FaRegHeart} from "react-icons/fa"
import { FaCartShopping, FaBars } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const NavBar = () => {
    const router = useRouter();
    return (
        <nav className="flex justify-around items-center box-shadow-bottom-md">
            <Image src={'/imgs/logo.png'} alt="Furhome E-commerce Store" width={150} height={75} />
            <SearchBar />
            <CategoriesDropdown />
            <p className="hidden md:flex gap-6 text-xl">
                <FaRegHeart />
                <FaCartShopping onClick={() => router.push('/cart')} />
            </p>
            <div className="w-[56px] h-[56px]">
                        <Image src={'/imgs/user-profile.png'} alt="Furhome E-commerce Store" width={56} height={56} className="w-[100%] rounded-full" />
                        </div>
            <FaBars className="text-3xl block md:hidden"  />
        </nav>
    )
}

export default NavBar;