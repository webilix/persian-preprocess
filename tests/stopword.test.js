const stopword = require('../src/stopword');

test('stopword: invalid config parameter', () => {
    const test = () => {
        stopword(new Date());
    };
    expect(test).toThrow(TypeError);
});

test('stopword: invalid member for config parameter', () => {
    const test = () => {
        stopword({ persian: new Date() });
    };
    expect(test).toThrow(TypeError);
});

test('stopword: invalid config custom parameter array[]', () => {
    const test = () => {
        stopword({ custom: new Date() });
    };
    expect(test).toThrow(TypeError);
});

test('stopword: invalid config custom parameter [string]', () => {
    const test = () => {
        stopword({ custom: [null] });
    };
    expect(test).toThrow(TypeError);
});
