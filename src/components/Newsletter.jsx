import { Mail } from "lucide-react";

const Newsletter = () => {
    return (
        <section className="bg-green-600 py-16">
            <div className="container mx-auto px-6 text-center text-white">
                <h2 className="text-3xl font-bold">Stay Updated</h2>
                <p>Subscribe to get the latest offers and updates. </p>
                <form className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-3 rounded-xl text-gray-900 w-full sm:w-96"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
                    >
                        <Mail className="w-5 h-5 mr-2"/>
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    )
};

export default Newsletter;