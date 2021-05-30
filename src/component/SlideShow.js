import React, { Component } from "react";
import "./Landing.css";

class SlideShow extends Component {
  render() {
    return (
      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../images/photo14.jpg" />

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>YOGA</h1>
                  <p>
                    Yoga is not about self-improvement it is about
                    SELF-ACCEPTANCE.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="/Home">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../images/photo15.jpg" />

              <div className="container">
                <div className="carousel-caption">
                  <h1>YOGA.</h1>
                  <p>No Philosophies just Methods.</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="/Home">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../images/photo16.jpg" />

              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>YOGA.</h1>
                  <p>Teaches you how to listen to your body.</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="/Home">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Your home for online yoga </h2>
            <p className="lead mt-3">
              “Yoga puts you in a parasympathetic mode. It alleviates stress. As
              such, you can naturally feel a greater sense of belonging,
              compassion, and connection. As you feel better, your sense of
              belonging also increases.”
              <br />
              Virtual yoga classes allow us to choose instructors who don't
              teach in our city, styles that aren't available in our town, and
              classes at times that are convenient for busy schedules.
            </p>
          </div>
          <div className="col-md-5">
            <img src="../images/photo.jpg" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">FIT FOR YOUR LIFESTYLE </h2>
            <p className="lead mt-3">
              Wake up with a sunrise meditation, sweat it out with lunchtime
              HIIT, or unwind with an evening flow. You’ll find movement for
              every mood with classes sorted by time, style, and skill level.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src="../images/photo2.jpg" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              FOR EVERY SPACE, AT ANY PACE.{" "}
            </h2>
            <p className="lead mt-3">
              From the comfort of your living room to a hotel room across the
              globe, we put the best classes at your fingertips. No WiFi?
              Download videos offline for a practice that moves with you.
            </p>
          </div>
          <div className="col-md-5">
            <img src="../images/photo9.jpg" />
          </div>
        </div>

        <hr className="featurette-divider" />
      </main>
    );
  }
}

export default SlideShow;
