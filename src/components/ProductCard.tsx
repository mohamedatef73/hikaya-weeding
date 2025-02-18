import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  onAddToCart: () => void;
}

const ProductCard = ({
  id,
  name,
  price,
  stock,
  image,
  onAddToCart,
}: ProductCardProps) => {
  const { addToCart } = useCart();
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{name}</h5>
        <p className="text-gray-700 mb-2">EGP {price.toFixed(2)}</p>
        <p className="text-sm text-gray-600 mb-4">{stock} in stock</p>
        <button
          onClick={() => {
            addToCart({ id, name, price, image });
          }}
          disabled={stock === 0}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
