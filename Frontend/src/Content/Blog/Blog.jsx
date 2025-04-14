// import React from "react";
// import "./Blog.css"; 
// import cal from "../../assets/images/calander.png";


// const Blog = () => {
//   return (
//     <div className="outer-blog-container">
//         <h2 className="blog-heading">Blogs</h2>
//         <h2 className="news-events-heading">News & Events</h2>
//         <h6 className="read-all-blogs">Read All Blogs</h6>
//         <div className="line-1"></div> 

//         <div className="blog-card1">
//             <div className="blog-card-image">
//                     <div className="blog-card-rectangle">
//                     <span className="blog-card-liver">Liver</span> 
//             </div> 

//                 <div className="blog-card-rectangle2">
//                     <span className="blog-card-events">Events</span>
//                 </div>
//         </div>


//         <div className="blog-card-background">
//             <div className="blog-card-calendar">
//                 <img src={cal} alt="Calander"></img>
//             </div> 
//         <span className="blog-card-date">18 Sep 2024</span>
//         <h3 className="blog-card-title">Allergic Rhinitis: Overview and Management</h3> 
//             <div className="blog-card-ellipse"></div> 
//                 <span className="blog-card-doctor">DR. Jimmy Dave</span> 
//             <div className="blog-card-new-rectangle">
//             <span className="blog-card-keep-reading">Keep Reading</span> 
//             </div> 
//         </div>
//         </div>



//       <div className="blog-card2">
//       <div className="blog-card-image">
//                     <div className="blog-card-rectangle">
//                     <span className="blog-card-skincare">Skin Care</span> 
//             </div> 

//                 <div className="blog-card-rectangle2">
//                     <span className="blog-card-events">News</span>
//                 </div>
//         </div>


//         <div className="blog-card-background">
//             <div className="blog-card-calendar">
//                 <img src={cal} alt="Calander"></img>
//             </div> 
//         <span className="blog-card-date">18 Sep 2024</span> 
//         <h3 className="blog-card-title">Allergic Rhinitis: Overview and Management</h3> 
//             <div className="blog-card-ellipse"></div> 
//                 <span className="blog-card-doctor">DR. Jimmy Dave</span> 
//             <div className="blog-card-new-rectangle">
//             <span className="blog-card-keep-reading">Keep Reading</span> 
//             </div> 
//         </div>
//       </div>

//       <div className="blog-card3">
//       <div className="blog-card-image">
//                     <div className="blog-card-rectangle">
//                     <span className="blog-card-skincare">Skin Care</span> 
//             </div> 

//                 <div className="blog-card-rectangle2">
//                     <span className="blog-card-events">Events</span>
//                 </div>
//         </div>


//         <div className="blog-card-background">
//             <div className="blog-card-calendar">
//                 <img src={cal} alt="Calander"></img>
//             </div> 
//         <span className="blog-card-date">18 Sep 2024</span> 
//         <h3 className="blog-card-title">Allergic Rhinitis: Overview and Management</h3> 
//             <div className="blog-card-ellipse"></div>
//                 <span className="blog-card-doctor">DR. Jimmy Dave</span> 
//             <div className="blog-card-new-rectangle">
//             <span className="blog-card-keep-reading">Keep Reading</span> 
//             </div> 
//         </div>
//       </div>
      
//       <div className="blog-slider-indicator">
//         <div className="blog-slider-dot"></div>
//         <div className="blog-slider-dot active"></div>
//         <div className="blog-slider-dot"></div>
//         </div>
//     </div>
//     );
// };

// export default Blog;




import React from "react";
import BlogCard from "./BlogCard";
import "./BlogCard.css";
import blog1 from "../../assets/images/blogimage.png";

const BlogSection = () => {
  const blogs = [
    {
      image: blog1,
      leftcategory: "News",
      rightcategory: "Events",
      title: "Exciting New Discoveries in the World of Life Sciences",
      authorImage: blog1,
      authorName: "Dr. Smith",
      date: "April 10, 2025",
      readTime: "3 min read"
    },
    {
      image: blog1,
      leftcategory: "News",
      rightcategory: "Events",
      title: "Exploring Genomic Technologies in Modern Medicine",
      authorImage: blog1,
      authorName: "Dr. Patel",
      date: "April 8, 2025",
      readTime: "4 min read"
    },

      {
        image: blog1,
        leftcategory: "Skin care",
        rightcategory: "Events",
        title: "Exploring Genomic Technologies in Modern Medicine",
        authorImage: blog1,
        authorName: "Dr. Patel",
        date: "April 8, 2025",
        readTime: "4 min read"
      }
    // Add more cards as needed
  ];

  return (
    <div className="blog-grid">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default BlogSection;
