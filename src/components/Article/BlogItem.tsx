import React from "react";

interface BlogItemProps {
  title: string;
  imageUrl: string;
  postUrl: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ title, imageUrl, postUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <a href={postUrl} target="_blank" rel="noopener noreferrer" className="no-underline hover:no-underline">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-contain object-center bg-white"
          loading="lazy"
          style={{ imageRendering: "auto" }} // ensures image quality isn't degraded
        />
        <div className="p-4">
          <h2 className="section-subheading font-light text-lg md:text-xl mb-0 mt-0">{title}</h2>
        </div>
      </a>
    </div>
  );
};

export default BlogItem;
