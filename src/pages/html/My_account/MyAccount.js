import React from "react";

class MyAccount extends React.Component {
  render() {
    return (
      <div
        style={{
          background: "var(--bs-body-bg)",
          marginLeft: "0px"
        }}
      >
        <nav
          className="navbar navbar-light navbar-expand-lg navigation-clean-button"
          style={{
            marginBottom: "0px",
            marginLeft: "0px"
          }}
        >
          <div className="container">
            <img
              src="assets/img/logo%20freyss.png"
              width={70}
              height={30}
              style={{
                marginLeft: "-4px"
              }}
            />
            <img
              src="assets/img/logo%20insta.png"
              width={30}
              height={30}
              style={{
                marginTop: "0px",
                marginRight: "7px",
                marginLeft: "17px"
              }}
            />
            <a
              className="navbar-brand border rounded border-primary ms-auto"
              href="#"
              style={{
                marginRight: "1px",
                marginLeft: "0px",
                marginBottom: "4px",
                borderWidth: "3px",
                borderColor: "rgb(33,88,116)"
              }}
            >
              <em>FreysSupport</em>
              <img
                className="img-fluid me-auto"
                src="assets/img/logo192.png"
                width={30}
                height={30}
                style={{
                  marginRight: "-1px",
                  marginLeft: "9px",
                  marginTop: "-2px"
                }}
              />
            </a>
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <span className="mx-auto navbar-text actions"> </span>
              <i
                className="fa fa-search"
                style={{
                  height: "16px",
                  margin: "7px"
                }}
              />
              <input
                type="search"
                name="recherche"
                placeholder="recherchez l'utilisateur"
              />
              <button
                className="btn btn-primary border rounded-pill"
                type="button"
                style={{
                  background: "rgb(33,88,116)"
                }}
              >
                Log out 
              </button>
            </div>
          </div>
        </nav>
        <section
          className="highlight-clean"
          style={{
            background: "rgb(33,88,116)",
            height: "588.188px"
          }}
        >
          <div className="container">
            <div className="intro">
              <h1
                className="text-center"
                style={{
                  color: "var(--bs-body-bg)"
                }}
              >
                <strong>
                  <em>My account</em>
                </strong>
              </h1>
            </div>
            <div className="buttons" />
          </div>
          <div className="container">
            <div
              className="row"
              style={{
                borderColor: "var(--bs-dark)"
              }}
            >
              <div
                className="col-md-6 col-lg-6 offset-lg-0"
                style={{
                  border: "1px solid var(--bs-body-bg)"
                }}
              >
                <div />
                <p
                  className="text-center"
                  style={{
                    color: "var(--bs-body-bg)"
                  }}
                >
                  <strong>
                    <em>Informations confidentielles</em>
                  </strong>
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)"
                  }}
                >
                  Nom : 
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)"
                  }}
                >
                  Prenom :
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)"
                  }}
                >
                  Classe :
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)"
                  }}
                >
                  Option 1 :
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)"
                  }}
                >
                  Option 2 :
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)"
                  }}
                >
                  Option 3 :
                </p>
              </div>
              <div
                className="col-md-6"
                style={{
                  border: "1px solid var(--bs-body-bg)"
                }}
              >
                <p
                  className="text-center"
                  style={{
                    color: "var(--bs-body-bg)"
                  }}
                >
                  <strong>
                    <em>Informations publiques</em>
                  </strong>
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)"
                  }}
                >
                  <br />
                  rem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolo
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              className="btn btn-primary"
              role="button"
              style={{
                marginTop: "96px",
                background: "var(--bs-light)",
                color: "var(--bs-body-color)"
              }}
            >
              Modifier
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default MyAccount;
