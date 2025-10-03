import organizerImg from "../images/organizer.jpg";
import toteImg from "../images/tote.jpg";
import earbudsImg from "../images/earbuds.webp";

const ProductHighlights = () => {
    const products = [
       {id: 1, name: "Desk Organizer", price: "$15.99", image: organizerImg },
       {id: 2, name: "Reusable Tote Bag", price: "$8.99", image: toteImg },
       {id: 3, name: "Wireless Earbuds", price: "$79.99", image: earbudsImg },
    ]
  return (
    <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="mt-4 text-gray-600">Handpicked bestsellers just for you.</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
                {products.map((p) => (
                    <div key={p.id} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:-translate-y-2">
                        <img src={p.image} alt={p.name} className="w-full max-h-60 object-contain mx-auto transform transition duration-300 hover:scale-105"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{p.name}</h3>
                            <p className="text-green-600 font-bold">{p.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProductHighlights