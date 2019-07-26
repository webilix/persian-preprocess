const system = require('./scripts/system');
const map = require('../map/normilize');

/**
 *
 * @param {object} [config] normilization config
 * @param {boolean|[null]} [config.persian] persian normilization status
 * @param {boolean|[null]} [config.english] english normilization status
 * @param {boolean|[null]} [config.arabic] arabic normilization status
 * @param {boolean|[null]} [config.number] number normilization status
 * @param {boolean|[null]} [config.math] math normilization status
 * @param {boolean|[null]} [config.html] html normilization status
 * @param {boolean|[null]} [config.punctuation] punctuation normilization status
 * @param {boolean|[null]} [config.special] special normilization status
 */
module.exports = function(config) {
    config = system.checkConfig(config);
    if (system.debug) system.debugStart('normilize');

    let match = [];

    for (type in map) {
        if (!['undefined', 'boolean'].includes(typeof config[type])) {
            throw new TypeError(config[type] + ' value must be boolean');
        }

        if (config[type] === false) continue;
        for (replace in map[type]) {
            const regex = new RegExp('(' + map[type][replace].split(' ').join('|') + ')', 'gi');
            if (system.debug) match = match.concat(system.value.match(regex));
            system.value = system.value.replace(regex, replace);
        }
    }

    if (system.debug) {
        system.debugMatch('normilize', match);
        system.debugFinish('normilize');
    }
    return this;
};
