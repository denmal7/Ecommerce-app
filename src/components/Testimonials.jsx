import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      review:
        "Super smooth shopping experience! My order arrived on time and the quality is amazing.",
    },
    {
      name: "Michael Smith",
      review:
        "I love how easy it is to add items to the cart and checkout in just a few clicks!",
    },
  ];
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          What Our Customers Say
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic">"{t.review}"</p>
              <h4 className="mt-4 font-semibold text-gray-900">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
