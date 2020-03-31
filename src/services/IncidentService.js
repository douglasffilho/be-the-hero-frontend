import api from "./api";

const IncidentService = {
    async findAllIncidentsByEmail(email, page, size) {
        try {
            const response = await api.get(
                `/incidents/${email}?page=${page}&size=${size}`
            );

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

    async deleteIncidentById(token, id) {
        try {
            const response = await api.delete(`/incidents/${id}`, {
                headers: {
                    Authorization: token,
                },
            });

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

    async createIncident(token, incident) {
        try {
            const response = await api.post(`/incidents`, incident, {
                headers: {
                    Authorization: token,
                },
            });

            return response.data;
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
};

export default IncidentService;
