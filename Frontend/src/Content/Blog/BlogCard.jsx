import React from "react";
import "./BlogCard.css";

const BlogCard = ({ image, leftcategory,rightcategory, title, authorImage, authorName, date, readTime }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={image} alt="blog" />
        <span className="category-tag">{leftcategory}</span>
        <span className="category-tag2">{rightcategory}</span>

      </div>
      <div className="blog-content">
        <h3 className="blog-title">{title}</h3>
        <div className="blog-author">
          <img src={authorImage} alt="author" className="author-img" />
          <div className="author-details">
            <span className="author-name">{authorName}</span>
            <span className="blog-date">{date} • {readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
