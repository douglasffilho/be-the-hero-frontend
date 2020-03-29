import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logo from "../../assets/logo.svg";

const Register = () => {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero Logo" />
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a
                        encontrarem os casos da sua ONG.
                    </p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft />
                        <p>Já sou cadastrado</p>
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome da ONG" autoComplete="no" />
                    <input
                        type="email"
                        placeholder="E-mail"
                        autoComplete="no"
                    />
                    <input placeholder="Whatsapp" autoComplete="no" />

                    <div className="input-group">
                        <input placeholder="Cidade" autoComplete="no" />
                        <input
                            placeholder="UF"
                            maxLength={2}
                            style={{
                                width: "5rem",
                                textTransform: "uppercase",
                            }}
                            autoComplete="no"
                        />
                    </div>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
