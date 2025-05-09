import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ id, image, date, title, author, tags }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/BlogDetails/${id}`);
    };

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
                    <p className="author-name">{author}</p>
                    <button className="blog-read-more" onClick={handleReadMore}>Keep Reading</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
