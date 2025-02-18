import { useForm } from "react-hook-form";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: "cash" | "credit";
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutForm>();
  const paymentMethod = watch("paymentMethod");

  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const onSubmit = async (data: CheckoutForm) => {
    // Calculate total
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    // Create order message
    const message =
      `🛍️ New Order Details:\n\n` +
      `👤 Customer Information:\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `Address: ${data.address}\n\n` +
      `🛒 Order Items:\n` +
      cartItems
        .map(
          (item) =>
            `- ${item.name} (x${item.quantity}) - EGP ${(item.price * item.quantity).toFixed(2)}`,
        )
        .join("\n") +
      `\n\n💰 Total Amount: EGP ${total.toFixed(2)}\n` +
      `💳 Payment Method: ${data.paymentMethod}`;

    // Send to WhatsApp
    window.open(
      `https://wa.me/201158932877?text=${encodeURIComponent(message)}`,
    );

    // Send email using mailto
    const emailSubject = "New Order from Wedding Shop";
    window.open(
      `mailto:matef4202@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(message)}`,
    );

    // Clear cart and navigate home
    clearCart();
    navigate("/");
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: /^\S+@\S+$/i,
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              {...register("phone", { required: "Phone is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              {...register("address", { required: "Address is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              {...register("paymentMethod", {
                required: "Payment method is required",
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="cash">Cash on Delivery</option>
              <option value="credit">Credit Card</option>
            </select>
          </div>

          {paymentMethod === "credit" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  {...register("cardNumber", {
                    required: "Card number is required",
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>
                  <input
                    {...register("expiryDate", {
                      required: "Expiry date is required",
                    })}
                    placeholder="MM/YY"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    {...register("cvv", { required: "CVV is required" })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
