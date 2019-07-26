const punctuation = require('../src/punctuation');

test('punctuation: invalid config parameter', () => {
    const test = () => {
        punctuation(new Date());
    };
    expect(test).toThrow(TypeError);
});

test('punctuation: invalid member for config parameter', () => {
    const test = () => {
        punctuation({ basic: new Date() });
    };
    expect(test).toThrow(TypeError);
});
