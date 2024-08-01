import React from "react";
import Accordion from "react-bootstrap/Accordion";
import hero_video from "./hero-video.mp4";
import deserv_ic1 from "./images/deserv-ic1.svg";
import deserv_ic2 from "./images/deserv-ic2.svg";
import deserv_ic3 from "./images/deserv-ic3.svg";
import deserv_ic4 from "./images/deserv-ic4.svg";
import checkic from "./images/checkic.svg";
// import { width } from "@fortawesome/free-regular-svg-icons/faAddressBook";
const Ketamine_therapy = () => {
  const style = {
    frist: {
      width: "50%",
    },
    second: {
      width: "75%",
    },
    third: {
      width: "90%",
    },
    bg: {
      background_color: "#fff;",
    },
  };
  return (
    <>
      <section class="hero-banner primary-care-banner">
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
            <div class="inner-content">
              <h2>Healing at Home with Ketamine Therapy</h2>
              <p>
                Traditional medications and therapy not getting you to where you
                want to be? Address the root causes of your depression and
                anxiety with breakthrough programs including online ketamine
                therapy and integration coaching.
              </p>

              <a href="get-start-ketamine-therapy.html" class="btn-main">
                Begin Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="experience-healthcare-wrp show-section">
        <div class="container">
          <div class="experience-healthcare-title">
            <div class="titlebar">
              <h2>You deserve to Feel Better</h2>
            </div>
            <p>
              We are here to help you achieve personal and clinical
              breakthroughs from the comfort of your own home.
            </p>
          </div>

          <div class="row">
            <div class="col-md-3 col-sm-12">
              <div class="experience-block deserve-box">
                <div class="experience-img">
                  <img src={deserv_ic1} alt="" />
                </div>

                <h3>Clinician video consult</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="experience-block deserve-box">
                <div class="experience-img">
                  <img src={deserv_ic2} alt="" />
                </div>

                <h3>Initial prep & integration</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="experience-block deserve-box">
                <div class="experience-img">
                  <img src={deserv_ic3} alt="" />
                </div>

                <h3>All Rx & non-Rx medicines</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="experience-block deserve-box">
                <div class="experience-img">
                  <img src={deserv_ic4} alt="" />
                </div>

                <h3>Personalized psychedelic therapy</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="advantages-wrp">
        <div class="container">
          <div class="titlebar">
            <h2>Our Program Includes</h2>
          </div>

          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="include-box">
                <img src={checkic} alt="" />
                <p>
                  Treatment for depression, anxiety, bipolar, post traumatic
                  stress disorder and other life stressors
                </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="include-box">
                <img src={checkic} alt="" />
                <p>Scientifically proven, safe and effective</p>
              </div>
            </div>

            <div class="col-md-6 col-sm-12">
              <div class="include-box">
                <img src={checkic} alt="" />
                <p>
                  Ketamine contributes to increased neuroplasticity by
                  increasing glutamate transmission, which helps neurons
                  communicate along new pathways
                </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="include-box">
                <img src={checkic} alt="" />
                <p>
                  Ketamine helps to improve synaptic connections in the brain to
                  interrupt negative thought patterns
                </p>
              </div>
            </div>

            <div class="col-md-6 col-sm-12">
              <div class="include-box">
                <img src={checkic} alt="" />
                <p>
                  Help with chronic pain by blocking excessive pain signals
                  before they reach the brain
                </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="include-box">
                <img src={checkic} alt="" />
                <p>
                  Minor short-term side effects and no known long-term side
                  effects
                </p>
              </div>
            </div>

            <div class="col-md-6 col-sm-12">
              <div class="include-box">
                <img src={checkic} alt="" />
                <p>Feel rapid relief within hours, not days</p>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="include-box">
                <img src={checkic} alt="" />
                <p>Heal from the comfort of your own home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="side-effects-wrp">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="side-effects-box">
                <h3>Anxiety</h3>

                <div class="side-progress">
                  <h4>Immediately after treatment</h4>

                  <div class="side-progress-bar">
                    <div class="progress-status" style={style.frist}>
                      <h6>50%</h6>
                    </div>
                  </div>
                </div>

                <div class="side-progress">
                  <h4>1 month after treatment</h4>

                  <div class="side-progress-bar">
                    <div class="progress-status" style={style.second}>
                      <h6>75%</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="side-effects-box">
                <h3>Depression</h3>

                <div class="side-progress">
                  <h4>Immediately after treatment</h4>

                  <div class="side-progress-bar">
                    <div class="progress-status" style={style.frist}>
                      <h6>50%</h6>
                    </div>
                  </div>
                </div>

                <div class="side-progress">
                  <h4>1 month after treatment</h4>

                  <div class="side-progress-bar">
                    <div class="progress-status" style={style.third}>
                      <h6>90%</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faq-wrapper" style={style.bg}>
        <div class="container">
          <div class="titlebar">
            <h2>Frequently Asked Questions</h2>
          </div>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is the neuroscience behind ketamine therapy for depression disorders and symptoms?</Accordion.Header>
              <Accordion.Body>
                <p>
              Peptide Therapy is a versatile treatment option suitable for virtually anyone looking to enhance their health and wellness. With its wide range of benefits, it can support various health goals, from fitness and weight management to anti-aging and recovery processes. All peptides are sourced from US-based, FDA-regulated compounding pharmacies, ensuring the highest quality and safety standards. To access Peptide Therapy, you'll need a prescription from a qualified medical provider.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header >Can I use ketamine for anxiety treatment if I’m on other anti-anxiety or antidepressant medications?</Accordion.Header>
              <Accordion.Body><p>
              In clinical studies, patients lost 20% of their body weight* on average using GLP-1s. The results are incredible and the compliments feel great.</p>
              </Accordion.Body>
            </Accordion.Item>
           
            <Accordion.Item eventKey="2">
              <Accordion.Header>Which other conditions / diagnoses is ketamine-assisted therapy used to treat?</Accordion.Header>
              <Accordion.Body><p>
              In clinical studies, patients lost 20% of their body weight* on average using GLP-1s. The results are incredible and the compliments feel great.In clinical studies, patients lost 20% of their body weight* on average using GLP-1s. The results are incredible and the compliments feel great.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header> Is ketamine therapy for depression safe?</Accordion.Header>
              <Accordion.Body><p>
              In clinical studies, patients lost 80% of their body weight* on average using GLP-1s. The results are incredible and the compliments feel great.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingfaq1">
                <button
                  class="accordion-button"
                  type="button"
                  style={style.bg}
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaq1"
                  aria-expanded="true"
                  aria-controls="collapsefaq1"
                >
                  What is the neuroscience behind ketamine therapy for
                  depression disorders and symptoms?
                </button>
              </h2>
              <div
                id="collapsefaq1"
                class="accordion-collapse collapse show"
                aria-labelledby="headingfaq1"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Peptide Therapy is a versatile treatment option suitable for
                    virtually anyone looking to enhance their health and
                    wellness. With its wide range of benefits, it can support
                    various health goals, from fitness and weight management to
                    anti-aging and recovery processes. All peptides are sourced
                    from US-based, FDA-regulated compounding pharmacies,
                    ensuring the highest quality and safety standards. To access
                    Peptide Therapy, you'll need a prescription from a qualified
                    medical provider.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingfaq2">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaq2"
                  aria-expanded="false"
                  aria-controls="collapsefaq2"
                >
                  Can I use ketamine for anxiety treatment if I’m on other
                  anti-anxiety or antidepressant medications?
                </button>
              </h2>
              <div
                id="collapsefaq2"
                class="accordion-collapse collapse"
                aria-labelledby="headingfaq2"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    In clinical studies, patients lost 20% of their body weight*
                    on average using GLP-1s. The results are incredible and the
                    compliments feel great.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingfaq3">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaq3"
                  aria-expanded="false"
                  aria-controls="collapsefaq3"
                >
                  Which other conditions / diagnoses is ketamine-assisted
                  therapy used to treat?
                </button>
              </h2>
              <div
                id="collapsefaq3"
                class="accordion-collapse collapse"
                aria-labelledby="headingfaq3"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    In clinical studies, patients lost 20% of their body weight*
                    on average using GLP-1s. The results are incredible and the
                    compliments feel great.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingfaq4">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaq4"
                  aria-expanded="false"
                  aria-controls="collapsefaq4"
                >
                  Is ketamine therapy for depression safe?
                </button>
              </h2>
              <div
                id="collapsefaq4"
                class="accordion-collapse collapse"
                aria-labelledby="headingfaq4"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    In clinical studies, patients lost 20% of their body weight*
                    on average using GLP-1s. The results are incredible and the
                    compliments feel great.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingfaq5">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefaq5"
                  aria-expanded="false"
                  aria-controls="collapsefaq5"
                >
                  Is ketamine therapy legal?
                </button>
              </h2>
              <div
                id="collapsefaq5"
                class="accordion-collapse collapse"
                aria-labelledby="headingfaq5"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    In clinical studies, patients lost 20% of their body weight*
                    on average using GLP-1s. The results are incredible and the
                    compliments feel great.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Ketamine_therapy;
