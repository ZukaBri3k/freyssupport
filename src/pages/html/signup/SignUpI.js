import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <section
        className="register-photo"
        style={{
          background: "rgb(33,88,116)"
        }}
      >
        <div className="form-container">
          <form method="post">
            <h2 className="text-center">
              <strong>Create</strong> an account.
            </h2>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password-repeat"
                placeholder="Password (repeat)"
              />
            </div>
            <div
              style={{
                marginBottom: "16px"
              }}
            >
              <input
                className="form-control ms-auto"
                type="text"
                name="Name"
                placeholder="Nom"
              />
            </div>
            <div>
              <input
                className="form-control mt-auto"
                type="text"
                name="Prenom"
                placeholder="Prenom"
                style={{
                  marginTop: "0px"
                }}
              />
            </div>
            <div />
            <div className="align-content-center mb-3">
              <div className="dropdown d-xl-flex justify-content-xl-center align-items-xl-center">
                <button
                  className="btn btn-primary dropdown-toggle"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  type="button"
                  style={{
                    background: "rgb(33,88,116)"
                  }}
                >
                  Classe
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Seconde 
                  </a>
                  <a className="dropdown-item" href="#">
                    Premiere
                  </a>
                  <a className="dropdown-item" href="#">
                    Terminale
                  </a>
                </div>
              </div>
            </div>
            <div className="d-xl-flex justify-content-xl-center align-items-xl-center">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle d-flex d-xl-flex"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  type="button"
                  style={{
                    background: "rgb(33,88,116)",
                    marginRight: "70px"
                  }}
                >
                  Option 1
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Philo
                  </a>
                  <a className="dropdown-item" href="#">
                    LLCE
                  </a>
                  <a className="dropdown-item" href="#">
                    HGGSP
                  </a>
                  <a className="dropdown-item" href="#">
                    SES
                  </a>
                  <a className="dropdown-item" href="#">
                    NSI
                  </a>
                  <a className="dropdown-item" href="#">
                    Math
                  </a>
                  <a className="dropdown-item" href="#">
                    Physique
                  </a>
                  <a className="dropdown-item" href="#">
                    SVT
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle d-xl-flex"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  type="button"
                  style={{
                    background: "rgb(33,88,116)",
                    marginRight: "70px"
                  }}
                >
                  Option 2
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Philo
                  </a>
                  <a className="dropdown-item" href="#">
                    LLCE
                  </a>
                  <a className="dropdown-item" href="#">
                    HGGSP
                  </a>
                  <a className="dropdown-item" href="#">
                    SES
                  </a>
                  <a className="dropdown-item" href="#">
                    NSI
                  </a>
                  <a className="dropdown-item" href="#">
                    Math
                  </a>
                  <a className="dropdown-item" href="#">
                    Physique
                  </a>
                  <a className="dropdown-item" href="#">
                    SVT
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle d-xl-flex"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  type="button"
                  style={{
                    background: "rgb(33,88,116)"
                  }}
                >
                  Option 3
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Philo
                  </a>
                  <a className="dropdown-item" href="#">
                    LLCE
                  </a>
                  <a className="dropdown-item" href="#">
                    HGGSP
                  </a>
                  <a className="dropdown-item" href="#">
                    SES
                  </a>
                  <a className="dropdown-item" href="#">
                    NSI
                  </a>
                  <a className="dropdown-item" href="#">
                    Math
                  </a>
                  <a className="dropdown-item" href="#">
                    Physique
                  </a>
                  <a className="dropdown-item" href="#">
                    SVT
                  </a>
                </div>
              </div>
            </div>
            <div
              className="form-check"
              style={{
                marginTop: "50px"
              }}
            >
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />I agree to
                the license terms.
              </label>
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary d-block w-100"
                type="submit"
                style={{
                  background: "rgb(33,88,116)"
                }}
              >
                Sign Up
              </button>
            </div>
            <a className="already" href="#">
              You already have an account? Login here.
            </a>
          </form>
        </div>
      </section>
    );
  }
}

export default SignUp;
