const number = require('../src/number');

test('number: undefined language parameter', () => {
    const test = () => {
        number();
    };
    expect(test).toThrow(TypeError);
});

test('number: invalid language parameter', () => {
    const test = () => {
        number(' ');
    };
    expect(test).toThrow(TypeError);
});
