import products from "@/data/products"
import ProductCard from "./ProductCard"

const ProductSection = () => {
    return (
        <section className="flex flex-wrap justify-around gap-6 p-4 lg:p-12">
            {
                products.map(prod => (
                    <ProductCard product={prod} key={prod.title} />
                ))
            }
        </section>
    )
}

export default ProductSection;