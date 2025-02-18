import ProductCard from "../components/ProductCard";

const Home = () => {
  const categories = [
    { id: "wedding", name: "Wedding Accessories" },
    { id: "sweets", name: "Pie & Sweets" },
  ];

  const products = [
    {
      id: "1",
      name: "Wedding Tiara",
      price: 299.99,
      stock: 10,
      image:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=500",
      category: "wedding",
    },
    {
      id: "2",
      name: "Chocolate Cake",
      price: 199.99,
      stock: 5,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
      category: "sweets",
    },
    // Add more products...
  ];

  const handleAddToCart = (productId: string) => {
    // Implement add to cart logic
    console.log("Added to cart:", productId);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((product) => product.category === category.id)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onAddToCart={() => handleAddToCart(product.id)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
