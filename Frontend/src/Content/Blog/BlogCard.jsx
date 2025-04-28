import React from 'react';
import './BlogCard.css';
import blogauthor from '../../assets/images/blogauthor.png';
const BlogCard = ({ image, date, title, author, tags }) => {
    return (
        <div className="blog-card">
            <div className="image-container">
                <img src={image} alt={title} className="blog-image" />
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="blog-content">
                <p className="blog-date">{date}</p>
                <h3 className="blog-title">{title}</h3>
                <div className="author-section">
                    <img src={blogauthor} alt="Author" className="author-icon" />
                    <p className="author-name">{author}</p>
                    <button className="blog-read-more">Keep Reading</button>
                </div>

            </div>
        </div>
    );
};

export default BlogCard;
