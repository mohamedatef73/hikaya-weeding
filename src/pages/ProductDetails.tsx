import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: "1",
    name: "Crystal Wedding Tiara",
    price: 299.99,
    stock: 10,
    description:
      "Elegant crystal-encrusted tiara featuring delicate floral patterns. Perfect for adding a royal touch to your wedding day look. Made with premium quality crystals and silver-plated metal.",
    details: [
      "Premium quality Austrian crystals",
      "Silver-plated metal base",
      "Adjustable fit with hidden combs",
      "Handcrafted with attention to detail",
      "Comes in a luxury gift box",
      "Professional cleaning recommended",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=500",
        alt: "Front view",
      },
      {
        url: "https://images.unsplash.com/photo-1546168006-f0b891ede460?w=500",
        alt: "Side view",
      },
      {
        url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
        alt: "Back view",
      },
      {
        url: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
        alt: "Detail view",
      },
    ],
  },
  // Add more products here with their details and multiple images
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id) || products[0]; // Fallback to first product if not found

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {image.alt}
                </div>
              </div>
            ))}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold text-gray-900">
              EGP {product.price.toFixed(2)}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-gray-600 font-semibold">
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
