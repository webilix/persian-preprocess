const normalize = require('../src/normalize');

test('normalize: invalid config parameter', () => {
    const test = () => {
        normalize(new Date());
    };
    expect(test).toThrow(TypeError);
});

test('normalize: invalid member for config parameter', () => {
    const test = () => {
        normalize({ persian: null });
    };
    expect(test).toThrow(TypeError);
});
