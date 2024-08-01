import React from 'react'
import hero_video from "./hero-video.mp4";
import feel_ic1 from './images/feel-ic1.svg';
import feel_ic2 from './images/feel-ic2.svg';
import feel_ic3 from './images/feel-ic3.svg';
import treatment_img from './images/treatment-img.png';
const Mental_health = () => {
  return (
    <>
      <section class="hero-banner primary-care-banner">
                <div class="videofrem">
                    <video width="100%" playsinline="" preload="" autoplay="" muted={true} loop="">
                        <source src={hero_video} type="video/webm" />
                        <source src={hero_video} type="video/mp4" />
                    </video>
                </div>

                <div class="banner-center">
                    <div class="container">
                        <div class="inner-content">
                            <h1>Mental health page title goes here.</h1>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum has been the...</p>

                            <a href="get-start-mental-health.html" class="btn-main">Begin Your Journey</a>
                        </div>
                    </div>
                </div>
            </section>


            <section class="experience-healthcare-wrp show-section">
                <div class="container">
                    <div class="experience-healthcare-title">
                        <div class="titlebar">
                            <h2>Feel better</h2>
                        </div>
                        <p>We are here to help you achieve personal and clinical breakthroughs from the comfort of your own home.</p>
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <div class="experience-block">
                                <div class="experience-img">
                                    <img src={feel_ic1} alt=""/>
                                </div>

                                <h3>Take a quick assessment</h3>
                                <p>Tell us about your symptoms and medical history. We’ll let you know right away if the program could work for you.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="experience-block">
                                <div class="experience-img">
                                    <img src={feel_ic2} alt=""/>
                                </div>

                                <h3>Chat with a doctor</h3>
                                <p>Our Chat-based program puts doctors on your schedule. Get in touch whenever you want, from the privacy of home.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="experience-block">
                                <div class="experience-img">
                                    <img src={feel_ic3} alt=""/>
                                </div>

                                <h3>Get treatment</h3>
                                <p>Take control of your well-being through our user-friendly platform, designed to simplify healthcare.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="advantages-wrp">
                <div class="container">
                    <div class="titlebar">
                        <h2>Qualified and certified mental health professionals you can rely on</h2>
                    </div>

                    <h6>Tap into the world’s largest network of Certified and experienced Doctors who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. With our mental health professionals, you get the same professionalism and quality you would expect from an in-office clinicians, but with the ability to communicate when and how you want.</h6>
                </div>
            </section>

            <section class="why-choose-treatment-wrp">
                <div class="container">
                    <div class="titlebar">
                        <h2>Why choose treatment with us</h2>
                    </div>

                    <div class="treatment-row">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="treatment-img">
                                    <img src={treatment_img} alt=""/>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="treatment-data">
                                    <ul>
                                        <li>A safe space that’s easy to get to</li>
                                        <li>With you every step of the way</li>
                                        <li>Licensed clinicians find what’ll work for you.</li>
                                        <li>Licensed clinicians find what’ll work for you.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="why-now-wrp">
                        <div class="titlebar">
                            <h2>Why choose treatment with us</h2>
                        </div>

                        <div class="row">
                            <div class="col-md-3 col-sm-6">
                                <div class="choose-treatment-box">
                                    <div class="choose-title">
                                        <h3>Sertraline</h3>
                                        <p>zouoa</p>
                                    </div>

                                    <a href="https://usahealth365.com/zoloft-sertraline">Learn MORE</a>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="choose-treatment-box">
                                    <div class="choose-title">
                                        <h3>Buspirone</h3>
                                        <p>BUSPAR</p>
                                    </div>

                                    <a href="https://usahealth365.com/buspar-buspirone">Learn MORE</a>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="choose-treatment-box">
                                    <div class="choose-title">
                                        <h3>Escitalopram</h3>
                                        <p>LEXAPRO</p>
                                    </div>

                                    <a href="https://usahealth365.com/lexapro-escitalopram">Learn MORE</a>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="choose-treatment-box">
                                    <div class="choose-title">
                                        <h3>Fluoxetine</h3>
                                        <p>PROZAC</p>
                                    </div>

                                    <a href="https://usahealth365.com/prozac-fluoxetine">Learn MORE</a>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6">
                                <div class="choose-treatment-box">
                                    <div class="choose-title">
                                        <h3>Bupropion</h3>
                                        <p>WELLBUTRIN</p>
                                    </div>

                                    <a href="https://usahealth365.com/wellbutrin-bupropion">Learn MORE</a>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="choose-treatment-box">
                                    <div class="choose-title">
                                        <h3>Duloxetine</h3>
                                        <p>CYMBALTA</p>
                                    </div>

                                    <a href="https://usahealth365.com/cymbalta-duloxetine">Learn MORE</a>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="choose-treatment-box">
                                    <div class="choose-title">
                                        <h3>Venlafaxine</h3>
                                        <p>EFFEXOR</p>
                                    </div>

                                    <a href="https://usahealth365.com/effexor-venlafaxine">Learn MORE</a>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="choose-treatment-box">
                                    <div class="choose-title">
                                        <h3>Citalopram</h3>
                                        <p>CELEXA</p>
                                    </div>

                                    <a href="https://usahealth365.com/celexa-citalopram/">Learn MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


    </>
  )
}

export default Mental_health
