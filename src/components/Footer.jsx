import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6 grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div>
                <h3 className="text-2xl font-bold text-white">MiniShop</h3>
                <p className="mt-3 text-gray-400">
                    Shop smarter, live better. Discover amazing deals and quality products.
                </p>
            </div>

            {/* Links */}
            <div>
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                <ul className="mt-4 space-y-2">
                    <li><Link to="/" className="hover:text-green-500">Home</Link></li>
                    <li><Link to="/products" className="hover:text-green-500">Products</Link></li>
                    <li><Link to="/checkout" className="hover:text-green-500">Checkout</Link></li>
                    <li><Link to="/orders" className="hover:text-green-500">My Orders</Link></li>
                </ul>
            </div>

            {/* Support */}
            <div>
                <h4 className="text-lg font-semibold text-white">Support</h4>
                <ul className="mt-4 space-y-2">
                    <li><a href="#" className="hover:text-green-500">Help Center</a></li>
                    <li><a href="#" className="hover:text-green-500">Shipping Info</a></li>
                    <li><a href="#" className="hover:text-green-500">Returns & Refunds</a></li>
                </ul>
            </div>

            {/* Socials */}
            <div>
                <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                <div className="mt-4 flex space-x-4">
                    <a href="#" aria-label="Facebook">
                        <Facebook className="w-6 h-6 hover:text-green-500"/>
                    </a>
                    <a href="#" aria-label="Twitter">
                        <Twitter className="w-6 h-6 hover:text-green-500"/>
                    </a>
                    <a href="#" aria-label="Instagram">
                        <Instagram className="w-6 h-6 hover:text-green-500"/>
                    </a>
                </div>
            </div>
        </div>
        
        {/* Bottom Note */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} MiniShop. All rights reserved.
        </div>
    </footer>
  );
}

export default Footer