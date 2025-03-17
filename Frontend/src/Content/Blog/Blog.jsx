import React from "react";
import "./Blog.css"; // Import the external CSS file
import cal from "../../assets/images/calander.png";


const Blog = () => {
  return (
    <div className="outer-blog-container">
        <h2 className="blog-heading">Blogs</h2>
        <h2 className="news-events-heading">News & Events</h2>
        <h6 className="read-all-blogs">Read All Blogs</h6>
        <div className="line-1"></div> {/* Added horizontal line */}

        <div className="blog-card1">
            <div className="blog-card-image">
                    <div className="blog-card-rectangle">
                    <span className="blog-card-liver">Liver</span> {/* Text inside rectangle */}
            </div> 

                <div className="blog-card-rectangle2">
                    <span className="blog-card-events">Events</span>
                </div>
        </div>


        <div className="blog-card-background">
            <div className="blog-card-calendar">
                <img src={cal} alt="Calander"></img>
            </div> {/* Calendar Icon */}
        <span className="blog-card-date">18 Sep 2024</span> {/* Date Text */}
        <h3 className="blog-card-title">Allergic Rhinitis: Overview and Management</h3> {/* Blog Title */}
            <div className="blog-card-ellipse"></div> {/* Ellipse (Avatar) */}
                <span className="blog-card-doctor">DR. Jimmy Dave</span> {/* Doctor's Name */}
            <div className="blog-card-new-rectangle">
            <span className="blog-card-keep-reading">Keep Reading</span> {/* Added Keep Reading */}
            </div> {/* New Rectangle */}
        </div>
        </div>



      <div className="blog-card2">
      <div className="blog-card-image">
                    <div className="blog-card-rectangle">
                    <span className="blog-card-skincare">Skin Care</span> {/* Text inside rectangle */}
            </div> 

                <div className="blog-card-rectangle2">
                    <span className="blog-card-events">News</span>
                </div>
        </div>


        <div className="blog-card-background">
            <div className="blog-card-calendar">
                <img src={cal} alt="Calander"></img>
            </div> {/* Calendar Icon */}
        <span className="blog-card-date">18 Sep 2024</span> {/* Date Text */}
        <h3 className="blog-card-title">Allergic Rhinitis: Overview and Management</h3> {/* Blog Title */}
            <div className="blog-card-ellipse"></div> {/* Ellipse (Avatar) */}
                <span className="blog-card-doctor">DR. Jimmy Dave</span> {/* Doctor's Name */}
            <div className="blog-card-new-rectangle">
            <span className="blog-card-keep-reading">Keep Reading</span> {/* Added Keep Reading */}
            </div> {/* New Rectangle */}
        </div>
      </div>

      <div className="blog-card3">
      <div className="blog-card-image">
                    <div className="blog-card-rectangle">
                    <span className="blog-card-skincare">Skin Care</span> {/* Text inside rectangle */}
            </div> 

                <div className="blog-card-rectangle2">
                    <span className="blog-card-events">Events</span>
                </div>
        </div>


        <div className="blog-card-background">
            <div className="blog-card-calendar">
                <img src={cal} alt="Calander"></img>
            </div> {/* Calendar Icon */}
        <span className="blog-card-date">18 Sep 2024</span> {/* Date Text */}
        <h3 className="blog-card-title">Allergic Rhinitis: Overview and Management</h3> {/* Blog Title */}
            <div className="blog-card-ellipse"></div> {/* Ellipse (Avatar) */}
                <span className="blog-card-doctor">DR. Jimmy Dave</span> {/* Doctor's Name */}
            <div className="blog-card-new-rectangle">
            <span className="blog-card-keep-reading">Keep Reading</span> {/* Added Keep Reading */}
            </div> {/* New Rectangle */}
        </div>
      </div>
      {/* Slider Indicator */}
      <div className="blog-slider-indicator">
        <div className="blog-slider-dot"></div>
        <div className="blog-slider-dot active"></div>
        <div className="blog-slider-dot"></div>
        </div>
    </div>
    );
};

export default Blog;