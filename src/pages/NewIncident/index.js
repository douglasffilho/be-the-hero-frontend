import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logo from "../../assets/logo.svg";

const NewIncident = () => {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero Logo" />
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói
                        pra resolver isso.
                    </p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft />
                        <p>Voltar aos casos</p>
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do caso" autoComplete="no" />
                    <textarea placeholder="Descrição" autoComplete="no" />
                    <input placeholder="Valor em reais" autoComplete="no" />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewIncident;
