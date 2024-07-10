import { cartItems } from "../data/products";
import ItemBlock from "./ItemBlock";

const CheckoutItems = () => {
  return (
    <div className="bg-gray-100 px-2 md:px-4 lg:px-8 py-6 flex flex-col gap-4">
      {cartItems.map((item, index) => (
        <ItemBlock key={index} item={item} cart={false} />
      ))}
    </div>
  )
}

export default CheckoutItems;