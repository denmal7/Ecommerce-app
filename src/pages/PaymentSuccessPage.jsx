import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const PaymentSuccessPage = () => {
   const { saveOrder } = useCart();

   useEffect(() => {
      saveOrder();  // save order + clear cart
   }, []);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6"/>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Payment Successfull
            </h1>
            <p className="text-gray-600 mb-6">
                Thank you for your order! We're already preparing your items for delivery.
            </p>

            <Link 
              to="/products"
              className="block bg-green-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition mb-2"
            >
               Continue Shopping
            </Link>
            <Link
               to="/orders"
               className="block bg-gray-200 text-gray-800 text-center px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
            >
               View Orders
            </Link>
        </div>
    </section>
  )
}

export default PaymentSuccessPage