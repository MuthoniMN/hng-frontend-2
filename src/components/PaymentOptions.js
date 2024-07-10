import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa6";

const PaymentOptions = () => {
  return (
    <div className="flex flex-col gap-4 bg-white w-full md:1/4 lg:2/5 px-4 py-2 rounded">
      <h1 className="text-2xl">Pay With</h1>
      <div className="flex md:flex-col lg:flex-row gap-4 justify-center">
        <FaCcVisa className="text-3xl" />
        <FaCcMastercard className="text-3xl" />
        <FaPaypal className="text-3xl" />
      </div>
    </div>
  )
}

export default PaymentOptions