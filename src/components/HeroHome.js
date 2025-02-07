import Image from "next/image"

const HeroHome = () => {
    return (
        <section className="flex flex-wrap md:flex-nowrap justify-center gap-6 py-8 px-4 md:px-4 md:py-4 items-center h-[100vh] md:h-[60vh]">
            <h1 className="font-bold text-3xl lg:text-5xl min-w-[300px] w-1/2">Elevate Your Living Spaces with Our Exclusive Furniture Collections</h1>
            <div className="relative w-full md:w-[350px] h-full">            <Image src={"/imgs/hero-image.png"} alt="" width={250} height={250} />
                <h2 className="bg-emerald-500 text-white width-[200px] px-4 py-2 absolute top-1/4 left-1/5 font-bold rounded-md box-shadow-md">Shop Executively</h2>
            </div>
        </section>
    )
}

export default HeroHome