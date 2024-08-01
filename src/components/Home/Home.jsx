import React from "react";
import ic1 from "./intro-ic1.svg";
import ic2 from "./intro-ic2.svg";
import ic3 from "./intro-ic3.svg";
// import Banner from "../Banner";
import hero_video from "./hero-video.mp4";

const Home = () => {
  return (
    <>
      {/* <Banner/> */}
      <div className="main-wrpper">
        <section class="hero-banner">
          <div class="videofrem">
            <video
              width="100%"
              playsinline=""
              preload=""
              autoplay=""
              muted={true}
              loop=""
            >
              <source src={hero_video} type="video/webm" />
              <source src={hero_video} type="video/mp4" />
            </video>
          </div>
          <div class="banner-center">
            <div class="container">
              <h1>
                Welcome to Luminex Wellness: Your Comprehensive Telehealth
                Solution
              </h1>
            </div>
          </div>
        </section>
      </div>

      {/* Intro  */}
      <section class="intro-wrp show-section">
        <div class="container">
          <h2>Introduction</h2>

          <p>
            At Luminex Wellness, we’re redefining healthcare with a holistic,
            patient-centered approach. Our advanced telehealth platform connects
            you with expert medical professionals across a range of specialties,
            from hormone replacement therapies and weight loss solutions with
            Semaglutide and Tirzepatide, to urgent care, pediatric services,
            mental health support, ketamine therapies, and life coaching.
          </p>

          <p>
            Discover personalized healthcare that adapts to your unique needs
            and lifestyle, all from the comfort of your home.
          </p>

          <div class="intro-row">
            <div class="row">
              <div class="col-md-4 col-sm-12">
                <div class="intro-box">
                  <img src={ic1} alt="" />
                  <h6>Transparent Pricing</h6>
                </div>
              </div>
              <div class="col-md-4 col-sm-12">
                <div class="intro-box">
                  <img src={ic2} alt="" />
                  <h6>100% Remote</h6>
                </div>
              </div>
              <div class="col-md-4 col-sm-12">
                <div class="intro-box">
                  <img src={ic3} alt="" />
                  <h6>Health Coaching</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Intro  */}

      {/* Services */}
      <section className="service-wrp">
        <div className="container">
          <div className="titlebar">
            <h2>Our Services</h2>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="service-box">
                <h3>Hormone Replacement Therapy</h3>
                <p>
                  Balance is key to wellness. Our tailored Hormone Replacement
                  Therapy (HRT) programs for men and women address symptoms
                  related to hormonal imbalances, ensuring you feel energized
                  and revitalized.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-box">
                <h3>Weight Loss Solutions</h3>
                <p>
                  Revolutionize your weight loss journey with our medically
                  managed programs featuring Semaglutide and Tirzepatide.
                  Achieve sustainable results with personalized plans that fit
                  your lifestyle.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="service-box">
                <h3>Peptide Therapies</h3>
                <p>
                  Unlock the potential of peptide therapies for anti-aging,
                  muscle growth, and overall vitality enhancement. Our tailored
                  treatments help you achieve your wellness goals with precision
                  and care.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-box">
                <h3>Urgent and Pediatric Care</h3>
                <p>
                  Access immediate medical attention for acute illnesses,
                  injuries, and pediatric health concerns. Our telehealth
                  services ensure your family receives timely and effective care
                  when you need it most.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="service-box">
                <h3>Mental Health Services</h3>
                <p>
                  Navigate life’s challenges with our comprehensive mental
                  health support, including counseling and therapy sessions. We
                  offer a safe, confidential space to explore your emotions and
                  find balance.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-box">
                <h3>Ketamine Therapies</h3>
                <p>
                  Experience innovative treatment options for depression and
                  chronic pain with our ketamine therapies. We provide a path to
                  relief for those seeking alternatives to traditional
                  treatments.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="service-box">
                <h3>Life Coaching</h3>
                <p>
                  Embark on a journey of personal growth with our life coaching
                  services. Achieve your highest potential through guided
                  self-discovery and strategic goal-setting.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-box">
                <h3>Vitamin IV Therapies</h3>
                <p>
                  Delivering essential nutrients directly to your bloodstream,
                  our customized IV infusions support immunity, energy,
                  hydration, and detoxification, providing a rapid wellness
                  boost tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  End Services  */}
      {/* Why Choose Us? */}
      <section class="why-choose-wrp">
        <div class="container">
          <div class="titlebar">
            <h2>Why Choose Luminex Wellness?</h2>
          </div>

          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="why-choose-box">
                <h3>Personalized Care</h3>
                <p>
                  Your health and wellness journey is unique. That’s why we
                  offer customized treatment plans designed around your
                  individual needs and goals.
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="why-choose-box">
                <h3>Expert Team</h3>
                <p>
                  Our medical professionals are leaders in their fields,
                  bringing you the latest in healthcare innovations and
                  treatments.
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="why-choose-box">
                <h3>Convenience</h3>
                <p>
                  With our telehealth platform, access quality healthcare
                  anytime, anywhere. We make managing your health simple and
                  stress-free.
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="why-choose-box">
                <h3>Commitment to Excellence</h3>
                <p>
                  At Luminex Wellness, we’re committed to providing you with the
                  highest standards of care. Your health and satisfaction are
                  our top priorities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Why Choose Us? */}

      {/* Begin Your Journey */}
      <section class="your-jurney-wrp">
        <div class="container">
          <div class="titlebar">
            <h2>Begin Your Journey to Optimal Health</h2>
          </div>

          <div class="jurney-data">
            <p>
              Ready to transform your health and wellness? Luminex Wellness is
              here to guide you every step of the way. Contact us today to learn
              more about our services and schedule your consultation. Together,
              we’ll create a personalized plan to help you achieve your health
              and wellness goals.
            </p>

            <p>
              Visit [LuminexWellness.com](https://luminexwellness.com) to
              discover how we can support your journey towards a healthier, more
              vibrant life.
            </p>
          </div>

          <div class="row">
            <div class="col-md-4 col-sm-12">
              <div class="jurney-box">
                <h3>
                  Schedule
                  <br /> Appointments
                </h3>
                <p>
                  Schedule Appointment through our dedicated online appointment
                  booking systems.
                </p>

                <h4>1.</h4>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="jurney-box">
                <h3>
                  Virtual <br />
                  Consultations
                </h3>
                <p>
                  Get virtual consultation from our experts using video
                  conferencing on our dedicated platform.
                </p>

                <h4>2.</h4>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="jurney-box">
                <h3>
                  Follow-up &
                  <br /> Monitoring
                </h3>
                <p>
                  as opposed to using 'Content here, content here', making it
                  look like readable English. Many desktop publishing packages
                  and web page
                </p>

                <h4>3.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Begin Your Journey */}
    </>
  );
};

export default Home;
