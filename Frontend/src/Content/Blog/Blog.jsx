

import React from "react";
import BlogCard from "./BlogCard";
import "./BlogCard.css";
import blog1 from "../../assets/images/blogimage.png";

const BlogSection = () => {
  const blogs = [
    {
      image: blog1,
      leftcategory: "News",
      rightcategory: "Events",
      title: "Exciting New Discoveries in the World of Life Sciences",
      authorImage: blog1,
      authorName: "Dr. Smith",
      date: "April 10, 2025",
      readTime: "3 min read"
    },
    {
      image: blog1,
      leftcategory: "News",
      rightcategory: "Events",
      title: "Exploring Genomic Technologies in Modern Medicine",
      authorImage: blog1,
      authorName: "Dr. Patel",
      date: "April 8, 2025",
      readTime: "4 min read"
    },

      {
        image: blog1,
        leftcategory: "Skin care",
        rightcategory: "Events",
        title: "Exploring Genomic Technologies in Modern Medicine",
        authorImage: blog1,
        authorName: "Dr. Patel",
        date: "April 8, 2025",
        readTime: "4 min read"
      }
    // Add more cards as needed
  ];

  return (
    <div className="blog-grid">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default BlogSection;
