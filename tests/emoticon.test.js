const emoticon = require('../src/emoticon');

test('emoticon: invalid parameter', () => {
    const test = () => {
        emoticon(new Date());
    };
    expect(test).toThrow(TypeError);
});
