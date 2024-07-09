"use client"

import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
    return (
        <form className="hidden md:flex items-center bg-white text-black p-2 m-0">
            <label htmlFor="search">
                <FaMagnifyingGlass />
            </label>
            <input id="search" placeholder="Search Furnituren"/>
        </form>
    )
}

export default SearchBar;