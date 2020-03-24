import configSpec from "./config.json";

const Config = () => {
    return configSpec[process.env.REACT_APP_ENV];
};

export default Config();
