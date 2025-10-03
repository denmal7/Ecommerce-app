import { Zap, ShieldCheck, Truck } from "lucide-react";


const Features = () => {
   const features = [
    {
        icon: <Zap className="w-8 h-8 text-green-600" />,
        title: "Fast Checkout",
        desc: "Quick and secure checkout experience with multiple payment options."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
        title: "Trusted Quality",
        desc: "All our products are verified and come with a satisfaction guarantee."
    },
    {
        icon: <Truck className="w-8 h-8 text-green-600" />,
        title: "Fast Delivery",
        desc: "Get your products delivered to your doorsteps in no time."
    }
   ];

  return (
    <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="mt-4 text-gray-600">Shopping made easy with our top features</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
                {features.map((f, idx) => (
                    <div key={idx} className="p-6 rounded-xl shadow hover:shadow-lg transition">
                        <div className="flex justify-center">{f.icon}</div>
                        <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                        <p className="mt-2 text-gray-600">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features