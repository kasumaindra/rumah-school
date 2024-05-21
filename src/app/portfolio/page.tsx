import type { NextPage } from 'next';

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Team Teacher</h2>
            </div>
          </div>
          {/* <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="Offline">
                Offline Teacher
              </button>
              <button type="button" data-filter="online">
                Online Teacher
              </button>
              <button type="button" data-filter="Hybrid">
                Hybrid Teacher
              </button>
            </div>
          </div> */}
          <div className="row">
            {/* Product Item */}
            <div className="portfolio-item padd-15" data-category="offline">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/1.jpg" alt="teacher1" />
                </div>
                <div className="portfolio-info">
                  <h4>Agustina</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Product Item End*/}
            {/* Product Item */}
            <div className="portfolio-item padd-15" data-category="online">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/2.jpg" alt="teacher2" />
                </div>
                <div className="portfolio-info">
                  <h4>Syamsul Aidi</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Product Item End*/}
            {/* Product Item */}
            <div className="portfolio-item padd-15" data-category="hybrid">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/3.jpg" alt="teacher3" />
                </div>
                <div className="portfolio-info">
                  <h4>Nursila Harahap</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Product Item End*/}
            {/* Product Item */}
            <div className="portfolio-item padd-15" data-category="offline">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/4.jpg" alt="teacher4" />
                </div>
                <div className="portfolio-info">
                  <h4>Zedri Romanda</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Product Item End*/}
            {/* Product Item */}
            <div className="portfolio-item padd-15" data-category="hybrid">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/5.jpg" alt="teacher5" />
                </div>
                <div className="portfolio-info">
                  <h4>Sara silalahi</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Product Item End*/}
            {/* Product Item */}
            <div className="portfolio-item padd-15" data-category="online">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/6.jpg" alt="teacher6" />
                </div>
                <div className="portfolio-info">
                  <h4>Ibnu Afdhal</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Product Item End*/}
            {/* Product Item */}
            <div className="portfolio-item padd-15" data-category="online">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/7.jpg" alt="teacher7" />
                </div>
                <div className="portfolio-info">
                  <h4>Muhammad Khairunnas</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Product Item End*/}
            {/* Product Item */}
            <div className="portfolio-item padd-15" data-category="online">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/8.jpg" alt="teacher8" />
                </div>
                <div className="portfolio-info">
                  <h4>Fary sihombing</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Product Item End*/}
            {/* Product Item */}
            <div className="portfolio-item padd-15" data-category="online">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/9.jpg" alt="teacher9" />
                </div>
                <div className="portfolio-info">
                  <h4>Nazra Nurlaila</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Product Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
