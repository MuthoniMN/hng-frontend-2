import Image from "next/image"

const HeroHome = () => {
    return (
        <section className="flex justify-between py-4 px-8 items-center h-[60vh]">
            <h1 className="font-bold text-3xl min-w-[300px] w-2/5">Elevate Your Living Spaces with Our Exclusive Furniture Collections</h1>
            <Image src={"/imgs/hero-image.png"} alt="" width={250} height={250} />
        </section>
    )
}

export default HeroHome