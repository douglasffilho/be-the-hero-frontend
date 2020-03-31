import React, { useState, useEffect, useCallback } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./styles.css";

import logoImage from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";
import OngService from "../../services/OngService";
import translations from "../../services/translations";

const Logon = () => {
    const [id, setId] = useState("");

    const history = useHistory();

    const goToProfilePage = useCallback(() => {
        history.push("/profile");
    }, [history]);

    useEffect(() => {
        const detectIsLogged = () => {
            const token = localStorage.getItem("access_token");
            if (!!token) {
                goToProfilePage();
            }
        };

        detectIsLogged();
    }, [goToProfilePage]);

    const handleLogin = async (submitionEvent) => {
        submitionEvent.preventDefault();

        const token = await OngService.login(id);

        if (!!token.error) {
            return alert(
                `Erro no login, tente novamente:\n${translations.translateError(
                    token.error
                )}`
            );
        }

        localStorage.setItem("access_token", token);
        return history.push("/profile");
    };

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Imagem Logo Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        type="text"
                        placeholder="Sua ID/E-mail"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
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
