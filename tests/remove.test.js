const remove = require('../src/remove');

test('remove: invalid config parameter', () => {
    const test = () => {
        remove(new Date());
    };
    expect(test).toThrow(TypeError);
});

test('remove: invalid member for config parameter', () => {
    const test = () => {
        remove({ number: new Date() });
    };
    expect(test).toThrow(TypeError);
});

test('remove: invalid config length parameter', () => {
    const test = () => {
        remove({ length: new Date() });
    };
    expect(test).toThrow(TypeError);
});
