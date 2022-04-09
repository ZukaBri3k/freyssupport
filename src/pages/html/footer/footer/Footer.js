import React from "react";
import "./assets/css/Footer-Dark.css";
import "./assets/fonts/ionicons.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="text-center" style={{ marginTop: "50px" }}>
        <footer
          className="footer-dark"
          style={{
            background: "rgb(33,88,116)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Service</h3>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/freyssupport/">
                      Nous contacter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Informations</h3>
                <ul>
                  <li>
                    <a href="#">Projet</a>
                  </li>
                  <li>
                    <a href="#">Equipe</a>
                  </li>
                  <li>
                    <a href="#">Conditions d'utilisation</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>FreysSupport</h3>
                <p>
                  Site d'entraide visant à aider tous les lycéens en difficulté
                  scolaire à l'intérieure du Lycée Eugene Freyssinet
                </p>
              </div>
              <div className="col item social">
                <a href="https://www.instagram.com/freyssupport/">
                  <i className="icon ion-social-instagram" />
                </a>
              </div>
            </div>
            <p className="copyright">FreysSupport © 2022</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
