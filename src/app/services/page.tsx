import type { NextPage } from 'next';

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Our Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-paint-brush" />
                </div>
                <h4>Fun Learning</h4>
                <p>We make our learning more fun in order to get students learning faster than usual.</p>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-money" />
                </div>
                <h4>Cheap Cost</h4>
                <p>Our courses are so cheaper than other courses out there in order to get student from any background.</p>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-newspaper-o" />
                </div>
                <h4>Update Curiculum</h4>
                <p>Our material is up to date beside on international curiculum. So students will learn for update method and tools.</p>
              </div>
            </div>
            <div className="row">
              <div className="service-item padd-15">
                <div className="service-item-inner">
                  <div className="icon">
                    <i className="fa fa-book" />
                  </div>
                  <h4>Interactif Learning</h4>
                  <p> We make our program more interactif between teacher-students.</p>
                </div>
              </div>
              <div className="service-item padd-15">
                <div className="service-item-inner">
                  <div className="icon">
                    <i className="fa fa-laptop" />
                  </div>
                  <h4>Study from anywhere</h4>
                  <p>Student could learning from any platform and any method.</p>
                </div>
              </div>
              <div className="service-item padd-15">
                <div className="service-item-inner">
                  <div className="icon">
                    <i className="fa fa-handshake-o" />
                  </div>
                  <h4>Collaboratif</h4>
                  <p>Our program priority for students is teamwork and help each other.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
