import React from 'react';
import BlogCard from '@src/Content/Blog/BlogCard';
import './BlogPage.css';
import blogImg from '@src/assets/images/blogimage.png';
import Banner from "@src/Content/AboutusBanner/Banner.jsx"; // replace with your image path



const blogData = [
    {
        image: blogImg,
        date: 'April 30, 2025',
        title: 'Understanding Biotech Innovations',
        author: 'Dr. Mehta',
        tags: ['Biotech']
    },
    {
        image: blogImg,
        date: 'April 25, 2025',
        title: 'New Horizons in Life Sciences',
        author: 'Ms. Sharma',
        tags: ['Research'],
        dfdf:"ldrgrkldngldrnglnrklngerngnerngerngkergfndfmngndrjlngenrngrndklrgnlern"
    },
    {
        image: blogImg,
        date: 'April 20, 2025',
        title: 'Clinical Trials & Insights',
        author: 'Dr. Verma',
        tags: ['Clinical']
    },
    {
        image: blogImg,
        date: 'April 15, 2025',
        title: 'Advanced Drug Formulations',
        author: 'Mr. Desai',
        tags: ['Pharma']
    },
    {
        image: blogImg,
        date: 'April 10, 2025',
        title: 'Global Regulatory Affairs',
        author: 'Mrs. Patel',
        tags: ['Regulation']
    },
    {
        image: blogImg,
        date: 'April 5, 2025',
        title: 'Modern Vaccine Development',
        author: 'Dr. Iyer',
        tags: ['Vaccines']
    },
    {
        image: blogImg,
        date: 'April 5, 2025',
        title: 'Modern Vaccine Development',
        author: 'Dr. Iyer',
        tags: ['Vaccines']
    },
];

const BlogPage = () => {
    return (
        <>
        <Banner
            title="Blog"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            breadcrumb="Home > Blog"
        />
        <div className="blog-page-container">
            {blogData.map((blog, index) => (
                <BlogCard
                    key={index}
                    image={blog.image}
                    date={blog.date}
                    title={blog.title}
                    author={blog.author}
                    tags={blog.tags}
                />
            ))}
        </div>
        </>
    );
};

export default BlogPage;
