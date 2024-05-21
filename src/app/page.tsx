import Image from 'next/image';
import landing from './landing.png';

export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Rumah School</h2>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image src={landing} width={500} height={500} alt="Picture" />
          </div>
          <div className="row">
            <div className="home-content padd-15">
              <div className="row">
                <div className="home-text padd-15">
                  <h2>
                    Reach Your Knowledge <span>By Join With Us</span>
                  </h2>
                  <p>
                    At Rumah School, learning is highly interactive between student and teacher. To foster closeness to students, the teachers take different approaches to each student, because we know that each student has strengths and
                    has some things that can be developed further. With no homework but instead group work, students can help each other to teach what they know in order to develop a deeper understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-5px">
            <div className="buttons padd-15 btnhome">
              <a href="/about" target="_target" className="btn">
                See About Us
              </a>
              <a href="/blog" target="_target" className="btn">
                Our Course
              </a>
            </div>
          </div>
          <div className="row">
            <div className="section-title padd-15">
              <h2>Why Choose Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="home-item padd-15">
              <div className="home-item-inner">
                <div className="icon">
                  <i className="fa fa-book" />
                </div>
                <h4>Interactif Learning</h4>
                <p> We make our program more interactif between teacher-students.</p>
              </div>
            </div>

            <div className="home-item padd-15">
              <div className="home-item-inner">
                <div className="icon">
                  <i className="fa fa-laptop" />
                </div>
                <h4>Study from anywhere</h4>
                <p>Student could learning from any platform and any method.</p>
              </div>
            </div>

            <div className="home-item padd-15">
              <div className="home-item-inner">
                <div className="icon">
                  <i className="fa fa-handshake-o" />
                </div>
                <h4>Collaboratif</h4>
                <p>Our program priority for students is teamwork and help each other.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
