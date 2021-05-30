import React, { Component } from "react";
import header from "./images/header.jpg";
import yoga2 from "./images/yoga2.jpg";
import yoga3 from "./images/yoga3.jpg";

class Features extends Component {
  render() {
    return (
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Why MyDoc?</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100  overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{ backgroundImage: `url(${header})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-1 mt-1 mb-5 display-6 lh-1 fw-bold">
                  Simplicity
                </h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{ backgroundImage: `url(${yoga2})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-1 mt-1 mb-5 display-6 lh-1 fw-bold">
                  Scalability
                </h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{ backgroundImage: `url(${yoga3})` }}
            >
              <div className="d-flex flex-column h-200 p-5 pb-3 text-shadow-1">
                <h2 className="pt-1 pb-5 mt-1 mb-5 display-6 lh-1 fw-bold">
                  Safety
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
