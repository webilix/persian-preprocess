const system = require('./scripts/system');

module.exports = function() {
    if (system.debug) system.debugStart('lowercase');

    system.value = system.value.toLowerCase();

    if (system.debug) system.debugFinish('lowercase');
    return this;
};
