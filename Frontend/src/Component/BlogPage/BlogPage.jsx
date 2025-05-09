import React, { useState, useEffect } from 'react';
import BlogCard from '@src/Content/Blog/BlogCard';
import './BlogPage.css';
import Banner from "@src/Content/AboutusBanner/Banner.jsx";
import axios from 'axios';
import BASE_URL from '@src/config.js';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${BASE_URL}/api/blogs`);
            setBlogs(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching blogs:', err);
            setError('Failed to load blogs. Please try again later.');
            setLoading(false);
        }
    };

    // Function to format date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <>
            <Banner
                title="Blog"
                description="Stay updated with the latest news, research, and developments in the biotech and pharmaceutical industry."
                breadcrumb="Home > Blog"
            />
            
            {error && <div className="error-message">{error}</div>}
            
            {loading ? (
                <div className="loading-container">
                    <div className="loading-spinner">Loading...</div>
                </div>
            ) : (
                <div className="blog-page-container">
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                id={blog.id}
                                image={blog.image}
                                date={formatDate(blog.created_at)}
                                title={blog.title}
                                author={blog.author || 'Anonymous'}
                                tags={blog.category ? [blog.category] : ['General']}
                            />
                        ))
                    ) : (
                        <div className="no-blogs-message">
                            <p>No blog posts available at the moment. Please check back later.</p>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default BlogPage;
