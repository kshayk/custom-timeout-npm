"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hours = exports.minutes = exports.seconds = exports.milliseconds = void 0;
const runTimeout = (delay) => {
    return new Promise((resolve, reject) => {
        // create timeout
        const timeout = setTimeout(() => {
            // clear timeout
            clearTimeout(timeout);
            // resolve promise
            resolve();
        }, delay);
    });
};
const milliseconds = async (milliseconds) => await runTimeout(milliseconds);
exports.milliseconds = milliseconds;
const seconds = async (seconds) => await (0, exports.milliseconds)(seconds * 1000);
exports.seconds = seconds;
const minutes = async (minutes) => await (0, exports.seconds)(minutes * 60);
exports.minutes = minutes;
const hours = async (hours) => await (0, exports.minutes)(hours * 60);
exports.hours = hours;
