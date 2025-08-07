import React from "react";
// import ArticleItem from "./ArticleItem";
import BlogItem from "./BlogItem";

// const ArticleList: React.FC = () => {
//   return (
//     <div id="articles" className="project-section bg-gray-100 rounded-lg py-4">
//       <div className="container mx-auto">
//         <div className="text-center mb-2">
//           <h1 className="text-2xl font-light mb-0">Articles</h1>
//         </div>
//         {/* Add justify-center to center items when there's only one column */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">
          
//           {/* CloudSync Project */}
//           <ArticleItem
//             title="CloudSync"
//             description="Cloud-Based File Synchronization Tool"
//             websiteUrl="https://cloudsync.io"
//             githubUrl="https://github.com/johndoe/CloudSync"
//             listItems={[
//               "Designed a cloud-based tool to sync files across multiple devices in real time",
//               "Implemented end-to-end encryption for secure data storage and transmission",
//               "Built using Node.js, React, and AWS Lambda for serverless architecture",
//             ]}
//           />

//           {/* RoboFarm Project */}
//           <ArticleItem
//             title="RoboFarm"
//             description="Automated Farming and Crop Monitoring System"
//             githubUrl="https://github.com/johndoe/RoboFarm"
//             listItems={[
//               "Developed an automated system to monitor soil quality and optimize crop watering",
//               "Integrated IoT devices for real-time data collection and analysis",
//               "Used Python, MQTT protocol, and AWS IoT for connectivity and automation",
//             ]}
//           />

//           {/* QuantumSolver Project */}
//           <ArticleItem
//             title="QuantumSolver"
//             description="Quantum Computing Simulation Platform"
//             githubUrl="https://github.com/johndoe/QuantumSolver"
//             listItems={[
//               "Created a platform to simulate quantum computing algorithms on classical machines",
//               "Implemented Grover's and Shor's algorithms to solve search and factorization problems",
//               "Built using Python's Qiskit library and integrated with IBM Q for quantum simulation",
//             ]}
//           />

//           {/* SolarEnergyOptimizer Project */}
//           <ArticleItem
//             title="SolarEnergyOptimizer"
//             description="AI-Based Solar Energy Efficiency Optimizer"
//             githubUrl="https://github.com/johndoe/SolarEnergyOptimizer"
//             listItems={[
//               "Developed a machine learning model to optimize the energy output of solar panels",
//               "Used TensorFlow and Keras for model training, with real-time weather data integration",
//               "Deployed the model on AWS EC2 for continuous performance monitoring",
//             ]}
//           />

//           {/* TravelMate Project */}
//           <ArticleItem
//             title="TravelMate"
//             description="Personalized Travel Itinerary Generator"
//             websiteUrl="https://travelmate.com"
//             githubUrl="https://github.com/johndoe/TravelMate"
//             listItems={[
//               "Built a web app to generate personalized travel itineraries based on user preferences",
//               "Used Google Maps API and OpenWeather API for location and weather data",
//               "Built with React, Express, and MongoDB for the backend",
//             ]}
//           />

//         </div>
//       </div>
//     </div>
//   );
// };

const ArticleList: React.FC = () => {
  const blogPosts = [
    {
      title: "Error: listen EACCES: permission denied 127.0.0.1:3000 in Nodejs/ Express Project",
      imageUrl: "./A1.png",
      postUrl: "https://medium.com/p/bb4a50857c06",
    },
    {
      title: "From Raw to Refined: Understanding EDA, Data Preprocessing, and Feature Engineering in Real-World Data Science",
      imageUrl: "./A2.png",
      postUrl: "https://medium.com/p/e766985afd03",
    },
    // {
    //   title: "Understanding LLMs and RAG",
    //   imageUrl: "https://example.com/images/llm-rag.jpg",
    //   postUrl: "https://medium.com/@yourusername/llm-rag",
    // },
  ];

  return (
    <div id="articles" className="project-section bg-gray-100 rounded-lg py-6">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-light">My Blog Posts</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogItem
              key={index}
              title={post.title}
              imageUrl={post.imageUrl}
              postUrl={post.postUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
