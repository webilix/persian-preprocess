const _data = {
    value: '',
    debug: false,
    total: {},
    steps: {}
};

module.exports = {
    set value(value) {
        if (typeof value != 'string') {
            throw new TypeError('Text value must be string');
        }

        _data.value = value;
    },

    get value() {
        return _data.value;
    },

    set debug(debug) {
        if (typeof debug != 'boolean') {
            throw new TypeError('Debug status must be boolean');
        }

        _data.debug = debug;
    },

    get debug() {
        return _data.debug;
    },

    debugInit: length => {
        if (!_data.debug) return;
        _data.total = { start: new Date(), length: _data.value.length };
        _data.steps.TOTAL = { duration: 0, change: 0, length: _data.value.length };
    },

    debugStart: type => {
        if (!_data.debug) return;
        if (typeof _data.steps[type] !== 'undefined') return;
        _data.steps[type] = { duration: new Date(), change: 0, length: _data.value.length };
    },

    debugMatch: (type, match) => {
        if (!_data.debug) return;
        match = match.filter((value, index, self) => {
            if (value === null) return false;
            return self.indexOf(value) === index;
        });

        _data.steps[type].match = match;
    },

    debugFinish: type => {
        if (!_data.debug) return;
        if (typeof _data.steps[type] === 'undefined') return;
        _data.steps[type].duration = (new Date() - _data.steps[type].duration) / 1000;
        _data.steps[type].change = _data.value.length - _data.steps[type].length;
        _data.steps[type].length = _data.value.length;

        _data.steps.TOTAL.duration = (new Date() - _data.total.start) / 1000;
        _data.steps.TOTAL.change = _data.value.length - _data.total.length;
    },

    debugGet: () => {
        return _data.debug ? _data.steps : null;
    }
};

module.exports.checkConfig = config => {
    if (typeof config === 'undefined') {
        return {};
    }

    if (Object.prototype.toString.call(config) !== '[object Object]') {
        throw new TypeError('config must be an object');
    }

    return config;
};

const _checkReplace = (config, undefinedValue, checkNull, error) => {
    if (typeof config === 'undefined') {
        return undefinedValue;
    }

    if (typeof config === 'boolean') {
        return config ? ' ' : false;
    }

    if (checkNull && config === null) {
        return '';
    }

    throw new TypeError(`${error} config value is not valid`);
};

module.exports.checkPunctuation = config => {
    return _checkReplace(config, ' ', true, 'Punctuation');
};

module.exports.checkRemove = config => {
    return _checkReplace(config, false, true, 'Remove');
};

module.exports.checkStopword = config => {
    return _checkReplace(config, ' ', false, 'Stopword');
};
