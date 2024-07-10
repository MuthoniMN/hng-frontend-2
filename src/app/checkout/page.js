import PageHeader from "../../components/PageHeader";
import CheckoutItems from "../../components/CheckoutItems";
import Terms from "../../components/Terms";
import PaymentOptions from "../../components/PaymentOptions";
import CheckoutForm from "../../components/CheckoutForm";
const Checkout = () => {
  return (
    <main className="space-y-6">
     <PageHeader check={false} title="Checkout Items" />
      <CheckoutItems />
      <section className="flex flex-col md:flex-row justify-between gap-6">
        <section className="space-y-4 bg-gray-100 py-4">
        <h2 className="text-2xl">Enter Card Information</h2>
          <CheckoutForm />
        </section>
      <PaymentOptions />
      </section>
      <Terms />
    </main>
  )
}

export default Checkout