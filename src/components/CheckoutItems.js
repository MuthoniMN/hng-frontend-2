import { cartItems } from "../data/products";
import ItemBlock from "./ItemBlock";

const CheckoutItems = () => {
  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((item, index) => (
        <ItemBlock key={index} item={item} cart={false} />
      ))}
    </div>
  )
}

export default CheckoutItems;