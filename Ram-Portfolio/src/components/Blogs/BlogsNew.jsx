// Import React
import React from 'react';
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";


// Import the images
import BlogProjectImg from "../../Assets/blogproject.jpg";
import BlogWebDesignImg from "../../Assets/blogwebdesign.avif";
import BlogWebDevImg from "../../Assets/blogwebdevlop.avif";

// Blog Component
const BlogSection = () => {
  return (
    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              
              <p className="subtitle-a">Exploring the wonders of sustainable living.</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Blog Card 1 */}
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <img src={BlogProjectImg} alt="Projects" className="img-fluid" />
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Projects</h6>
                  </div>
                </div>
                <h3 className="card-title">Projects Ideas</h3>
                <p className="card-description">
                  Ideas fuel innovation, sparking creativity and driving progress. They are the seeds from which groundbreaking solutions and transformative endeavors grow.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author text-warning">
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bx-star'></i>
                </div>
                <div className="post-date">
                  <i className='bx bxs-calendar'></i> Feb 10, 2024
                </div>
              </div>
            </div>
          </div>
          {/* Blog Card 2 */}
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <img src={BlogWebDesignImg} alt="Web Design" className="img-fluid" />
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Web Design</h6>
                  </div>
                </div>
                <h3 className="card-title">See more web design</h3>
                <p className="card-description">
                  Web design is the art of crafting digital experiences, that paints the canvas of user interaction. In the world of pixels, the web design is the brushstroke
                  that transforms ideas into immersive journeys.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author text-warning">
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star-half'></i>
                  <i className='bx bx-star'></i>
                </div>
                <div className="post-date">
                  <i className='bx bxs-calendar'></i> Mar 11, 2024
                </div>
              </div>
            </div>
          </div>
          {/* Blog Card 3 */}
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <img src={BlogWebDevImg} alt="Web Development" className="img-fluid" />
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Web Development</h6>
                  </div>
                </div>
                <h3 className="card-title">More about Web Development</h3>
                <p className="card-description">
                  In the digital engine room, he weaves the threads of functionality into the fabric of seamless user experiences. He acts as the silent architect, orchestrating the symphony of data and ensuring the heartbeat of applications.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author text-warning">
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star-half'></i>
                </div>
                <div className="post-date">
                  <i className='bx bxs-calendar'></i> Apr 10, 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
