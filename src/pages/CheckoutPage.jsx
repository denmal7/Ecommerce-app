import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";


const CheckoutPage = () => {
    const { cartItems, total, removeFromCart, updateQuantity, clearCart } = useCart();

    return (
        <section className="py-16 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                    Checkout
                </h2>

                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-600 text-lg">Your cart is empty</p>
                ) : (
                    <div>
                        {/* --- Cart Items --- */}
                        <div className="md:col-span-2 space-y-6">
                            {cartItems.map((item) => (
                                <div
                                   key={item.id}
                                   className="flex items-center bg-white p-4 rounded-xl shadow-md"
                                >
                                    <img 
                                       src={item.image}
                                       alt={item.name}
                                       className="w-20 h-20 rounded-lg object-cover"
                                    />
                                    <div className="ml-4 flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>

                                        <div className="flex items-center mt-2">
                                            <label className="mr-2 text-sm text-gray-600">
                                                Qty:
                                            </label>
                                            <input 
                                               type="number"
                                               min="1"
                                               value={item.quantity}
                                               onChange={(e) => 
                                                  updateQuantity(item.id, Number(e.target.value))
                                               }
                                               className="w-16 border rounded px-2 py-1 text-center"
                                            />
                                        </div>
                                    </div>

                                    <button
                                       onClick={() => removeFromCart(item.id)}
                                       className="ml-4 text-red-600 hover:text-red-800 transition"
                                    >
                                        <Trash2 className="w-5 h-5"/>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* --- Summary */}
                        <div className="bg-white p-6 rounded-xl shadow-md h-fit">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Order Summary
                            </h3>
                            <div className="flex justify-between text-gray-700 mb-2">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-700 mb-2">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <hr className="my-3" />
                            <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <Link 
                              to="/success"
                              className="block text-center w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition mb-3"
                            >
                                Proceed to Payment
                            </Link>

                            <button
                              onClick={clearCart}
                              className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition mt-3"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default CheckoutPage;