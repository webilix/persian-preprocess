const system = require('./scripts/system');
const map = require('../map/stopword');

/**
 *
 * @param {object} [config] stop word config
 * @param {boolean} [config.persian] persian stop word status
 * @param {boolean} [config.english] english stop word status
 * @param {string[]} [config.custom] custom stop word list
 */
module.exports = function(config) {
    config = system.checkConfig(config);
    if (system.debug) system.debugStart('stopword');

    let replace;
    let match = [];

    replace = system.checkStopword(config.english, true);
    if (replace !== false) {
        for (var e = 0; e < map.english.length; e++) {
            const regex = new RegExp('\\b(' + map.english[e] + ')\\b', 'gi');
            if (system.debug) match = match.concat(system.value.match(regex));
            system.value = system.value.replace(regex, ' ' + replace + ' ');
        }
    }

    system.value = ' ' + system.value + ' ';

    replace = system.checkStopword(config.persian, true);
    if (replace !== false) {
        for (var p = 0; p < map.persian.length; p++) {
            const regex = new RegExp('( ' + map.persian[p] + ' )', 'gi');
            if (system.debug) match = match.concat(system.value.match(regex));
            system.value = system.value.replace(regex, ' ' + replace + ' ');
        }
    }

    if (typeof config.custom !== 'undefined' && !Array.isArray(config.custom)) {
        throw new TypeError('Custom value must be an array of strings');
    }

    const custom = typeof config.custom !== 'undefined' && Array.isArray(config.custom) ? config.custom : [];
    custom.forEach(word => {
        if (typeof word != 'string') {
            throw new TypeError('Custom value must be an array of strings');
        }

        const regex = new RegExp('( ' + word + ' )', 'gi');
        if (system.debug) match = match.concat(system.value.match(regex));
        system.value = system.value.replace(regex, ' ' + replace + ' ');
    });

    system.value = system.value.substr(1, system.value.length - 2);

    if (system.debug) {
        system.debugMatch('stopword', match);
        system.debugFinish('stopword');
    }
    return this;
};
