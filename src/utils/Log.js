import debug from "debug";
const log = debug("app");

class Log {
    constructor(namespace, infoLog, errorLog) {
        this._namespace = namespace;
        this._infoLog = infoLog;
        this._errorLog = errorLog;
    }

    info(message, ...args) {
        this._infoLog(`C=${this._namespace}, ${message}`, ...args);
    }

    error(message, ...args) {
        this._errorLog(`C=${this._namespace}, ${message}`, ...args);
    }
}

const init = (source) => {
    const errorLog = log.extend("error");
    const infoLog = log.extend("info");

    return new Log(source, infoLog, errorLog);
};

export default init;
