import { useEffect, useState } from "react";

const Features = () => {
   const [features, setFeatures] = useState([]);

   useEffect(() => {
      fetch('features.json')
         .then(res => res.json())
         .then(data => setFeatures(data))
   }, [])

   return (
      <div className="px-6 mt-32">
         <h1 className="text-4xl text-center font-medium">Online Banking at your <br /> fingerprints</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-4 mt-16">
            {
               features.map(feature => {
                  const { id, img, title, lists } = feature;
                  return (
                     <div key={id} className="border border-gray-300 p-4 rounded-lg shadow-xl duration-300 hover:scale-105">
                        <img src={img} alt="feature-img" className="h-32 w-2/4 mx-auto object-cover"/>
                        <h2 className="text-2xl font-semibold my-3">{title}</h2>
                        <ul className="list-disc list-inside">
                           {
                              lists.map((list, idx) => <li key={idx} className="text-gray-800">{list.name}</li>)
                           }
                        </ul>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
};

export default Features;