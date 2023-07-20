import "./LoginAdmin.css";
import Button from "../button/button";
import Input from "../formInput/formInput";
import CheckboxLine from "../checkBox/checkBox";
import logo from "../../assets/logo-title.png";
import gradientLogo from "../../assets/rugby-petit.svg";
import React from "react";

function Login() {
  return (
    <div className="app">
      <div className="white-section">
        <div className="centered-content">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="background">
        <img src={gradientLogo} alt="Nouveau logo" className="gradientLogo" />
        <div className="content">
          <h1>Content de vous revoir</h1>
          <p>
            Vous êtes accrédités média ? <br />
            <a href="/" target="_blank" className="subscribe">
              Accès au panel média
            </a>
          </p>
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
            <a href="/admin/" target="_blank" className="welcomePage">
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
