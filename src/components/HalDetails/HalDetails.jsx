import React, { Component } from "react";
import "./HalDetails.css";
import { Link } from "react-router-dom";

class HalDetails extends Component {
  render() {
    let { hal } = this.props;
    const halPlan = {
      position: "absolute",
      width: hal.width,
      height: hal.height,
      top: hal.top,
      left: hal.left
    };

    return (
      <div>
        <div
          style={{
            position: "relative",
            height: 400
          }}
        >
          <div
            key={hal.ID}
            style={halPlan}
            className={`Hal ${this.props.help && "help"}`}
          >
            <h2>{hal.naam}</h2>
            <button onClick={this.props.onHelp} className="btn-danger">
              NOOD
            </button>
            <ul>
              {hal.apparaten.map(app => (
                <div
                  style={{
                    position: "absolute",
                    width: app.width,
                    height: app.height,
                    top: app.top,
                    left: app.left,
                    border: "3px solid #042a2b"
                  }}
                  key={app.ID}
                >
                  <ul>
                    <li>{app.naam}</li>
                    {app.categorie === "machine" && (
                      <Link to={`/${hal.naam}/apparaat/${app.ID}`}>
                        <i className="fas fa-cogs" />
                      </Link>
                    )}
                    {app.categorie === "lamp" && (
                      <Link to={`/${hal.naam}/apparaat/${app.ID}`}>
                        <i className="fas fa-lightbulb" />
                      </Link>
                    )}
                    {app.categorie === "band" && (
                      <Link to={`/${hal.naam}/apparaat/${app.ID}`}>
                        <i className="fas fa-dolly-flatbed" />
                      </Link>
                    )}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <Link to="/" className="btn btn-info">
          Go Back
        </Link>
      </div>
    );
  }
}

export default HalDetails;

/** 
 * <i class="fas fa-dolly-flatbed"></i>
 * 
 * 
 *  <div className="HalDetails row justify-content-center mt-5">
        <div className="col-11 col-lg-5">
          <div className="HalDetails-card card">
            <div className="card-body">
              <h2 className="card-title">{hal.naam}</h2>
            </div>
            <div className="card-body" />
            <ul className="list-group list-group-flush">
              {hal.apparaten.map(app => (
                <li className="list-group-item" key={app.ID}>
                  <h2>Machine ID: {app.ID}</h2>
                  <p>Naam:{app.naam}</p>
                  <p>Omschrijving: {app.omschrijving}</p>
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link to="/" className="btn btn-info">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
 */
