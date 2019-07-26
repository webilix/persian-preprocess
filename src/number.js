const system = require('./scripts/system');
const map = require('../map/number');

/**
 * @param {'persian'|'english'} locale number values locale
 */
module.exports = function(locale) {
    if (system.debug) system.debugStart('number');

    let match = [];

    if (!['persian', 'english'].includes(locale)) {
        throw new TypeError("Number locale value must be 'persian' or 'english'");
    }

    if (locale === 'persian') {
        for (var f = 0; f < map.fa.length; f++) {
            const regex = new RegExp('[' + map.en[f] + ']', 'g');
            if (system.debug) match = match.concat(system.value.match(regex));
            system.value = system.value.replace(regex, map.fa[f]);
        }
    }

    if (locale === 'english') {
        for (var e = 0; e < map.en.length; e++) {
            const regex = new RegExp('[' + map.fa[e] + ']', 'g');
            if (system.debug) match = match.concat(system.value.match(regex));
            system.value = system.value.replace(regex, map.en[e]);
        }
    }

    if (system.debug) {
        system.debugMatch('number', match);
        system.debugFinish('number');
    }
    return this;
};
