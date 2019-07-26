const system = require('./scripts/system');

module.exports = function() {
    if (system.debug) system.debugStart('whitespace');

    system.value = system.value.replace(/ +(?= )/g, '').trim();

    if (system.debug) system.debugFinish('whitespace');
    return this;
};
