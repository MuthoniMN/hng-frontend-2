import PageHeader from "../components/PageHeader";
import CartItems from "../components/CartItems";

const Cart = () => {
  return (
    <main>
     <PageHeader check={true} title="Shopping Cart" />
      <CartItems />
    </main>
  )
}