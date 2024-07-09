import Image from "next/image"

const HeroHome = () => {
    return (
        <section className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4 py-4 px-8 items-center h-[100vh] md:h-[60vh]">
            <h1 className="font-bold text-3xl min-w-[300px] w-2/5">Elevate Your Living Spaces with Our Exclusive Furniture Collections</h1>
            <div className="relative w-full h-full">            <Image src={"/imgs/hero-image.png"} alt="" width={250} height={250} className="mx-auto" />
                <h2 className="bg-emerald-500 text-white width-[200px] px-4 py-2 absolute top-1/4 left-1/5 font-bold rounded-md">Shop Executively</h2>
            </div>
        </section>
    )
}

export default HeroHome