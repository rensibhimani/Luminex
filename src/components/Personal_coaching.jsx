import React from "react";
import hero_video from "./hero-video.mp4";
import everything_img from "./images/everything-img.png";
const Personal_coaching = () => {
  return (
    <>
      <section class="hero-banner weight-loss-banner">
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
                Embark on a Journey to Discover Joy & Wonder Within!
              </h1>
              <p>
                We provide intuitive life coaching and resources to help you
                find more peace, happiness, and alignment in your life.
              </p>

              <a href="get-start-personal-coaching.html" class="btn-main">
                Begin Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

       {/* Begin Your Journey  */}
            <section class="your-jurney-wrp coaching-step-wrp show-section">
                <div class="container">
                    <div class="titlebar">
                        <h6>Start Your Journey</h6>
                        <h2>3 Simple Steps: How We Help</h2>
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <div class="jurney-box">
                                <h3>Gaining Insight</h3>
                                <p>Understanding more about ourselves takes away the power of what used to control us. As you gain more insight, the things that used to limit your happiness and peace will start to disappear.</p>

                                <h4>1.</h4>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="jurney-box">
                                <h3>Letting Go of Emotionss</h3>
                                <p>Feel the amazing sense of freedom, lightness, and clarity that comes when you let go of trapped emotions and energy.</p>

                                <h4>2.</h4>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="jurney-box">
                                <h3>Listening to Your Inner Voice</h3>
                                <p>We’ll guide you on how to focus inwardly to find answers and advice from your own intuition, your inner guidance system.</p>

                                <h4>3.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Begin Your Journey  */}

            <section class="everything-wrp">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-12">
                            <div class="everything-data">
                                <h3>Everything you are searching for resides within you.</h3>
                                <p>Each of us has an inner realm brimming with wisdom and individual guidance, opening doors to peace, liberation, and endless possibilities. This platform is designed to help you tap into this profound part of yourself, enabling you to experience more peace, joy, and alignment in your daily life.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="everything-img">
                                <img src={everything_img} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="life-guidence-wrp">
                <div class="container">
                    <div class="titlebar">
                        <h2>Intuitive Life Guidance</h2>
                    </div>

                    <p>This platform is dedicated to assisting you in connecting with this aspect of yourself, allowing you to embrace more inner peace, joy, and harmony in your day-to-day life.</p>
                </div>
            </section>
    </>
  );
};

export default Personal_coaching;
