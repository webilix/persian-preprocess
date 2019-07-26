const system = require('./scripts/system');
const map = require('../map/punctuation');

/**
 *
 * @param {object} [config] punctuation config
 * @param {boolean|[null]} [config.basic] basic punctuation status
 * @param {boolean|[null]} [config.mark] mark punctuation status
 * @param {boolean|[null]} [config.unicode] unicode punctuation status
 * @param {boolean|[null]} [config.diacritic] diacritic punctuation status
 */
module.exports = function(config) {
    config = system.checkConfig(config);
    if (system.debug) system.debugStart('punctuation');

    let match = [];
    let replace;

    replace = system.checkPunctuation(config.basic);
    if (replace !== false) {
        const regex = new RegExp('[' + map.basic.split(' ').join('') + ']', 'gi');
        if (system.debug) match = match.concat(system.value.match(regex));
        system.value = system.value.replace(regex, replace);
    }

    replace = system.checkPunctuation(config.mark);
    if (replace !== false) {
        const regex = new RegExp('[' + map.mark.split(' ').join('') + ']', 'gi');
        if (system.debug) match = match.concat(system.value.match(regex));
        system.value = system.value.replace(regex, replace);
    }

    replace = system.checkPunctuation(config.diacritic);
    if (replace !== false) {
        const regex = new RegExp('[' + map.diacritic.split(' ').join('') + ']', 'gi');
        if (system.debug) match = match.concat(system.value.match(regex));
        system.value = system.value.replace(regex, replace);
    }

    replace = system.checkPunctuation(config.unicode);
    if (replace !== false) {
        const regex = new RegExp('[' + map.unicode.split(' ').join('') + ']', 'gi');
        if (system.debug) match = match.concat(system.value.match(regex));
        system.value = system.value.replace(regex, replace);
    }

    if (system.debug) {
        system.debugMatch('punctuation', match);
        system.debugFinish('punctuation');
    }
    return this;
};
