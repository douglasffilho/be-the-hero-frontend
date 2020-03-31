import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import OngService from "../../services/OngService";
import translations from "../../services/translations";

import "./styles.css";

import logo from "../../assets/logo.svg";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [estate, setEstate] = useState("");

    const history = useHistory();

    const register = async (submitionEvent) => {
        submitionEvent.preventDefault();

        const ong = { name, email, whatsapp, city, estate };

        const registred = await OngService.register(ong);

        if (!!registred.error) {
            return alert(
                `Erro no cadastro, tente novamente:\n${translations.translateErrors(
                    registred.error
                )}`
            );
        }

        alert("Cadastro efetuado com êxito.");
        return history.push("/");
    };

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
                <form onSubmit={register}>
                    <input
                        placeholder="Nome da ONG"
                        autoComplete="no"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        autoComplete="no"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Whatsapp"
                        autoComplete="no"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            autoComplete="no"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF"
                            maxLength={2}
                            style={{
                                width: "5rem",
                                textTransform: "uppercase",
                            }}
                            autoComplete="no"
                            value={estate}
                            onChange={(e) => setEstate(e.target.value)}
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
