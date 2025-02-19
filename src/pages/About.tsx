import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <h1 className="text-4xl font-bold mb-8">About Sweet Wedding</h1>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="prose lg:prose-xl mb-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            Founded in 2016, Sweet Wedding has been at the forefront of making
            wedding dreams come true for over 8 years. What started as a small
            boutique offering wedding accessories has grown into Egypt's premier
            destination for all things wedding-related.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <p className="text-lg text-gray-700 mb-6">
            Over the past 8 years, we've had the privilege of being part of
            thousands of wedding celebrations. From humble beginnings in
            Banisuif, we've expanded our offerings to include a wide range of
            wedding accessories, sweets, and traditional wedding attire.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
          <ul className="list-disc pl-6 mb-6 text-lg text-gray-700">
            <li>Served over 10,000+ happy couples</li>
            <li>Expanded to multiple locations across Egypt</li>
            <li>Award-winning wedding accessories collection</li>
            <li>Partnerships with top wedding venues and planners</li>
            <li>Featured in leading wedding magazines and blogs</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            We strive to make every wedding special by providing high-quality
            accessories, delectable sweets, and exceptional service. Our
            commitment to excellence and attention to detail has made us the
            trusted choice for couples planning their big day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">8+</p>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">10,000+</p>
              <p className="text-gray-600">Happy Couples</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">1,000+</p>
              <p className="text-gray-600">Products</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
