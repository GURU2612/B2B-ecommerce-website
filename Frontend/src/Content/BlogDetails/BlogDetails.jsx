import React, { useState, useEffect } from 'react';
import './BlogDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '@src/config.js';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Banner from "@src/Content/AboutusBanner/Banner.jsx";

const BlogDetail = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchBlogDetail = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BASE_URL}/api/blogs/${id}`);
                setBlog(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching blog details:', err);
                setError('Failed to load blog details. Please try again later.');
                setLoading(false);
            }
        };

        if (id) {
            fetchBlogDetail();
        }
    }, [id]);

    // Format date function
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    if (loading) {
        return <div className="blog-detail-loading">Loading article...</div>;
    }

    if (error || !blog) {
        return <div className="blog-detail-error">{error || 'Blog not found'}</div>;
    }

    return (
        <>
            <Banner
                title={blog.title}
                description="Stay updated with the latest news and research"
                breadcrumb="Home > Blog > Article"
            />
            <div className="blog-detail-container">
                <div className="blog-detail-header">
                    <h1 className="blog-detail-title">{blog.title}</h1>
                    <p className="blog-detail-meta">
                        By <span className="blog-detail-author">{blog.author || 'Anonymous'}</span> | 
                        <span className="blog-detail-date">{formatDate(blog.created_at)}</span> | 
                        <span className="blog-detail-category">{blog.category || 'General'}</span>
                    </p>
                </div>

                {blog.image && (
                    <div className="blog-detail-image-wrapper">
                        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
                    </div>
                )}

                <div className="blog-detail-content">
                    <div 
                        className="blog-detail-text"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>

                <div className="blog-detail-footer">
                    <div className="blog-detail-date-footer">{formatDate(blog.created_at)}</div>
                    <div className="blog-detail-socials">
                        <a href="#" className="blog-detail-social-link"><FaFacebookF /> Facebook</a>
                        <a href="#" className="blog-detail-social-link"><FaInstagram /> Instagram</a>
                        <a href="#" className="blog-detail-social-link"><FaTwitter /> Twitter</a>
                    </div>
                </div>

                <div className="blog-detail-navigation">
                    <Link to="/blog" className="blog-detail-nav-link prev-post">
                        <span>Previous Post</span>
                        <p>Back to Blog List</p>
                    </Link>
                    <Link to="/blog" className="blog-detail-nav-link next-post">
                        <span>Next Post</span>
                        <p>View More Articles</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
