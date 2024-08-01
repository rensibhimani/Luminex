import React from "react";
import hero_video from "./hero-video.mp4";

const Banner = () => {
  return (
    <>
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
            <div class="inner-content">
              <h1>
                Embark on a Journey<br> to Discover Joy &</br> Wonder Within!
              </h1>
              <p>
                We provide intuitive life coaching and resources to help you
                find more peace, happiness, and alignment in your life.
              </p>

              <a href="/personal-coaching" class="btn-main">
                Begin Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
