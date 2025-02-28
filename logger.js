"use strict";

/**
 * Retrieves the stack trace of the caller function if enabled.
 */
function getStack() {
    if (process.env.PRINT_STACK_DETAIL?.toUpperCase() !== 'FALSE') {
        console.log(new Error().stack.split('\n')[3]);
    }
}

/**
 * Generates a timestamp based on environment settings.
 * @returns {string} Formatted timestamp.
 */
const getTimestamp = () => {
    const now = new Date();
    const locale = process.env.CONSOLE_LOCALE || 'en-US';
    const timeZone = process.env.CONSOLE_TIMEZONE || 'UTC';

    if (process.env.SUPPORT_MILLISECONDS) {
        return new Intl.DateTimeFormat(locale, {
            timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            fractionalSecondDigits: 3,
            hour12: false
        }).format(now).replace(',', '');
    }

    return now.toLocaleString(locale, { timeZone });
};

/**
 * Logs messages with different severity levels and optional objects.
 * @param {string} level - The log level identifier.
 * @param {string} colorCode - ANSI color code for formatting.
 * @param {string} message - The log message.
 * @param {object} [object] - Optional additional data.
 */
const logMessage = (level, colorCode, message, object) => {
    console.log(`${getTimestamp()} [${level}] ${colorCode}%s\x1b[0m`, message, object ? ` ${JSON.stringify(object, null, 2)}` : '');
    getStack();
};

const Logger = {
    printGeneral: (message, object) => logMessage('GENE', '\x1b[34m', message, object),
    printInfo: (message, object) => logMessage('INFO', '\x1b[36m', message, object),
    printTrace: (message, object) => logMessage('TRAC', '\x1b[37m', message, object),
    printDebug: (message, object) => {
        if (process.env.PRINT_DEBUG?.toUpperCase() !== 'FALSE') {
            logMessage('DEBG', '\x1b[32m', message, object);
        }
    },
    printWarning: (message, object) => logMessage('WARN', '\x1b[35m', message, object),
    printError: (message, object) => logMessage('ERRO', '\x1b[31m', message, object),
    printFatal: (message, object) => logMessage('FATL', '\x1b[5m', message, object)
};

export default Logger;
