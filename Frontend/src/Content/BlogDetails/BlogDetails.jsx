import React from 'react';
import './BlogDetails.css';
import blogImage from '../../assets/images/Doc Detail.png';

const BlogDetail = () => {
    return (
        <div className="blog-container">
            <img src={blogImage} alt="Blog Header" className="blog-header-image" />

            <div className="blog-content">
                <h2>The Chronicles of Marijuana Stocks</h2>

                <h3>The Chronicles of Marijuana Stocks The Advantages of Marijuana Stocks</h3>
                <p>
                    As stated by the price ranges, the stocks are categorized conveniently...
                </p>

                <h3>Most Noticeable Marijuana Stocks</h3>
                <p>
                    The holders increase or decrease depending on the stockbrokers...
                </p>

                <h3>Finding the Best Marijuana Stocks</h3>
                <p>
                    When you're clearly sure trading industry is the reliable, your account will start to grow...
                </p>

                <h3>Things You Won’t Like About Marijuana Stocks and Things You Will</h3>
                <p>
                    The stock is completely dry, as it was still listed on any big exchange...
                </p>

                <div className="blog-footer">
                    <span>10 Aug, 2023</span>
                    <div className="blog-socials">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>

                <div className="blog-navigation">
                    <div className="prev-post">
                        <span>Prev Post</span>
                        <p>Allergic Rhinitis: Overview and Management</p>
                    </div>
                    <div className="next-post">
                        <span>Next Post</span>
                        <p>Managing Pain: A Comprehensive Guide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
