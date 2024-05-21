import type { NextPage } from 'next';

const Blog: NextPage = () => {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Our Learning Program</h2>
            </div>
          </div>
          <div className="row">
            {/*Item 1 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/1.jpg" alt="Math-advance" />
                  <div className="blog-date">High School</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">Mathematic for advance</h4>
                  <p className="blog-description">
                    This class for high school level who want to improve their math skill for any purpose. In this class you will learn more advance material like calculus, linear algebra, graph, matrix and much more.
                  </p>
                  <p className="blog-tags">
                    Method: <a href="#">Offline</a>, <a href="#">Online</a>
                  </p>
                  <p className="blog-tags">
                    Class Price: <a href="#">Rp. 3.000.000 / Month</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Item 1 End */}
            {/* Item 2 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/2.jpg" alt="Economy" />
                  <div className="blog-date">High School</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">Economy Class</h4>
                  <p className="blog-description">This class for high school level who want to improve their economy skill for any purpose. In this class you will learn material like money management, stock and much more.</p>
                  <p className="blog-tags">
                    Method: <a href="#">Online</a>, <a href="#">Hybrid</a>
                  </p>
                  <p className="blog-tags">
                    Class Price: <a href="#">Rp. 2.000.000 / Month</a>
                  </p>
                </div>
              </div>
            </div>
            {/*Item 2 End */}
            {/*Item 3 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/3.jpg" alt="High School Entrance Exam" />
                  <div className="blog-date">Middle School</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">High School Entrance Exam</h4>
                  <p className="blog-description">This class for middle school level who want to improve their skill for exam. In this class you will learn more advance material like math, language, science and much more.</p>
                  <p className="blog-tags">
                    Method: <a href="#">Offline</a>, <a href="#">Online</a>
                  </p>
                  <p className="blog-tags">
                    Class Price: <a href="#">Rp. 3.500.000 / Month</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Item 3 End */}
            {/* Item 4 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/4.jpg" alt="Mathematic for Kids" />
                  <div className="blog-date">Elementary School</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">Mathematic For Kids</h4>
                  <p className="blog-description">IThis class for elementary school level who want to improve their math skill for any purpose. In this class you will learn material like counting, assumming, dividing and much more.</p>
                  <p className="blog-tags">
                    Method: <a href="#">Offline</a>, <a href="#">Hybrid</a>
                  </p>
                  <p className="blog-tags">
                    Class Price: <a href="#">Rp. 1.500.000 / Month</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Item 4 End */}
            {/* Item 5 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/5.jpg" alt="Science for Middle School" />
                  <div className="blog-date">Middle School</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">Science for Middle School</h4>
                  <p className="blog-description">This class for middle school level who want to improve their science skill for any purpose. In this class you will learn more advance material like biology, phisic, chemic and much more.</p>
                  <p className="blog-tags">
                    Method: <a href="#">Online</a>, <a href="#">Hybrid</a>
                  </p>
                  <p className="blog-tags">
                    Class Price: <a href="#">Rp. 2.500.000 / Month</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Item 5 End */}
            {/* Item 6 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/6.jpg" alt="Reading and Writing" />
                  <div className="blog-date">Elementary School</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">Reading and Writing Class</h4>
                  <p className="blog-description">
                    This class for elementary school level who want to improve their reading and writing skill for any purpose. In this class you will learn more advance material like fast reading, good writing and much more.
                  </p>
                  <p className="blog-tags">
                    Method: <a href="#">Offline</a>, <a href="#">Hybrid</a>
                  </p>
                  <p className="blog-tags">
                    Class Price: <a href="#">Rp. 500.000 / Month</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 3 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
