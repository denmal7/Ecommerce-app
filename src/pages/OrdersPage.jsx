import { useCart } from "../context/CartContext";

const OrdersPage = () => {
    const { orders } = useCart();

    return (
        <section className="py-16 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                    My Orders
                </h2>

                {orders.length === 0 ? (
                    <p className="text-center text-gray-600 text-lg">No orders yet.</p>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div
                              key={order.id}
                              className="bg-white p-6 rounded-xl shadow-md"
                            >
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                    Orders #{order.id}
                                </h3>
                                <div className="space-y-3">
                                    {order.items.map((item) => (
                                        <div
                                          key={item.id}
                                          className="flex items-center justify-between"
                                        >
                                            <span>{item.name} x {item.quantity}</span>
                                            <span className="font-medium">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default OrdersPage;