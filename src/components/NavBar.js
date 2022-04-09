import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logoFreyss from "../pages/html/navbar/assets/img/logoFreyss.png";
import logoInsta from "../pages/html/navbar/assets/img/logoInsta.png";
import logo192 from "../pages/html/navbar/assets/img/logo192.png";
import "../pages/html/navbar/assets/css/NavigationWithButton.css";
import "../pages/html/navbar/assets/fonts/font-awesome.min.css";

export default function NavBar() {
  const navigate = useNavigate();
  let [navbar, setNavBar] = useState();
  const { currentUser } = useContext(UserContext);

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/redirect");
    } catch {
      alert("For some reasons we can't deconnect you from your account");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      if (currentUser == null) {
        setNavBar(
          <div
            style={{
              margin: "2px",
            }}
          >
            <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button">
              <div className="container">
                <a href="https://www.lycee-freyssinet.fr">
                  <img
                    src={logoFreyss}
                    width={70}
                    height={30}
                    style={{
                      marginLeft: "-4px",
                    }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/freyssupport/"
                  style={{
                    marginRight: "4px",
                    marginLeft: "9px",
                  }}
                >
                  <img src={logoInsta} width={30} height={30} />
                </a>

                <div
                  style={{
                    border: "2px solid rgb(33, 88, 116)",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    className="img-fluid me-2"
                    src={logo192}
                    width={30}
                    height={30}
                    style={{
                      marginRight: "0px",
                      marginLeft: "20px",
                    }}
                  />

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
                </div>
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
                    Se connecter
                  </a>
                  <a
                    className="btn btn-primary border rounded-pill"
                    role="button"
                    style={{
                      background: "rgb(33,88,116)",
                    }}
                    href="/signup"
                  >
                    S'inscrire
                  </a>
                </div>
              </div>
            </nav>
          </div>
        );
      } else {
        setNavBar(
          <div
            style={{
              margin: "2px",
            }}
          >
            <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button">
              <div className="container">
                <a href="https://www.lycee-freyssinet.fr">
                  <img
                    src={logoFreyss}
                    width={70}
                    height={30}
                    style={{
                      marginLeft: "-4px",
                    }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/freyssupport/"
                  style={{
                    marginRight: "4px",
                    marginLeft: "9px",
                  }}
                >
                  <img src={logoInsta} width={30} height={30} />
                </a>

                <div
                  style={{
                    border: "2px solid rgb(33, 88, 116)",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    className="img-fluid me-2"
                    src={logo192}
                    width={30}
                    height={30}
                    style={{
                      marginRight: "0px",
                      marginLeft: "20px",
                    }}
                  />

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
                </div>
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
                    href="/private/research"
                    style={{
                      background: "rgb(33,88,116)",
                    }}
                  >
                    Rechercher de l'aide
                  </a>
                  <a
                    className="btn btn-primary border rounded-pill action-button"
                    role="button"
                    href="/private/account"
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
                    onClick={logOut}
                  >
                    Se déconnecter
                  </a>
                </div>
              </div>
            </nav>
          </div>
        );
      }
    });
  }, []);

  return <div>{navbar}</div>;
}
