const CheckoutForm = () => {
  return (
    <form className="flex flex-col gap-4 px-4 py-2 w-full md:w-3/4">
    <div className="flex flex-col gap-2">
    <label htmlFor="cardNumber">Card Number </label>
      <input type="text" id="cardNumber" className="bg-gray-100 w-full rounded-md px-4 py-2" />
      </div>
      <div className="flex gap-4 justify-between">
      <div className="flex flex-col gap-2">
    <label htmlFor="expiry">Expiry Date</label>
      <input type="text" id="expiry" className="bg-gray-100 w-full rounded-md px-4 py-2" />
        </div>
    <div className="flex flex-col gap-2">
    <label htmlFor="cvv">CVV </label>
      <input type="text" id="cvv" className="bg-gray-100 w-full rounded-md px-4 py-2" />
      </div>
    </div>
    <div className="flex flex-col gap-2">
    <label htmlFor="name">Name on Card</label>
      <input type="text" id="name" className="bg-gray-100 w-full rounded-md px-4 py-2" />
      </div>
      <button className="bg-emerald-500 text-white px-2 py-2 rounded-md">Pay Now</button>
    </form>
  )
}
export default CheckoutForm;