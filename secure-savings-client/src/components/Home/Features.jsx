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
      <div className="text-center mt-20">
        <h2 className="md:text-4xl text-3xl font-semibold uppercase teb dark:text-darkText">Online Banking at your <br /> fingerprints</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-2xl mx-auto gap-5 mt-16">
        {
          features.map((feature) => {
            const { id, img, title, description } = feature;
            return (
              <>
                <main className="main" key={id}>
                  <div className="container">
                    <div className="card dark:!bg-dark" style={{ "--clr": "#009688" }}>
                      <div className="img-box">
                        <img src={img} className="w-full h-full object-cover" alt="Image" />
                      </div>
                      <div className="content">
                        <h2 className="dark:!text-darkText">{title}</h2>
                        <p className="dark:!text-darkText">
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
