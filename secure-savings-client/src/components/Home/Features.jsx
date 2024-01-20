import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="px-2 mt-32">
      <motion.h1 whileHover={{ scale: 0.6 }} whileTap={{ scale: 0.8 }}>
        <h1 className="text-4xl text-center font-medium">
          Online Banking at your <br /> fingerprints
        </h1>
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-4 mt-16">
        {features.map((feature) => {
          const { id, img, title, lists } = feature;
          return (
            <div
              key={id}
              className="border border-gray-300 p-4 rounded-lg shadow-xl duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt="feature-img"
                className="h-32 w-2/4 mx-auto object-cover rounded-sm"
              />
              <h2 className="text-2xl font-semibold my-3">{title}</h2>
              <ul className="list-disc list-inside">
                {lists.map((list, idx) => (
                  <li key={idx} className="text-black">
                    {list.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      {/* <main className="main">
        <div className="container">
          <div className="card" style="--clr: #009688">
            <div className="img-box">
              <img src="https://i.postimg.cc/t4w95jsf/img-01.png"/>
            </div>
            <div className="content">
              <h2>Leafs</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, hic? Magnam eum error saepe doloribus corrupti
                repellat quisquam alias doloremque!
              </p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="card" style="--clr: #FF3E7F">
            <div className="img-box">
              <img src="https://i.postimg.cc/pdjRc68d/img-02.png"/>
            </div>
            <div className="content">
              <h2>Fruits</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, hic? Magnam eum error saepe doloribus corrupti
                repellat quisquam alias doloremque!
              </p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="card" style="--clr: #03A9F4">
            <div className="img-box">
              <img src="https://i.postimg.cc/wvDr345G/img-37.png"/>
            </div>
            <div className="content">
              <h2>Flowers</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, hic? Magnam eum error saepe doloribus corrupti
                repellat quisquam alias doloremque!
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </main> */}
    </div>
  );
};

export default Features;
