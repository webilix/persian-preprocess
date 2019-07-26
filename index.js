const system = require('./src/scripts/system');

/**
 *
 * @param {string} text pre process text value
 */
const preProcess = (text, debug) => {
    system.value = text;
    system.debug = debug;
    if (system.debug) system.debugInit();
    return preProcess;
};

module.exports = preProcess;
module.exports.normalize = require('./src/normalize');
module.exports.number = require('./src/number');
module.exports.lowercase = require('./src/lowercase');
module.exports.punctuation = require('./src/punctuation');
module.exports.remove = require('./src/remove');
module.exports.stopword = require('./src/stopword');
module.exports.emoticon = require('./src/emoticon');
module.exports.whitespace = require('./src/whitespace');

module.exports.getDebug = () => {
    return system.debugGet();
};

module.exports.toString = () => {
    return system.value;
};

module.exports.toArray = () => {
    const value = system.value.replace(/ +(?= )/g, '').trim();
    return value.length == 0 ? [] : value.split(' ');
};

module.exports.toUnique = () => {
    const value = system.value.replace(/ +(?= )/g, '').trim();
    if (value.length === 0) return [];
    return value.split(' ').filter((value, index, self) => {
        if (value === '') return true;
        return self.indexOf(value) === index;
    });
};
