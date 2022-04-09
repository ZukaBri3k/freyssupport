import React from "react";

class SignInI extends React.Component {
  render() {
    return (
      <section
        className="d-xl-flex align-items-xl-start register-photo"
        style={{
          background: "rgb(33,88,116)",
          marginBottom: "1px",
          marginRight: "0px",
          marginTop: "140px"
        }}
      >
        <div className="form-container">
          <form method="post">
            <h2 className="text-center d-xl-flex justify-content-xl-center">
              <strong>Connectez vous à votre compte</strong>
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
            <div className="mb-3" />
            <div className="mb-3" />
            <div className="mb-3">
              <button
                className="btn btn-primary d-block w-100"
                type="submit"
                style={{
                  background: "rgb(33,88,116)"
                }}
              >
                Se connecter 
              </button>
            </div>
            <a className="already" href="/signup">
              Vous n'avez pas de compte ? Créez en un maintenant !
            </a>
          </form>
        </div>
      </section>
    );
  }
}

export default SignInI;
