import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: "wedding-accessories",
      name: "Wedding Accessories",
      image:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=500",
      description: "Find the perfect accessories for your special day",
    },
    {
      id: "sweets",
      name: "Sweets & Desserts",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
      description: "Delicious treats for your celebration",
    },
    {
      id: "clothing",
      name: "Wedding Attire",
      image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=500",
      description: "Beautiful dresses and formal wear",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Categories
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/category/${category.id}`} className="block group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-64">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-2xl font-bold text-white text-center">
                        {category.name}
                      </h2>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
