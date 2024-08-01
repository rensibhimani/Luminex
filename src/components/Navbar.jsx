import React from "react";
import discount_ic from "./images/discount-ic.svg";
import logo_svg from "./images/logo.svg";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  return (
    <div>
      <section className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="notebox">
                <img src={discount_ic} alt="" />
                <p>pring into Action: Exclusive Offers for March!</p>
                <img src={discount_ic} alt="" />
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="toplinks">
                <ul>
                  <li>
                    <a href="/get-started.html">Get Started</a>
                  </li>
                  <li>
                    <a href="/patient_portal" className="patient-btn">
                      Patient Portal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start header */}
      <header>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="/">
              <img src={logo_svg} alt="Logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#NavbarToggle"
              aria-controls="NavbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="NavbarToggle">
              <ul class="navbar-nav">
                <li>
                  <a class="nav-link" href="/primary-care">
                    Primary Care
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="/mental-health">
                    Mental Health
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="/weight-loss">
                    Weight Loss
                  </a>
                </li>                   
                <li>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Hormones"
                    menuVariant="dark"
                  >
                    <NavDropdown.Item href="/hormones_women">
                      Hormones Women
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/hormones_men">
                      Hormones Men
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li>
                  <a class="nav-link" href="/ketamine-therapy">
                    Ketamine Therapy
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="/personal-coaching">
                    Personal Coaching
                  </a>
                </li>
               
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* End Header  */}
    </div>
  );
};

export default Navbar;
