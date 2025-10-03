import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const Hero = () => {

  return (
    <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
                <Reveal>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Shop Smarter, <span className="text-green-600">Live Better</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                    Discover handpicked products at unbeatable prices. Add items to your cart and enjoy a seamless shopping experience.
                    </p>
                </Reveal>
                <Reveal delay={0.4}>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                       <Link
                          to="/products"
                          className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
                        >
                           <ShoppingBag className="w-5 h-5 mr-2"/>
                           Start Shopping
                        </Link>
                        <Link
                           to="/checkout"
                           className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition"
                        >
                            View Cart
                        </Link>
                    </div>
                </Reveal>
            </div>

            {/* Right Illustration */}
            <div className="flex-1 mt-12 md:mt-0 md:ml-10">
                <img 
                   src="/hero-shopping.svg"
                   alt="Shopping illustration"
                   className="w-full max-w-md mx-auto"
                />
            </div>
        </div>
    </section>
  )
}

export default Hero;