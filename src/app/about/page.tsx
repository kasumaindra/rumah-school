import type { NextPage } from 'next';
import Image from 'next/image';
import aboutUs from './AboutUs.jpg';

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Rumah School</h2>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image className="img-about" src={aboutUs} width={500} height={500} alt="Picture" />
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    Rumah School <span>In History</span>
                  </h2>
                  <p>
                    Rumah school has been established since 2020 with a focus on high school materials. Located in Nongsa Batam makes the location strategic. It has been recognized and inaugurated by the mayor of Batam, Mr. Rudi, who came
                    directly to sign the inauguration and groundbreaking documents. In 2023 rumah school has opened new classes for junior high school and elementary school aiming to expand the scope of education to students in need.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">History</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021, July 12
                          </h6>
                          <h4 className="timeline-title">Opening new education institution </h4>
                          <p className="timeline-text">In 2021 a new home school in the form of an unofficial educational organization. managed to gain the trust of pupils and parents as a good and demanded educational institution.</p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022, October 25
                          </h6>
                          <h4 className="timeline-title">Apply for opening a new official institutions </h4>
                          <p className="timeline-text">Due to the large number of students and the request for the opening of new classes, we applied for the establishment of an official educational institution.</p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023, January 12
                          </h6>
                          <h4 className="timeline-title">Officially became a new education institution</h4>
                          <p className="timeline-text">Finally, in 2023, home schools get an official license as a state-recognized educational institution.</p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Achivement</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023, January 12
                          </h6>
                          <h4 className="timeline-title">Get Sertification for sducation purpose</h4>
                          <p className="timeline-text">Finally, in 2023, home schools get an official license as a state-recognized educational institution.</p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023, Desember 10
                          </h6>
                          <h4 className="timeline-title">Visited and Supported by Indonesia Presiden</h4>
                          <p className="timeline-text">Mr. Jokowi came to Nongsa Batam to provide work supervision as well as visit the Home School to see and support educational programs that are also supported by the community.</p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2024, Mei 1
                          </h6>
                          <h4 className="timeline-title">Send Student to learning aboard</h4>
                          <p className="timeline-text">Since 2023 home school actively make program for students who want to study aboard to east asia country. </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
