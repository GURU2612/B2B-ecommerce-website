import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import './Blog.css';
import blog1 from '../../assets/images/blogimage.png';

const BlogSection = () => {
  const blogData = [
    {
      image: blog1,
      date: '18 Sep 2024',
      title: 'Allergic Rhinitis: Overview and Management',
      author: 'DR. Jimmy Dave',
      tags: ['Liver', 'Events'],
    },
    {
      image: blog1,
      date: '18 Sep 2024',
      title: 'Managing Pain: A Comprehensive Guide',
      author: 'DR. Jimmy Dave',
      tags: ['Skin Care', 'News'],
    },
    {
      image: blog1,
      date: '18 Sep 2024',
      title: 'Understanding Respiratory Disorders to Breathe Easy',
      author: 'DR. Jimmy Dave',
      tags: ['Skin Care', 'Events'],
    },
  ];

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
            <div className="blog-subtitle">News &amp; Events</div>
          </div>
          <a href="#" className="blog-read-all">Read All Blogs</a>
        </motion.div>

        {/* Blog Cards Animation */}
        <motion.div
            className="blog-cards-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.3 }}
            viewport={{ once: false }}
        >
          {blogData.map((blog, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <BlogCard {...blog} />
              </motion.div>
          ))}
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
