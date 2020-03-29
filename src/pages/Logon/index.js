import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

import logoImage from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";

const Logon = () => {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Imagem Logo Be The Hero" />
                <form>
                    <h1>Faça seu logon</h1>
                    <input type="text" placeholder="Sua ID" />
                    <button className="button" type="submit">
                        Entrar
                    </button>
                </form>
                <Link to="/register" className="back-link">
                    <FiLogIn />
                    <p>Não tenho cadastro</p>
                </Link>
            </section>
            <img
                src={heroesImage}
                alt="Imagem com pessoas abraçadas representando heróis"
            />
        </div>
    );
};

export default Logon;
