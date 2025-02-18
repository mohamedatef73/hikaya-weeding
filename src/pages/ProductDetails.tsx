import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface ProductImage {
  url: string;
  alt: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // In a real app, you would fetch this data from an API
  // This is mock data for demonstration
  const product = {
    id: id,
    name: "Crystal Wedding Tiara",
    price: 299.99,
    stock: 10,
    description:
      "Beautiful crystal tiara perfect for your special day. Made with high-quality materials and intricate detailing.",
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
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id!,
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
            <p className="text-gray-600">{product.description}</p>
            <p className="text-sm text-gray-600">{product.stock} in stock</p>

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
