const errorTranslations = {
    "ong-repository-error-enter-name": "Defina o nome da ONG",
    "ong-repository-error-enter-email": "Defina e-mail da ONG",
    "ong-repository-error-enter-whatsapp": "Defina o whatsapp da ONG",
    "ong-repository-error-enter-city": "Defina a cidade da ONG",
    "ong-repository-error-enter-estate": "Defina o estado da ONG",
    "ong-service-not-authorized": "ONG não permitida",
    "incident-repository-error-enter-description":
        "Defina a descrição do incidente",
    "incident-repository-error-enter-title": "Defina o título do incidente",
    "incident-repository-error-enter-value":
        "Defina um valor válido para o incidente",
    "system-service-unavailable": "Sistema indisponível, tente mais tarde.",
};

const translations = {
    translateErrors(errors) {
        delete errors.status;
        return Object.keys(errors)
            .map((key) => {
                return `${errorTranslations[errors[key].message]}`;
            })
            .join("\n");
    },

    translateError(error) {
        delete error.status;
        return Object.keys(error)
            .map((key) => {
                return `${errorTranslations[error[key]]}`;
            })
            .join("\n");
    },
};

export default translations;
