import React, { useState, useContext } from "react";
import { useRef } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore";
import "./html/signup/assets/css/signUpStyle.css";
import "./html/signup/assets/bootstrap/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "./html/footer/footer/Footer";

export default function SignUp() {
  const { signUp } = useContext(UserContext);
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();
  const [classe, setClass] = useState("Classe");
  const [option1, setOption1] = useState("Option 1");
  const [option2, setOption2] = useState("Option 2");
  const [option3, setOption3] = useState("Option 3");
  const [optionValidation, setOptionValidation] = useState("");
  const [disableOption1, setDisableOption1] = useState(true);
  const [disableOption2, setDisableOption2] = useState(true);
  const [disableOption3, setDisableOption3] = useState(true);
  const [hiddenLink, setHiddenLink] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [currentLinkUse, setCurrentLinkUse] = useState([null, null, null]);

  const inputs = useRef([]);
  const addInput = (el) => {
    if (el && !inputs.current.includes(el)) {
      //récupère tous les inputs
      inputs.current.push(el);
    }
  };

  const dataPerso = useRef([]);
  const addDataPerso = (el) => {
    if (el && !dataPerso.current.includes(el)) {
      //récupère tous les inputs
      dataPerso.current.push(el);
    }
  };

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    //console.log(inputs.current[2].value);

    if (inputs.current[1].value.length < 6) {
      setValidation("6 characters minimum");
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Les mots de passe ne sont pas identiques");
      return;
    } else if (
      classe === "Classe" ||
      (classe === "Premiere" && option1 === "Option 1") ||
      (classe === "Premiere" && option2 === "Option 2") ||
      (classe === "Premiere" && option3 === "Option 3") ||
      (classe === "Terminale" && option1 === "Option 1") ||
      (classe === "Terminale" && option2 === "Option 2")
    ) {
      setOptionValidation("Veuillez remplir tous les champs");
      return;
    }

    //console.log("PRIVATE", currentUser.email);

    try {
      const email = inputs.current[0].value;
      const pwd = inputs.current[1].value;
      const cred = await signUp(email, pwd); //attend une réponse de la requete signUp dans UserContext
      //console.log(cred.user.email);

      const addUser = async () => {
        try {
          if (classe === "Seconde") {
            await setDoc(doc(db, "users", cred.user.email), {
              name: dataPerso.current[0].value.toUpperCase(),
              surName: dataPerso.current[1].value.toUpperCase(),
              mail: email,
              classe: classe,
              hiddenLink: hiddenLink,
            });
          } else if (classe === "Premiere") {
            await setDoc(doc(db, "users", cred.user.email), {
              name: dataPerso.current[0].value.toUpperCase(),
              surName: dataPerso.current[1].value.toUpperCase(),
              mail: email,
              classe: classe,
              option1: option1,
              option2: option2,
              option3: option3,
              hiddenLink: hiddenLink,
            });
          } else if (classe === "Terminale") {
            await setDoc(doc(db, "users", cred.user.email), {
              name: dataPerso.current[0].value.toUpperCase(),
              surName: dataPerso.current[1].value.toUpperCase(),
              mail: email,
              classe: classe,
              option1: option1,
              option2: option2,
              hiddenLink: hiddenLink,
            });
          }
        } catch (e) {
          //console.log(e)
        }
      };
      await addUser();
      formRef.current.reset();
      navigate("/private/account/");
    } catch (e) {
      //console.log(e);
      if (e.code === "auth/email-already-in-use") {
        setOptionValidation("Cet email est déjà utilisé");
      }
    }
  };

  return (
    <>
      <NavBar />
      <section
        className="register-photo"
        style={{
          background: "rgb(33,88,116)",
        }}
      >
        <div className="form-container">
          <form ref={formRef} onSubmit={handleForm}>
            <h2 className="text-center">
              <strong>Créer</strong> votre compte.
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
                placeholder="Mot de passe"
                ref={addInput}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password-repeat"
                placeholder="Mot de passe (vérifier)"
                ref={addInput}
                required
              />
            </div>
            <p className="text-danger mt-1">{validation}</p>
            <div
              style={{
                marginBottom: "16px",
              }}
            >
              <input
                className="form-control ms-auto"
                type="text"
                name="Name"
                placeholder="Nom"
                ref={addDataPerso}
              />
            </div>
            <div>
              <input
                className="form-control mt-auto"
                type="text"
                name="Prenom"
                placeholder="Prénom"
                ref={addDataPerso}
                style={{
                  marginTop: "0px",
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
                    background: "rgb(33,88,116)",
                  }}
                >
                  {classe}
                </button>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setClass("Seconde");
                      setDisableOption1(true);
                      setDisableOption2(true);
                      setDisableOption3(true);
                      setOption1("Option 1");
                      setOption2("Option 2");
                      setOption3("Option 3");
                      setCurrentLinkUse([null, null, null]);
                      setHiddenLink([
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                      ]);
                    }}
                  >
                    Seconde 
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setClass("Premiere");
                      setDisableOption1(false);
                      setDisableOption2(false);
                      setDisableOption3(false);
                    }}
                  >
                    Premiere
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setClass("Terminale");
                      setDisableOption1(false);
                      setDisableOption2(false);
                      setDisableOption3(true);
                      setOption3("Option 3");
                      hiddenLink[currentLinkUse[2]] = false;
                      currentLinkUse[2] = null;
                    }}
                  >
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
                    marginRight: "70px",
                  }}
                  disabled={disableOption1}
                >
                  {option1}
                </button>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption1("Philo");
                      hiddenLink[0] = true;
                      hiddenLink[currentLinkUse[0]] = false;
                      currentLinkUse[0] = 0;
                    }}
                    hidden={hiddenLink[0]}
                  >
                    Philo
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption1("LLCE");
                      hiddenLink[1] = true;
                      hiddenLink[currentLinkUse[0]] = false;
                      currentLinkUse[0] = 1;
                    }}
                    hidden={hiddenLink[1]}
                  >
                    LLCE
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption1("HGGSP");
                      hiddenLink[2] = true;
                      hiddenLink[currentLinkUse[0]] = false;
                      currentLinkUse[0] = 2;
                    }}
                    hidden={hiddenLink[2]}
                  >
                    HGGSP
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption1("SES");
                      hiddenLink[3] = true;
                      hiddenLink[currentLinkUse[0]] = false;
                      currentLinkUse[0] = 3;
                    }}
                    hidden={hiddenLink[3]}
                  >
                    SES
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption1("NSI");
                      hiddenLink[4] = true;
                      hiddenLink[currentLinkUse[0]] = false;
                      currentLinkUse[0] = 4;
                    }}
                    hidden={hiddenLink[4]}
                  >
                    NSI
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption1("Maths");
                      hiddenLink[5] = true;
                      hiddenLink[currentLinkUse[0]] = false;
                      currentLinkUse[0] = 5;
                    }}
                    hidden={hiddenLink[5]}
                  >
                    Maths
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption1("Physique");
                      hiddenLink[6] = true;
                      hiddenLink[currentLinkUse[0]] = false;
                      currentLinkUse[0] = 6;
                    }}
                    hidden={hiddenLink[6]}
                  >
                    Physique
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption1("SVT");
                      hiddenLink[7] = true;
                      hiddenLink[currentLinkUse[0]] = false;
                      currentLinkUse[0] = 7;
                    }}
                    hidden={hiddenLink[7]}
                  >
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
                    marginRight: "70px",
                  }}
                  disabled={disableOption2}
                >
                  {option2}
                </button>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption2("Philo");
                      hiddenLink[0] = true;
                      hiddenLink[currentLinkUse[1]] = false;
                      currentLinkUse[1] = 0;
                    }}
                    hidden={hiddenLink[0]}
                  >
                    Philo
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption2("LLCE");
                      hiddenLink[1] = true;
                      hiddenLink[currentLinkUse[1]] = false;
                      currentLinkUse[1] = 1;
                    }}
                    hidden={hiddenLink[1]}
                  >
                    LLCE
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption2("HGGSP");
                      hiddenLink[2] = true;
                      hiddenLink[currentLinkUse[1]] = false;
                      currentLinkUse[1] = 2;
                    }}
                    hidden={hiddenLink[2]}
                  >
                    HGGSP
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption2("SES");
                      hiddenLink[3] = true;
                      hiddenLink[currentLinkUse[1]] = false;
                      currentLinkUse[1] = 3;
                    }}
                    hidden={hiddenLink[3]}
                  >
                    SES
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption2("NSI");
                      hiddenLink[4] = true;
                      hiddenLink[currentLinkUse[1]] = false;
                      currentLinkUse[1] = 4;
                    }}
                    hidden={hiddenLink[4]}
                  >
                    NSI
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption2("Maths");
                      hiddenLink[5] = true;
                      hiddenLink[currentLinkUse[1]] = false;
                      currentLinkUse[1] = 5;
                    }}
                    hidden={hiddenLink[5]}
                  >
                    Maths
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption2("Physique");
                      hiddenLink[6] = true;
                      hiddenLink[currentLinkUse[1]] = false;
                      currentLinkUse[1] = 6;
                    }}
                    hidden={hiddenLink[6]}
                  >
                    Physique
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption2("SVT");
                      hiddenLink[7] = true;
                      hiddenLink[currentLinkUse[1]] = false;
                      currentLinkUse[1] = 7;
                    }}
                    hidden={hiddenLink[7]}
                  >
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
                  }}
                  disabled={disableOption3}
                >
                  {option3}
                </button>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption3("Philo");
                      hiddenLink[0] = true;
                      hiddenLink[currentLinkUse[2]] = false;
                      currentLinkUse[2] = 0;
                    }}
                    hidden={hiddenLink[0]}
                  >
                    Philo
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption3("LLCE");
                      hiddenLink[1] = true;
                      hiddenLink[currentLinkUse[2]] = false;
                      currentLinkUse[2] = 1;
                    }}
                    hidden={hiddenLink[1]}
                  >
                    LLCE
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption3("HGGSP");
                      hiddenLink[2] = true;
                      hiddenLink[currentLinkUse[2]] = false;
                      currentLinkUse[2] = 2;
                    }}
                    hidden={hiddenLink[2]}
                  >
                    HGGSP
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption3("SES");
                      hiddenLink[3] = true;
                      hiddenLink[currentLinkUse[2]] = false;
                      currentLinkUse[2] = 3;
                    }}
                    hidden={hiddenLink[3]}
                  >
                    SES
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption3("NSI");
                      hiddenLink[4] = true;
                      hiddenLink[currentLinkUse[2]] = false;
                      currentLinkUse[2] = 4;
                    }}
                    hidden={hiddenLink[4]}
                  >
                    NSI
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption3("Maths");
                      hiddenLink[5] = true;
                      hiddenLink[currentLinkUse[2]] = false;
                      currentLinkUse[2] = 5;
                    }}
                    hidden={hiddenLink[5]}
                  >
                    Maths
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption3("Physique");
                      hiddenLink[6] = true;
                      hiddenLink[currentLinkUse[2]] = false;
                      currentLinkUse[2] = 6;
                    }}
                    hidden={hiddenLink[6]}
                  >
                    Physique
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setOption3("SVT");
                      hiddenLink[7] = true;
                      hiddenLink[currentLinkUse[2]] = false;
                      currentLinkUse[2] = 7;
                    }}
                    hidden={hiddenLink[7]}
                  >
                    SVT
                  </a>
                </div>
              </div>
            </div>
            <p className="text-danger mt-1">{optionValidation}</p>
            <div
              className="form-check"
              style={{
                marginTop: "50px",
              }}
            >
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" required />
                J'accepte les règles d'utilisateur
              </label>
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary d-block w-100"
                type="submit"
                style={{
                  background: "rgb(33,88,116)",
                }}
              >
                Créer mon compte
              </button>
            </div>
            <a className="already" href="/signin">
              Vous avez déjà un compte connectez-vous <strong>ici</strong> !
            </a>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
