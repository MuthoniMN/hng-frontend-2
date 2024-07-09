import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa6";

const PaymentOptions = () => {
  return (
    <div className="flex flex-col gap-4 bg-white px-4 py-2">
      <h1 className="text-2xl">Pay With</h1>
      <div className="flex md:flex-col lg:flex-row justify-center">
        <FaCcVisa className="text-emerald-500 text-xl" />
        <FaCcMastercard className="text-emerald-500 text-xl" />
        <FaPaypal className="text-emerald-500 text-xl" />
      </div>
    </div>
  )
}

export default PaymentOptions