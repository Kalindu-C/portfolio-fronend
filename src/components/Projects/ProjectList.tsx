import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList: React.FC = () => {
  return (
    <div id="projects" className="project-section  rounded-lg py-4">
      <div className="container mx-auto">
        <div className="text-center mb-2">
          <h1 className="text-2xl font-light mb-0">Projects</h1>
        </div>
        {/* Add justify-center to center items when there's only one column */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">
          
          <ProjectItem
            title="Personal Banking Assistance"
            description="A mobile app that predicts user future expenses and income."
            // websiteUrl="https://cloudsync.io"
            githubUrl="https://github.com/Nadil02/bankingApp"
            listItems={[
              "Applied various time series forecasting techniques, including Prophet, LSTM, and Temporal Fusion Transformer (TFT), to achieve accurate predictions.",
              "Developed the backend using FastAPI and the frontend with React Native for a seamless full-stack application.",
              "Built an agentic chatbot leveraging an open-source LLM called LLaMA, ensuring enhanced user privacy protection.",
            ]}
          />

          {/* CloudSync Project */}
          {/* <ProjectItem
            title="EDA Project"
            description="applied Exploratory Data Analysis on a real world dataset"
            // websiteUrl="https://cloudsync.io"
            githubUrl="https://github.com/Kalindu-C/EDA"
            listItems={[
              "Analyzed a real-world dataset with over 8 million records to extract meaningful insights",
              "Utilized Python libraries such as Pandas, Matplotlib, and Seaborn for data visualization",
              "Implemented various statistical techniques to identify trends and patterns in the data",
            ]}
          /> */}

          {/* RoboFarm Project */}
          {/* <ProjectItem
            title="Nill Agents Predictions"
            description="Analyzed an insurance company's dataset to predict agents at risk of failing in the upcoming month."
            githubUrl="https://github.com/johndoe/RoboFarm"
            listItems={[
              "this competition was held by kaggle",
              "Applied machine learning algorithms such as Random Forest and XGBoost to predict agent performance",
              "Utilized Python libraries like Scikit-learn and Pandas for data preprocessing and model evaluation",
            ]}
          /> */}

          { /* QuantumSolver Project */ }
          <ProjectItem
            title="Fine-tuned LLM on Custom Dataset"
            description="Fine-tuned a large language model on a custom dataset for improved performance."
            githubUrl="https://github.com/Kalindu-C/llm_fine-tuning"
            listItems={[
              "used open-source models such as Phi-2, Phi-3-mini, DeepSeek-R1-Distill-Llama-8B, and Llama 3.2",
              "worked with libraries and frameworks including unsloth/transformers and PyTorch",
              "I gained in-depth understanding of LoRA, QLoRA, tokenization, and related concepts while working with the dataset.",
            ]}
          />

          {/* SolarEnergyOptimizer Project */}
          <ProjectItem
            title="Agentic Chatbot"
            description="built agentic chatbot for travel planning with user preferences"
            githubUrl="https://github.com/Kalindu-C/agent_with_langgraph"
            listItems={[
              "Built an agent-based chatbot using the LangGraph library as the core framework.",
              "Developed FastAPI endpoints for backend services and integrated a Streamlit interface for the frontend.",
              "Designed and integrated multiple tools, including a weather service and a currency converter, to enhance chatbot functionality.",
            ]}
          />

          { /*TravelMate Project */}
          <ProjectItem
            title="RAG Based Chat App"
            description="A web app that utilizes Retrieval-Augmented Generation (RAG) for enhanced conversational AI."
            // websiteUrl="https://travelmate.com"
            githubUrl="https://github.com/Kalindu-C/rag"
            listItems={[
              "Built a Retrieval-Augmented Generation (RAG) pipeline leveraging LangChain to enable efficient knowledge retrieval and generation.",
              "Developed backend APIs using FastAPI and created an interactive web interface with Streamlit.",
              "Integrated ChromaDB as the vector database to support fast and scalable similarity search.",
              "Implemented multi-user support and conversational capabilities to enhance user experience."
            ]}
          />

        </div>
      </div>
    </div>
  );
};

export default ProjectList;
