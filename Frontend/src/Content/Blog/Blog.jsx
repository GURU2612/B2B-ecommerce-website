import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import './Blog.css';
import axios from 'axios';
import BASE_URL from '@src/config.js';
import {Link, useNavigate} from 'react-router-dom';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/blogs`);
        // Get only the first 3 blogs for the homepage section
        setBlogs(response.data.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Format date function
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  const navigate =useNavigate();

  return (
    <section className="blog-section">
      {/* Blog Header Animation */}
      <motion.div
        className="blog-section-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <div className="titles">
          <h4>Blogs</h4>
          <div className="blog-subtitle">Latest Articles</div>
        </div>
        <a onClick={()=>navigate('/BlogPage')} className="blog-read-all">Read All Blogs</a>
      </motion.div>

      {/* Blog Cards Animation */}
      <motion.div
        className="blog-cards-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.3 }}
        viewport={{ once: false }}
      >
        {loading ? (
          <div className="blog-loading">Loading latest articles...</div>
        ) : (
          blogs.map((blog, index) => (
            <motion.div
              key={blog.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <BlogCard 
                id={blog.id}
                image={blog.image} 
                date={formatDate(blog.created_at)} 
                title={blog.title}
                author={blog.author || 'Anonymous'}
                tags={blog.category ? [blog.category] : ['General']}
              />
            </motion.div>
          ))
        )}
      </motion.div>

      {/* Pagination Dots Animation */}
      <motion.div
        className="pagination-dots"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </motion.div>
    </section>
  );
};

export default BlogSection;
