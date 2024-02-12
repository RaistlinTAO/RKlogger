"use strict"

function getStack() {
    if (process.env.PRINT_STACK_DETAIL ? process.env.PRINT_STACK_DETAIL.toUpperCase() === 'TRUE' : true) {
        console.log(new Error().stack.split('\n')[3]);
    }
}

/**
 * Print General Message
 * @param message
 */
const printGeneral = (message) => {
    console.log(new Date().toLocaleString(process.env.CONSOLE_LOCALE || 'en-US', {timeZone: process.env.CONSOLE_TIMEZONE || 'UTC'}) + ' [GENE] ' + '\x1b[34m%s\x1b[0m', message);
    getStack();
};

/**
 * Print Info Message
 * @param message
 */
const printInfo = (message) => {
    console.log(new Date().toLocaleString(process.env.CONSOLE_LOCALE || 'en-US', {timeZone: process.env.CONSOLE_TIMEZONE || 'UTC'}) + ' [INFO] ' + '\x1b[36m%s\x1b[0m', message);
    getStack();
};

/**
 * Print Trace Message
 * @param message
 */
const printTrace = (message) => {
    console.log(new Date().toLocaleString(process.env.CONSOLE_LOCALE || 'en-US', {timeZone: process.env.CONSOLE_TIMEZONE || 'UTC'}) + ' [TRAC] ' + '\x1b[37m%s\x1b[0m', message);
    getStack();
};

/**
 * Print Debug Message
 * @param message
 */
const printDebug = (message) => {
    if (process.env.PRINT_DEBUG ? process.env.PRINT_DEBUG.toUpperCase() === 'TRUE' : true) {
        console.log(new Date().toLocaleString(process.env.CONSOLE_LOCALE || 'en-US', {timeZone: process.env.CONSOLE_TIMEZONE || 'UTC'}) + ' [DEBG] ' + '\x1b[32m%s\x1b[0m', message);
    }
    getStack();
};

/**
 * Print Warning Message
 * @param message
 */
const printWarning = (message) => {
    console.log(new Date().toLocaleString(process.env.CONSOLE_LOCALE || 'en-US', {timeZone: process.env.CONSOLE_TIMEZONE || 'UTC'}) + ' [WARN] ' + '\x1b[35m%s\x1b[0m', message);
    getStack();
};

/**
 * Print Error Message
 * @param message
 */
const printError = (message) => {
    console.log(new Date().toLocaleString(process.env.CONSOLE_LOCALE || 'en-US', {timeZone: process.env.CONSOLE_TIMEZONE || 'UTC'}) + ' [ERRO] ' + '\x1b[31m%s\x1b[0m', message);
    getStack();
};

/**
 * Print Fatal Message
 * @param message
 */
const printFatal = (message) => {
    console.log(new Date().toLocaleString(process.env.CONSOLE_LOCALE || 'en-US', {timeZone: process.env.CONSOLE_TIMEZONE || 'UTC'}) + ' [FATL] ' + '\x1b[5m%s\x1b[0m', message);
    getStack();
};

const Logger = {
    printGeneral, printInfo, printTrace, printDebug, printWarning, printError, printFatal
};

module.exports = Logger