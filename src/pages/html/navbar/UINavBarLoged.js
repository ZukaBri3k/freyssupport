import React from "react";
import "./assets/css/NavigationWithButton.css";
import "./assets/fonts/font-awesome.min.css";
import logoFreyss from "./assets/img/logoFreyss.png";
import logoInsta from "./assets/img/logoInsta.png";
import logo192 from "./assets/img/logo192.png";

class UINavBar extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: "2px",
        }}
      >
        <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button">
          <div className="container">
            <img
              src={logoFreyss}
              width={70}
              height={30}
              style={{
                marginLeft: "-4px",
              }}
            />
            <img
              className="img-fluid me-auto"
              src={logo192}
              width={30}
              height={30}
              style={{
                marginRight: "0px",
                marginLeft: "20px",
              }}
            />
            <a
              href="https://www.instagram.com/freyssupport/"
              style={{
                marginRight: "4px",
                marginLeft: "9px",
              }}
            >
              <img src={logoInsta} width={30} height={30} />
            </a>
            <a
              className="navbar-brand text-start ms-auto"
              href="/"
              style={{
                marginRight: "16px",
                marginLeft: "0px",
              }}
            >
              <em>FreysSupport</em>
            </a>
            <div />
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navcol-1"
              style={{ justifyContent: "end" }}
            >
                <a
                className="btn btn-primary border rounded-pill action-button"
                role="button"
                href="/signin"
                style={{
                  background: "rgb(33,88,116)",
                }}
              >
                Rechercher de l'aide
              </a>
              <a
                className="btn btn-primary border rounded-pill action-button"
                role="button"
                href="/signin"
                style={{
                  background: "rgb(33,88,116)",
                }}
              >
                Mon compte
              </a>
              <a
                className="btn btn-primary border rounded-pill"
                role="button"
                style={{
                  background: "rgb(33,88,116)",
                }}
                href="/signup"
              >
                Se déconnecter
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default UINavBar;
