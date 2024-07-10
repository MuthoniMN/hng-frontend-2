import Image from "next/image";
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="space-y-8 p-12 h-1/3 text-white">
            <Link href="/">
            <Image src={"/imgs/light-logo.png"} alt="Furhome E-commerce Website" width={150} height={50}  />
            </Link >
            <section className="flex justify-between flex-col md:flex-row gap-6 md:gap-0">
                <div className="w-full md:w-1/4 space-y-2">
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>FAQ</p>
                </div>
                <div className="w-full md:w-1/4 space-y-2">
                    <p>
                        <Link href="/" className="hover:font-bold hover:underline">Home</Link></p>
                    <p>Search products</p>
                    <p>Categories</p>
                    <p>Wish List</p>
                    <p>
                        <Link href="/cart" className="hover:font-bold hover:underline">Cart<</Link></p>
                </div>
                <div className="min-w-1/4 space-y-2">
                    <h3 className="text-xl">Contact Us</h3>
                    <p>support@furhome.com</p>
                    <p>1-800-123-4567</p>
                    <h4 className="text-lg">Customer Support</h4>
                    <p>Have questions or need assistance?<br />Our support team is here to help</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;