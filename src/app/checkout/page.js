import PageHeader from "../../components/PageHeader";
import CheckoutItems from "../../components/CheckoutItems";
import Terms from "../../components/Terms";
import PaymentOptions from "../../components/PaymentOptions";
import CheckoutForm from "../../components/CheckoutForm";
const Checkout = () => {
  return (
    <main>
     <PageHeader check={false} title="Checkout Items" />
      <CheckoutItems />
      <section className="flex flex-col md:flex-row justify-between py-6">
        <CheckoutForm />
      <PaymentOptions />
      </section>
      <Terms />
    </main>
  )
}

export default Checkout