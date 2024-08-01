import Carousel from "react-bootstrap/Carousel";

function Testimonial() {
  return (
    <Carousel data-bs-theme="dark">
      {/* <div class="titlebar">
        <h2>Testimonials</h2>
      </div> */}
      <Carousel.Item>
        <section class="testimonial-wrp">
        <div class="titlebar">
                    <h2>Testimonials</h2>
                </div>
          <div class="testimonial-slider">
            <div class="testimonial-box">
              <h3> Emma M </h3>
              <p>
                Living in a remote area, accessing specialized medical care was
                always a struggle for me. But ever since I discovered this,
                distance is no longer a barrier. I can now connect with
                experienced doctors from different fields without leaving my
                home.
              </p>
            </div>
          </div>
        </section>
      </Carousel.Item>
      <Carousel.Item>
      <section class="testimonial-wrp">
      <div class="titlebar">
                    <h2>Testimonials</h2>
                </div>
          <div class="testimonial-slider">
            <div class="testimonial-box">
              <h3> Alex Deo </h3>
              <p>
              I was initially skeptical about telemedicine, but after trying this, I am amazed at the level of care and professionalism provided. The doctors take the time to listen, understand my concerns, and provide thorough explanations.
              </p>
            </div>
          </div>
        </section>
      </Carousel.Item>
      <Carousel.Item>
      <section class="testimonial-wrp">
      <div class="titlebar">
                    <h2>Testimonials</h2>
                </div>
          <div class="testimonial-slider">
            <div class="testimonial-box">
              <h3> Benjamin D. </h3>
              <p>
              I've been using this for the past few months, and it has truly been a game-changer for me. As a busy professional, finding time for doctor's appointments was always a challenge.
              </p>
            </div>
          </div>
        </section>
      </Carousel.Item>
      <Carousel.Item>
      <section class="testimonial-wrp">
      <div class="titlebar">
                    <h2>Testimonials</h2>
                </div>
          <div class="testimonial-slider">
            <div class="testimonial-box">
              <h3>Anie George </h3>
              <p>
              Being a parent, I often worry about my children's health. It has been a blessing for my family. Whenever my kids fall ill, I can quickly schedule a virtual appointment with a pediatrician who provides excellent care and reassurance.
              </p>
            </div>
          </div>
        </section>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonial;
