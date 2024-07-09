import PageHeader from "../components/PageHeader";
import CartItems from "../components/CartItems";
import Terms from "../components/Terms";
import PaymentOptions from "../components/PaymentOptions";
import CartSummary from "../components/CartSummary";

const Cart = () => {
  return (
    <main>
     <PageHeader check={true} title="Shopping Cart" />
      <CartItems />
      <section className="flex flex-col md:flex-row justify-between">
        <CartSummary />
      <PaymentOptions />
      </section>
      <Terms />
    </main>
  )
}

export default Cart