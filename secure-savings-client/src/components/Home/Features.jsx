import { useEffect, useState } from "react";
import "./FeaturesStyle.css"

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="px-2 mt-32">
      <h1 className="md:text-4xl text-2xl text-center font-medium">
        Online Banking at your <br /> fingerprints
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-2xl mx-auto gap-5 mt-16">
        {
          features.map((feature) => {
            const { id, img, title, description } = feature;
            return (
              <>
                {/* <div
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
                </div> */}
                <main className="main" key={id}>
                  <div className="container">
                    <div className="card" style={{ "--clr": "#009688" }}>
                      <div className="img-box">
                        <img src={img} className="w-full h-full object-cover" alt="Image" />
                      </div>
                      <div className="content">
                        <h2>{title}</h2>
                        <p>
                          {description}
                        </p>
                        <a href="">Read More</a>
                      </div>
                    </div>
                  </div>
                </main>
              </>
            );
          })
        }
      </div>
    </div>
  );
};

export default Features;
