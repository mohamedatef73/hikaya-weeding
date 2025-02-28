import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{name}</h5>
        <p className="text-gray-700 mb-2">EGP {price.toFixed(2)}</p>
        <p className="text-sm text-gray-600 mb-4">{stock} in stock</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
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
