"use client"
  
import {useRouter} from "next/navigation"

const CartSummary = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-4 py-4 px-4 md:px-6 w-full md:w-3/4 lg:w-3/5 rounded bg-white">
    <div className="flex justify-between">
    <h4 className="text-xl">Summary</h4>
      <p>2 × 1</p>
    </div>
      <div className="flex justify-between">
    <p className="text-xl">Subtotal</p>
        <p>$2000</p>
      </div>
            <div className="flex justify-between">
    <p className="text-xl">Shipping Fee</p>
        <p>$450</p>
      </div>
            <div className="flex justify-between">
    <p className="text-xl">Saved</p>
        <p>$50</p>
      </div>
            <div className="flex justify-between">
    <p className="text-xl">Total</p>
        <p>$2450</p>
      </div>
      <button className="bg-emerald-500 text-white px-2 py-2 rounded-md" onClick={() => router.push('/checkout')}>Checkout</button>
    </div>)
}

export default CartSummary;