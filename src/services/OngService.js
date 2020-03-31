import api from "./api";

const OngService = {
    async register(ong) {
        try {
            const response = await api.post("/ongs", ong);
            return { data: response.data };
        } catch (error) {
            if (!error.response || !error.response.status) {
                return {
                    error: {
                        syserror: {
                            message: "system-service-unavailable",
                        },
                    },
                };
            }

            const errors = error.response.data.error.errors;
            console.error(errors);
            return { error: errors };
        }
    },

    async login(id) {
        try {
            const response = await api.post(
                "/ongs/login",
                {},
                {
                    headers: { Authorization: id },
                }
            );

            return response.data.token;
        } catch (error) {
            if (!error.response || !error.response.status) {
                return {
                    error: {
                        syserror: "system-service-unavailable",
                    },
                };
            }

            const errors = error.response.data;
            console.error(errors);
            return { error: errors };
        }
    },

    async fetchOngDataByEmail(email) {
        try {
            const response = await api.get(`/ongs/${email}`);

            return response.data;
        } catch (error) {
            if (!error.response || !error.response.status) {
                return {
                    error: {
                        syserror: "system-service-unavailable",
                    },
                };
            }

            const errors = error.response.data;
            console.error(errors);
            return { error: errors };
        }
    },
};

export default OngService;
