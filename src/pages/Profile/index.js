import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2, FiArrowLeft, FiArrowRight } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import OngService from "../../services/OngService";
import IncidentService from "../../services/IncidentService";
import translations from "../../services/translations";

import "./styles.css";

const Profile = () => {
    const [ongData, setOngData] = useState({});
    const [incidents, setIncidents] = useState([]);
    const [page, setPage] = useState(1);

    const history = useHistory();

    const fetchOngName = useCallback(async () => {
        const token = localStorage.getItem("access_token");
        const ong = await OngService.fetchOngDataByEmail(token);

        if (!!ong.error) {
            localStorage.removeItem("access_token");

            alert(
                `Erro no serviço:\n${translations.translateError(ong.error)}`
            );

            return history.push("/");
        }

        setOngData(ong);
    }, [history]);

    const fetchOngIncidents = useCallback(async () => {
        const incidents = await IncidentService.findAllIncidentsByEmail(
            ongData.email,
            page,
            4
        );

        setIncidents(incidents || []);

        if (!incidents && page > 1) {
            setPage(page - 1);
        }
    }, [ongData.email, page]);

    useEffect(() => {
        const fetchOngData = async () => {
            await fetchOngName();
            await fetchOngIncidents();
        };

        fetchOngData();
    }, [fetchOngName, fetchOngIncidents]);

    const handleLogout = useCallback(() => {
        localStorage.removeItem("access_token");
        history.push("/");
    }, [history]);

    const handleDeleteIncident = useCallback(
        (key) => {
            return async () => {
                const token = localStorage.getItem("access_token");
                const incident = incidents[key];
                await IncidentService.deleteIncidentById(token, incident._id);

                fetchOngIncidents();
            };
        },
        [incidents, fetchOngIncidents]
    );

    const handlePreviousPage = useCallback(() => {
        setPage(page - 1 > 0 ? page - 1 : 1);
        fetchOngIncidents();
    }, [page, fetchOngIncidents]);

    const handleNextPage = useCallback(() => {
        setPage(page + 1);
        fetchOngIncidents();
    }, [page, fetchOngIncidents]);

    const renderIncident = (incident, key) => {
        return (
            <li key={key}>
                <strong>Caso:</strong>
                <p>{incident.title}</p>

                <strong>Descrição:</strong>
                <p>{incident.description}</p>

                <strong>Valor:</strong>
                <p>R$ {parseFloat(incident.value).toFixed(2)}</p>

                <button type="button" onClick={handleDeleteIncident(key)}>
                    <FiTrash2 />
                </button>
            </li>
        );
    };

    const renderIncidents = () => {
        return <ul>{(incidents || []).map(renderIncident)}</ul>;
    };

    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero Logo" />
                <span>Bem vinda, {ongData.name}</span>
                <Link to="/incidents/new" className="button">
                    Cadastrar novo caso
                </Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            {renderIncidents()}

            <div className="page-control">
                <ul>
                    <li className="back-link" onClick={handlePreviousPage}>
                        <FiArrowLeft />
                        Anterior
                    </li>

                    <li className="back-link">{page}</li>

                    <li className="back-link" onClick={handleNextPage}>
                        Próxima
                        <FiArrowRight />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
