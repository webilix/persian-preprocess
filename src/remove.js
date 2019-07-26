const system = require('./scripts/system');
const map = require('../map/remove');

/**
 *
 * @param {object} [config] remove config
 * @param {boolean|[null]} [config.number] number remove status
 * @param {boolean|[null]} [config.persian] persian remove status
 * @param {boolean|[null]} [config.english] english remove status
 * @param {number} [config.length] min length remove
 */
module.exports = function(config) {
    config = system.checkConfig(config);
    if (system.debug) system.debugStart('remove');

    let match = [];
    let replace;

    replace = system.checkRemove(config.number);
    if (replace !== false) {
        const regex = new RegExp('[' + map.number.split(' ').join('') + ']', 'gi');
        if (system.debug) match = match.concat(system.value.match(regex));
        system.value = system.value.replace(regex, replace);
    }

    replace = system.checkRemove(config.persian);
    if (replace !== false) {
        const regex = new RegExp('[' + map.persian.split(' ').join('') + ']', 'gi');
        if (system.debug) match = match.concat(system.value.match(regex));
        system.value = system.value.replace(regex, replace);
    }

    replace = system.checkRemove(config.english);
    if (replace !== false) {
        const regex = new RegExp('[' + map.english.split(' ').join('') + ']', 'gi');
        if (system.debug) match = match.concat(system.value.match(regex));
        system.value = system.value.replace(regex, replace);
    }

    if (!['undefined', 'number'].includes(typeof config.length)) {
        throw new TypeError('Length value must be a number');
    }

    if ((length = typeof config.length === 'number' ? config.length : 0)) {
        const words = system.value.split(' ');
        const remove = words.filter(value => {
            if (value === '') return true;
            if (system.debug) if (value.length > length) match = match.concat([value]);
            return value.length > length;
        });
        system.value = remove.join(' ');
    }

    if (system.debug) {
        system.debugMatch('remove', match);
        system.debugFinish('remove');
    }
    return this;
};
