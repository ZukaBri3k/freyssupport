import React, { useState, useContext } from "react";
import { useRef } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./html/signin/assets/css/signin.css";
import "./html/signin/assets/bootstrap/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "./html/footer/footer/Footer";

export default function SignIn() {
  const { currentUser, signIn } = useContext(UserContext);
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();

  const inputs = useRef([]);
  const addInput = (el) => {
    if (el && !inputs.current.includes(el)) {
      //récupère tous les inputs
      inputs.current.push(el);
    }
  };

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    //console.log("PRIVATE", currentUser.email);

    try {
      const email = inputs.current[0].value;
      const pwd = inputs.current[1].value;
      const cred = await signIn(email, pwd); //attend une réponse de la requete signUp dans UserContext
      formRef.current.reset();
      //console.log(cred.user.email);
      navigate("/private/account/");
    } catch {
      setValidation("L'identifiant ou le mot de passe est incorrect");
    }
  };

  return (
    <>
      <NavBar />
      <section
        className="d-xl-flex align-items-xl-start register-photo"
        style={{
          background: "rgb(33,88,116)",
          marginBottom: "1px",
          marginRight: "0px",
          marginTop: "140px",
        }}
      >
        <div className="form-container">
          <form onSubmit={handleForm} ref={formRef}>
            <h2 className="text-center d-xl-flex justify-content-xl-center">
              <strong>Connectez vous à votre compte</strong>
            </h2>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                ref={addInput}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                ref={addInput}
                required
              />
            </div>
            <p className="text-danger mt-1">{validation}</p>
            <div className="mb-3">
              <button
                className="btn btn-primary d-block w-100"
                type="submit"
                style={{
                  background: "rgb(33,88,116)",
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
      <Footer />
    </>
  );
}
