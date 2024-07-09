import { FaCaretDown } from "react-icons/fa6";
const CategoriesDropdown = () => {
    return (
        <div className="hidden md:flex gap-4">
            <h3 className="text-xl">Categories</h3>
            <FaCaretDown className="text-xl" />
        </div>
    )
}

export default CategoriesDropdown;