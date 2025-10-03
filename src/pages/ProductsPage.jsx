import { PRODUCTS } from "../data/products";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductsPage = () => {
    const { addToCart } = useCart();
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                    Browse Our Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS.map((product) => (
                        <div
                          key={product.id}
                          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg flex flex-col hover:scale-105 transform transition duration-300"
                        >
                            {/* Product Image */}
                            <img 
                               src={product.image}
                               alt={product.name}
                               className="h-56 md:48 w-full object-contain"
                            />

                            {/* Product Info */}
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {product.name}
                                </h3>
                                <p className="mt-3 text-xl font-bold text-green-600">${product.price}</p>

                                {/* Add to Cart */}
                                <button
                                  className="mt-4 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                                  onClick={() => addToCart(product)}
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductsPage;