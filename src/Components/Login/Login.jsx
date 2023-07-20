import "./Login.css";
import Button from "../button/button";
import Input from "../formInput/formInput";
import CheckboxLine from "../checkBox/checkBox";
import logo from "../../assets/logo-title.png";
import gradientLogo from "../../assets/rugby-petit.svg";
import appleLogo from "../../assets/appleWhiteLogo.svg";
import facebookLogo from "../../assets/facebookLogo.svg";
import googleLogo from "../../assets/googleLogo.svg";
import React from "react";

function Login() {
  return (
    <div className="app">
      <div className="white-section">
        <div className="centered-content">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="gradient-section">
        <img src={gradientLogo} alt="Nouveau logo" className="gradientLogo" />
        <div className="content">
          <h1>Content de vous revoir</h1>
          <p>
            Vous êtes un Responsable RP ? <br />
            <a href="/back-office" target="_blank" className="subscribe">
              Accédez au Panel Admin
            </a>
          </p>
          <h3 className="h3">Connectez-vous à l'aide de votre réseau social</h3>
          <div className="button-wrapper">
            <Button
              text="Rejoignez-nous Apple"
              logoSrc={appleLogo}
              className="button"
              backgroundColor="#000"
              color="#ffffff"
            />
            <Button
              text="Rejoignez-nous Facebook"
              logoSrc={facebookLogo}
              className="button"
              backgroundColor="#1877F2"
              color="#ffffff"
            />
            <Button
              text="Rejoignez-nous Google"
              logoSrc={googleLogo}
              className="button"
              backgroundColor="#FFF"
              color="#000"
            />
          </div>
          <div className="line-with-text">
            <hr className="line" />
            <span className="text">ou</span>
            <hr className="line" />
          </div>
          <div className="connexionForm">
            <Input
              title="Nom d’utilisateur ou e-mail"
              placeholder="exemple@mail.com"
            />
            <Input title="Mot de passe" placeholder="Mot de passe" />
            <CheckboxLine
              texte="Se souvenir de moi"
              forgot="Mot de passe oublié?"
            ></CheckboxLine>
            <a
              href="/visitors/welcomePage"
              target="_blank"
              className="welcomePage"
            >
              <Button
                text="Connexion"
                logoSrc=""
                className="button"
                backgroundColor="#5BAB2C"
                color="#fff"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
