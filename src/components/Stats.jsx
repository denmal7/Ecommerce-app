import { Users, ShoppingCart, DollarSign, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { id: 1, name: "Happy Customers", value: 10000, suffix: "+", icon: Users },
    { id: 2, name: "Products Sold", value: 25000, suffix: "+", icon: ShoppingCart },
    { id: 3, name: "Revenue Generated", value: 1000000, prefix: "$", suffix: "+", icon: DollarSign },
    { id: 4, name: "Average Rating", value: 4.9, suffix: "/5", icon: Star },
];

// Hook to animate counting up
const useCountUp = (target, inView, duration = 2) => {
    const[count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const increment = target / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Number(start.toFixed(0)));
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [inView, target, duration]);

    return count;
}


// A single stat card component
const StatCard = ({ stat, inView}) => {
    const count = useCountUp(stat.value, inView);
    const displayValue = 
      stat.prefix 
        ?`${stat.prefix}${count.toLocaleString()}${stat.suffix || ""}`
        : `${count.toLocaleString()}${stat.suffix || ""}`;

    return (
        <motion.div
          className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          initial={{ opacity: 0, y: 20 }}
          animate={ inView ? {opacity: 1, y: 0}: {}}
          transition={{ duration: 0.6, delay: stat.id * 0.2 }}
        >
            <stat.icon className="h-10 w-10 text-green-600 mb-4"/>
            <dt className="text-lg font-medium text-gray-700">{stat.name}</dt>
            <dd className="text-2xl font-bold text-gray-900">{displayValue}</dd>
        </motion.div>
    );
};

const Stats = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: "-100px" });
  return (
    <section ref={ref} className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Trusted by Thousands of Shoppers
            </h2>

            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
               {stats.map((stat) => (
                  <StatCard key={stat.id} stat={stat} inView={inView} />
               ))}
            </dl>
        </div>
    </section>
  )
}

export default Stats