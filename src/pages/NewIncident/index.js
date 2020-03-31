import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import IncidentService from "../../services/IncidentService";
import translations from "../../services/translations";

import logo from "../../assets/logo.svg";
import "./styles.css";

const NewIncident = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const history = useHistory();

    const handleTitleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
    };

    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
    };

    const handleValueChange = (event) => {
        const value = event.target.value;
        setValue(value);
    };

    const registerIncident = async (submitionEvent) => {
        submitionEvent.preventDefault();

        const token = localStorage.getItem("access_token");
        const incident = { title, description, value };

        const created = await IncidentService.createIncident(token, incident);

        if (!!created.error) {
            return alert(
                `Erro no cadastro, tente novamente:\n${translations.translateErrors(
                    created.error
                )}`
            );
        }

        alert("Cadastrado com êxito.");
        return history.push("/profile");
    };

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
                <form onSubmit={registerIncident}>
                    <input
                        placeholder="Título do caso"
                        autoComplete="no"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <textarea
                        placeholder="Descrição"
                        autoComplete="no"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <input
                        placeholder="Valor em reais (ex.: 120.00)"
                        autoComplete="no"
                        value={value}
                        onChange={handleValueChange}
                    />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewIncident;
