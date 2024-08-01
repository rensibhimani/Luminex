import React from 'react'
import hormones_men_banner from './images/hormones-men-banner.jpg';
import mob_men from './images/mob-hormones-men-banner.jpg';
import hormones_ic1 from './images/hormones-ic1.svg';
import hormones_ic2 from './images/hormones-ic2.svg';
import hormones_ic3 from './images/hormones-ic3.svg';

const Hormones_men = () => {

  const style = {
    bg: {
        background_color:"#fff;"
    }
  };
  return (
    <>
      <section class="hero-banner weight-loss-banner">
                
                <img class="desktop-image" src={hormones_men_banner} alt=""/>
                <img class="mobile-image " src={mob_men} alt=""/>
                
                <div class="banner-center">
                    <div class="container">
                        <div class="inner-content">
                            <h1>Optimized Hormone Balancing for men.</h1>
                            <p>We offer a variety of hormone replacement therapies to optimize your body’s levels in a way that maximizes your health and helps you feel like your best self.</p>

                            <a href="get-start-hormones.html" class="btn-main">Take the First Step</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="weight-wrp show-section" style={style.bg}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 col-sm-12">
                            <div class="weight-loss-data">
                                <div class="weight-loss-block">
                                    <h3>Rediscover Your Peak Performance with Our Men's Health Center:</h3>
                                    <p>Feeling a step behind your usual self? Whether it's a lack of interest in intimacy, diminished energy for workouts, or just getting through the day, unexpected physical challenges can take a toll on your confidence and quality of life.</p>

                                    <p>At Luminex Wellness, we're dedicated to helping you overcome these hurdles. Our men's health clinic offers a comprehensive suite of personalized treatments and therapies, designed to address your unique needs and get you back to feeling your best.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>

            <section class="why-choose-hormones-wrp">
                <div class="container">
                    <div class="titlebar">
                        <h2>Why choose us?</h2>
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <div class="hormones-block">
                                <div class="hormones-ic">
                                    <img src={hormones_ic1} alt=""/>
                                </div>

                                <h3>Low Libido</h3>
                                <p>It's not uncommon for men to experience a decrease in sexual desire, yet many hesitate to seek help due to embarrassment. Our team at Luminex Wellness is committed to providing a comfortable, confidential environment to discuss your concerns and explore personalized treatment options. By assessing your hormone levels, including testosterone, we pinpoint the root causes of your low libido, offering targeted treatments to reignite your passion and confidence.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="hormones-block">
                                <div class="hormones-ic">
                                    <img src={hormones_ic2}alt=""/>
                                </div>

                                <h3>Testosterone Replacement Therapy (TRT)</h3>
                                <p>A decline in testosterone can impact more than just your libido; it affects your energy, mood, physical appearance, and overall health. TRT at Luminex Wellness is tailored to help you regain vitality, enhance your physique, and even combat the signs of aging, restoring your zest for life.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="hormones-block">
                                <div class="hormones-ic">
                                    <img src={hormones_ic3} alt=""/>
                                </div>

                                <h3>Hormone Replacement Therapy (HRT)</h3>
                                <p>Balancing your hormones is crucial for optimal health and wellness. Our team expertly assesses your hormone levels to identify deficiencies, crafting a personalized HRT plan. With options including peptide therapy and sermorelin, we target your specific needs to achieve remarkable health transformations.</p>

                                <p>Rediscover your vitality and confidence with Luminex Wellness. Let's work together to tailor a treatment plan that revives your energy, restores your sexual health, and renews your life.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

    </>
  )
}

export default Hormones_men
