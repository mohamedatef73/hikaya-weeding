import ProductCard from "../components/ProductCard";
import GeminiChat from "../components/GeminiChat";

const Home = () => {
  const categories = [
    { id: "wedding", name: "Wedding Accessories" },
    { id: "sweets", name: "Pie & Sweets" },
  ];

  const products = [
    // Wedding Accessories
    {
      id: "1",
      name: "Crystal Wedding Tiara",
      price: 299.99,
      stock: 10,
      description:
        "Elegant crystal-encrusted tiara featuring delicate floral patterns. Perfect for adding a royal touch to your wedding day look. Made with premium quality crystals and silver-plated metal.",
      image:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=500",
      category: "wedding",
    },
    {
      id: "2",
      name: "Pearl Bridal Veil",
      price: 199.99,
      stock: 15,
      image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=500",
      category: "wedding",
    },
    {
      id: "3",
      name: "Wedding Hair Pins Set",
      price: 49.99,
      stock: 30,
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
      category: "wedding",
    },
    {
      id: "4",
      name: "Bridal Jewelry Set",
      price: 399.99,
      stock: 8,
      image:
        "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500",
      category: "wedding",
    },
    {
      id: "5",
      name: "Wedding Gloves",
      price: 79.99,
      stock: 20,
      image:
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500",
      category: "wedding",
    },
    {
      id: "6",
      name: "Bridal Belt Sash",
      price: 129.99,
      stock: 12,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
      category: "wedding",
    },
    {
      id: "7",
      name: "Wedding Garter Set",
      price: 39.99,
      stock: 25,
      image:
        "https://images.unsplash.com/photo-1587038788994-3e9c997f4ddc?w=500",
      category: "wedding",
    },
    {
      id: "8",
      name: "Bridal Hair Comb",
      price: 89.99,
      stock: 18,
      image:
        "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=500",
      category: "wedding",
    },
    {
      id: "9",
      name: "Wedding Bouquet Holder",
      price: 59.99,
      stock: 15,
      image: "https://images.unsplash.com/photo-1546168006-f0b891ede460?w=500",
      category: "wedding",
    },
    {
      id: "10",
      name: "Bridal Clutch Purse",
      price: 149.99,
      stock: 10,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
      category: "wedding",
    },

    // Pies & Sweets
    {
      id: "11",
      name: "Classic Apple Pie",
      price: 39.99,
      stock: 8,
      image:
        "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=500",
      category: "sweets",
    },
    {
      id: "12",
      name: "Chocolate Wedding Cake",
      price: 299.99,
      stock: 5,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
      category: "sweets",
    },
    {
      id: "13",
      name: "Berry Cheesecake",
      price: 59.99,
      stock: 10,
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500",
      category: "sweets",
    },
    {
      id: "14",
      name: "Macarons Set",
      price: 34.99,
      stock: 20,
      image:
        "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500",
      category: "sweets",
    },
    {
      id: "15",
      name: "Lemon Meringue Pie",
      price: 44.99,
      stock: 7,
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500",
      category: "sweets",
    },
    {
      id: "16",
      name: "Cupcake Tower",
      price: 149.99,
      stock: 4,
      image:
        "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500",
      category: "sweets",
    },
    {
      id: "17",
      name: "Pecan Pie",
      price: 42.99,
      stock: 6,
      image:
        "https://images.unsplash.com/photo-1599686250953-c9aa0d3de9f4?w=500",
      category: "sweets",
    },
    {
      id: "18",
      name: "Wedding Cookies Set",
      price: 89.99,
      stock: 15,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
      category: "sweets",
    },
    {
      id: "19",
      name: "Fruit Tart Collection",
      price: 79.99,
      stock: 8,
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500",
      category: "sweets",
    },
    {
      id: "20",
      name: "Chocolate Truffles Box",
      price: 54.99,
      stock: 12,
      image: "https://images.unsplash.com/photo-1548907040-4d42bfc4c130?w=500",
      category: "sweets",
    },
  ];

  const handleAddToCart = (productId: string) => {
    // Implement add to cart logic
    console.log("Added to cart:", productId);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Chat with Gemini AI</h2>
          <GeminiChat />
        </div>
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
