/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const SavingCard = ({ card }) => {
  const { bankName, description, imageUrl, rating } = card || {};

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="bg-white font-[sans-serif] my-4">
            <div className="max-w-7xl mx-auto">
              <div className="">
                <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                  <img
                    src={imageUrl}
                    alt="Blog Post 1"
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm block text-gray-400 mb-2">
                      10 FEB 2023 | BY JOHN DOE
                    </span>
                    <h3 className="text-xl font-bold text-[#333]">
                      {bankName}
                    </h3>
                    <hr className="my-6" />
                    <p className="text-gray-400 text-sm">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SavingCard;
