import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminBlog.css';
import BASE_URL from '@src/config.js';

const AdminBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
            setError('Failed to fetch blogs');
            setLoading(false);
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/edit/${id}`);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            try {
                await axios.delete(`${BASE_URL}/api/blogs/${id}`);
                fetchBlogs(); // Refresh the list
            } catch (err) {
                setError('Failed to delete blog post');
            }
        }
    };

    const handleAddNew = () => {
        navigate('/admin/edit');
    };

    // Function to truncate text to a certain length
    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    // Function to strip HTML tags from content
    const stripHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };

    return (
        <div className="admin-blog-container">
            <div className="admin-blog-header">
                <h1>Blog Management</h1>
                <button className="add-blog-btn" onClick={handleAddNew}>
                    <FaPlus /> Add New Blog
                </button>
            </div>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading-spinner">Loading...</div>
            ) : blogs.length === 0 ? (
                <div className="no-blogs-message">
                    <p>No blog posts found. Click "Add New Blog" to create your first post.</p>
                </div>
            ) : (
                <div className="blog-cards-container">
                    {blogs.map((blog) => (
                        <div className="blog-card" key={blog._id || blog.id}>
                            <div className="blog-card-image">
                                {blog.image ? (
                                    <img src={blog.image} alt={blog.title} />
                                ) : (
                                    <div className="no-image">No Image</div>
                                )}
                            </div>
                            <div className="blog-card-content">
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-author">By {blog.author || 'Unknown'}</p>
                                <p className="blog-category">{blog.category || 'Uncategorized'}</p>
                                <p className="blog-excerpt">
                                    {truncateText(stripHtml(blog.content), 150)}
                                </p>
                                <div className="blog-date">
                                    {new Date(blog.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="blog-card-actions">
                                <button 
                                    className="edit-btn" 
                                    onClick={() => handleEdit(blog._id || blog.id)}
                                >
                                    <FaEdit /> Edit
                                </button>
                                <button 
                                    className="delete-btn" 
                                    onClick={() => handleDelete(blog._id || blog.id)}
                                >
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminBlog;