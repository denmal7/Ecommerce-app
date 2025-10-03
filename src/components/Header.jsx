import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/products", label: "Products" },
        { path: "/checkout", label: "Checkout" },
        { path: "/orders", label: "My Orders"},
    ];

    const { cartItems } = useCart();

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <nav className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-green-600">
                  MiniShop
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink 
                              to={link.path}
                              className={({ isActive}) => 
                                 isActive ? "text-green-600" : "hover:text-green-600"
                            }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    {/* Cart Icon */}
                    <Link to="/checkout" className="relative">
                       <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-600" />
                       {cartItems.length > 0 && (
                          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {cartItems.length}
                          </span>
                       )}
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                      className="md:hidden"
                      onClick={() => setMobileOpen(!mobileOpen)}
                      aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="w-6 h-6 text-gray-700"/>
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700"/>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="md:hidden bg-white shadow-lg px-6 py-4">
                    <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                  to={link.path}
                                  onClick={() => setMobileOpen(false)}
                                  className={({ isActive}) => 
                                    isActive ? "text-green-600" : "hover:text-green-600" 
                                  }
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
};

export default Header;
