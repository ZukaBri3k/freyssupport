import React, { useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import { useContext, useState } from "react";
import { db } from "../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import "../../html/My_account/assets/css/HighlightClean.css";
import Footer from "../../html/footer/footer/Footer";

export default function AccountHome() {
  const { currentUser } = useContext(UserContext);
  let [infoPerso, setInfoPerso] = useState({});
  const navigate = useNavigate();

  const readResult = async () => {
    const docRef = doc(db, "users", currentUser.email);
    const docSnap = await getDoc(docRef);
    //console.log(docSnap.data());
    if (docSnap.data().classe === "Seconde") {
      const docRef = doc(db, "users", currentUser.email);
      const docSnap = await getDoc(docRef);
      setInfoPerso({
        mail: docSnap.data().mail,
        surName: docSnap.data().surName,
        name: docSnap.data().name,
        classe: docSnap.data().classe,
      });
    } else if (docSnap.data().classe === "Premiere") {
      const docRef = doc(db, "users", currentUser.email);
      const docSnap = await getDoc(docRef);
      setInfoPerso({
        mail: docSnap.data().mail,
        surName: docSnap.data().surName,
        name: docSnap.data().name,
        classe: docSnap.data().classe,
        option1: docSnap.data().option1,
        option2: docSnap.data().option2,
        option3: docSnap.data().option3,
      });
    } else if (docSnap.data().classe === "Terminale") {
      const docRef = doc(db, "users", currentUser.email);
      const docSnap = await getDoc(docRef);
      setInfoPerso({
        mail: docSnap.data().mail,
        surName: docSnap.data().surName,
        name: docSnap.data().name,
        classe: docSnap.data().classe,
        option1: docSnap.data().option1,
        option2: docSnap.data().option2,
      });
    }
  };
  useEffect(() => {
    readResult();
  }, []);

  return (
    <>
      <NavBar />
      <div
        style={{
          background: "var(--bs-body-bg)",
          marginLeft: "0px",
        }}
      >
        <section
          className="highlight-clean"
          style={{
            background: "rgb(33,88,116)",
            height: "588.188px",
          }}
        >
          <div className="container">
            <div className="intro">
              <h1
                className="text-center"
                style={{
                  color: "var(--bs-body-bg)",
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
                borderColor: "var(--bs-dark)",
              }}
            >
              <div
                className="col-md-6 col-lg-6 offset-lg-0"
                style={{
                  border: "1px solid var(--bs-body-bg)",
                }}
              >
                <div />
                <p
                  className="text-center"
                  style={{
                    color: "var(--bs-body-bg)",
                  }}
                >
                  <strong>
                    <em>Informations confidentielles</em>
                  </strong>
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)",
                  }}
                >
                  Nom : {infoPerso.name}
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)",
                  }}
                >
                  Prenom : {infoPerso.surName}
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)",
                  }}
                >
                  Classe : {infoPerso.classe}
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)",
                  }}
                >
                  {infoPerso.classe === "Seconde" ? "" : "Vos options : "}{" "}
                  {infoPerso.option1}{" "}
                  {infoPerso.classe === "Seconde" ? "" : ", "}{" "}
                  {infoPerso.option2}{" "}
                  {infoPerso.classe === "Premiere" ? ", " : ""}{" "}
                  {infoPerso.option3}
                </p>
              </div>
              <div
                className="col-md-6"
                style={{
                  border: "1px solid var(--bs-body-bg)",
                }}
              >
                <p
                  className="text-center"
                  style={{
                    color: "var(--bs-body-bg)",
                  }}
                >
                  <strong>
                    <em>Informations publiques</em>
                  </strong>
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)",
                  }}
                >
                  Votre mail pourra être affiché lors de recherche d'aide
                </p>
                <p
                  style={{
                    color: "var(--bs-body-bg)",
                  }}
                >
                  Votre mail : {infoPerso.mail}
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
                color: "var(--bs-body-color)",
              }}
              onClick={() => {
                navigate("/private/account/modify");
              }}
            >
              Modifier
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
