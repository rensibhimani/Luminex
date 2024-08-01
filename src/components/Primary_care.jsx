import React from "react";
import Accordion from "react-bootstrap/Accordion";
import hero_video from "./hero-video.mp4";
import exp_ic1 from "./images/exp-ic1.svg";
import exp_ic2 from "./images/exp-ic2.svg";
import exp_ic3 from "./images/exp-ic3.svg";
import doctor_img from "./images/doctor-img.png";

const Primary_care = () => {

    const style = {
        bg: {
          background_color: "#fff;",
        }
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
              <h1>Comprehensive Care without Hassle</h1>
              <p>
                Chat with a Primary Care doctor without leaving your house.
                Manage current conditions and prevent future ones. Only
                $89/month.
              </p>

              <a href="get-start-primary-care.html" class="btn-main">
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
              <h2>Experience healthcare like never before</h2>
            </div>
            <p>
              We are here to help you achieve personal and clinical
              breakthroughs from the comfort of your own home.
            </p>
          </div>

          <div class="row">
            <div class="col-md-4 col-sm-12">
              <div class="experience-block">
                <div class="experience-img">
                  <img src={exp_ic1} alt="" />
                </div>

                <h3>Effortless Virtual Intake</h3>
                <p>
                  Our smart & fast virtual intake process ensures your doctor
                  has all the information they need to care for you, making your
                  healthcare journey seamless from start to finish
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="experience-block">
                <div class="experience-img">
                  <img src={exp_ic2} alt="" />
                </div>

                <h3>Get Care on Your Schedule</h3>
                <p>
                  Enjoy the freedom of accessing quality healthcare whenever it
                  fits into your busy life. We're here to accommodate your
                  schedule, not the other way around.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="experience-block">
                <div class="experience-img">
                  <img src={exp_ic3} alt="" />
                </div>

                <h3>Manage Your Health with Ease</h3>
                <p>
                  Take control of your well-being through our user-friendly
                  platform, designed to simplify healthcare and put personalized
                  care at your fingertips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="advantages-wrp">
        <div class="container">
          <div class="titlebar">
            <h2>The Advantages</h2>
          </div>

          <div class="row">
            <div class="col-md-4 col-sm-12">
              <div class="advantages-box">
                <p>365 Access</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="advantages-box">
                <p>Personalized Care</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="advantages-box">
                <p>Quick Referrals</p>
              </div>
            </div>

            <div class="col-md-4 col-sm-12">
              <div class="advantages-box">
                <p>No waiting Rooms</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="advantages-box">
                <p>Reduced Costs</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="advantages-box">
                <p>No Travel Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="control-health-wrp">
        <div class="titlebar">
          <h2>Take Control of Your Health</h2>
        </div>

        <div class="control-health-slider">
          <div class="control-health-block">
            <div class="row">
              <div class="col-md-5 col-sm-12">
                <div class="health-img">
                  <img src={doctor_img} alt="" />
                </div>
              </div>
              <div class="col-md-7 col-sm-12">
                <div class="health-data">
                  <h6>Weight Loss Program</h6>
                  <h3>Get in touch with a doctor without delay.</h3>
                  <p>
                    Say goodbye to feeling under the weather and exhausted. Text
                    with a doctor for instant care for both you and your
                    children, without any waiting rooms or appointments.
                  </p>

                  <a href="get-start-weight-loss.html" class="btn-main">
                    Enroll now
                  </a>
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
              <Accordion.Header>What does Primary Care treat?</Accordion.Header>
              <Accordion.Body>
                <p>
                  We are providing remote wellness visits, chronic condition
                  management and prevention, prescription refills, Urgent Care*
                  services, unlimited Urgent Care visits for children aged 3-17,
                  and additional benefits. On our platform, Primary Care
                  clinicians can assist in managing and treating common chronic
                  conditions such as high cholesterol, high blood pressure, and
                  type 2 diabetes. They also develop individualized care plans
                  to prevent future conditions such as heart attack and stroke.
                  The medical team can remotely prescribe and refill
                  medications, order lab tests and health screenings, among
                  other services. It should be noted that we do not provide
                  insurance coverage and do not cover ancillary services such as
                  referrals, laboratory tests, equipment costs, medication
                  costs, and other services. For more information, please refer
                  to the Terms of Service. Additionally, you can learn about the
                  scope of treatment available on the platform.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {" "}
                How much does Primary Care cost?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We have streamlined healthcare delivery to reduce costs and
                  ensure quality care for all, regardless of insurance coverage.
                  You can become a member for just $89 per month, which includes
                  access to our Primary Care program, Urgent Care visits, Urgent
                  Care for children ages 3-17, and more..
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Can I use my insurance to pay for it?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We don’t currently accept insurance for our memberships,
                  one-time virtual visits for urgent care, or medication
                  delivered by mail. However, we keep our prices affordable to
                  ensure that everyone has access to quality healthcare. In
                  fact, in many cases, our prices are lower than your insurance
                  copay would have been! If your clinician prescribes medication
                  for you to pick up at your local pharmacy or orders bloodwork
                  to be done at a lab of your choice, you can still use your
                  insurance at those locations.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                {" "}
                Are there any conditions that you do not treat?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Our affiliated clinicians can diagnose and treat most things
                  you might see an in-person primary care doctor for. However,
                  there are sometimes instances when we recommend you see a
                  doctor in person.{" "}
                </p>
                <p>
                  For example, ear infections and strep throat are two common
                  conditions that require an in-person consultation for
                  diagnosis. However, our affiliated clinicians can help assess
                  severity and provide guidance on what to do next.{" "}
                </p>
                <p> We also don’t treat anyone who:</p>
                <ul class="faq-ul">
                  <li> - Is under 18 or over 64 years old </li>
                  <li> - Lives in Hawaii or Alaska </li>
                  <li>
                    {" "}
                    - Has a medical condition that requires a specialist (on a
                    case by case basis){" "}
                  </li>
                  <li> - Is currently pregnant </li>
                  <li>
                    {" "}
                    - Is currently being treated for cancer with chemotherapy or
                    radiotherapy
                  </li>
                  <li> - Has an autoimmune disease </li>
                  <li> - Is currently on immunosuppressants </li>
                  <li> - Is diagnosed with AIDS </li>
                  <li> - Is currently in hospice care </li>
                  <li> - Has a history of organ transplant </li>
                  <li> - Is dependent on oxygen </li>
                  <li>
                    {" "}
                    - Has significant liver, kidney, or other organ failure{" "}
                  </li>
                  <li>
                    {" "}
                    - Is seeking medical management related to worker’s comp or
                    injury litigation{" "}
                  </li>
                </ul>

                <p>
                  {" "}
                  We don’t prescribe controlled substances, and we cannot
                  prescribe other high-risk medications that are subject to
                  abuse. Learn more in our Medical Policies.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                {" "}
                What happens if the clinician recommends that I see someone in person?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                Depending on your symptoms, the medical team may recommend seeking in-person care as some conditions cannot be treated remotely. For instance, orthopedic conditions require physical examination and tests, while lab tests may be necessary for conditions like strep throat. Rest assured, our team will work with you to find the right doctor in your area for any necessary in-person care.
                </p>
              </Accordion.Body>
              </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Primary_care;
