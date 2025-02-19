import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  address: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    // Create contact message
    const message =
      `📧 New Contact Form Submission:\n\n` +
      `👤 Contact Information:\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `Address: ${data.address}\n\n` +
      `📝 Message:\n${data.message}`;

    // Send to WhatsApp
    window.open(
      `https://wa.me/01158932877?text=${encodeURIComponent(message)}`,
    );

    // Send email using mailto
    const emailSubject = "New Contact Form Submission";
    window.open(
      `mailto:matef4202@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(message)}`,
    );
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <div className="mb-8 space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Our Location</h2>
            <p className="text-gray-600">Banisuif, Egypt</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p className="text-gray-600">01158932877</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-600">matef4202@gmail.com</p>
          </div>
        </div>

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
              {...register("email", { required: "Email is required" })}
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
            <input
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
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
