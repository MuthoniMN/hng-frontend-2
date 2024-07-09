import Image from "next/image"
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa"

const ProductCard = ( { product } ) => {
    return (
        <div className="bg-white py-2 px-4 w-[45%] md:w-1/4 space-y-2">
            <div className="w-full h-[200px] p-0 m-0">
                <Image src={product.picture} alt={product.title} width={150} height={150} className="w-full h-full" />
            </div>
            <h3>{product.title}</h3>
            <p className="text-2xl">{product.price}</p>
            <div className=" flex justify-between">
                <p className="bg-gray-100 px-2 rounded">{product.discount} off</p>
                <p className="flex gap-6">
                    <FaRegHeart />
                    <FiShoppingCart />
                </p>
            </div>
        </div>
    )
}

export default ProductCard;