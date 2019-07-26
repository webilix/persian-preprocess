const system = require('./scripts/system');
const map = require('../map/emoticon');

/**
 * @param {[null]} [replace] emoticon replacement status
 */
module.exports = function(replace) {
    if (system.debug) system.debugStart('emoticon');

    let match = [];

    if (typeof replace !== 'undefined' && replace !== null) {
        throw new TypeError('Emoticon replace value can only be NULL');
    }

    replace = replace === null ? '' : ' ';
    for (var m = 0; m < map.length; m++) {
        const regex = new RegExp(map[m], 'gi');
        if (system.debug) match = match.concat(system.value.match(regex));
        system.value = system.value.replace(regex, replace);
    }

    if (system.debug) {
        system.debugMatch('emoticon', match);
        system.debugFinish('emoticon');
    }
    return this;
};
