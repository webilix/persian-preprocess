const system = require('../../src/scripts/system');

test('system: check text parameter error', () => {
    const test = () => {
        system.value = new Date();
    };
    expect(test).toThrow(TypeError);
});

test('system: check debug parameter error', () => {
    const test = () => {
        system.debug = new Date();
    };
    expect(test).toThrow(TypeError);
});

test('system: checkConfig undefined value', () => {
    const test = system.checkConfig(undefined);
    expect(test).toStrictEqual({});
});

test('system: checkConfig object value', () => {
    const test = system.checkConfig({ persian: true });
    expect(test).toStrictEqual({ persian: true });
});

test('system: checkConfig invalid value', () => {
    const test = () => {
        system.checkConfig(new Date());
    };
    expect(test).toThrow(TypeError);
});

test('system: checkPunctuation undefined value', () => {
    const test = system.checkPunctuation(undefined);
    expect(test).toBe(' ');
});

test('system: checkPunctuation null value', () => {
    const test = system.checkPunctuation(null);
    expect(test).toBe('');
});

test('system: checkPunctuation true value', () => {
    const test = system.checkPunctuation(true);
    expect(test).toBe(' ');
});

test('system: checkPunctuation false value', () => {
    const test = system.checkPunctuation(false);
    expect(test).toBe(false);
});

test('system: checkPunctuation error check', () => {
    const test = () => {
        system.checkPunctuation(new Date());
    };
    expect(test).toThrow(TypeError);
});

test('system: checkRemove undefined value', () => {
    const test = system.checkRemove(undefined);
    expect(test).toBe(false);
});

test('system: checkRemove null value', () => {
    const test = system.checkRemove(null);
    expect(test).toBe('');
});

test('system: checkRemove true value', () => {
    const test = system.checkRemove(true);
    expect(test).toBe(' ');
});

test('system: checkRemove false value', () => {
    const test = system.checkRemove(false);
    expect(test).toBe(false);
});

test('system: checkRemove error check', () => {
    const test = () => {
        system.checkRemove(new Date());
    };
    expect(test).toThrow(TypeError);
});

test('system: checkStopword undefined value', () => {
    const test = system.checkStopword(undefined);
    expect(test).toBe(' ');
});

test('system: checkStopword null value', () => {
    const test = () => {
        system.checkStopword(null);
    };
    expect(test).toThrow(TypeError);
});

test('system: checkStopword true value', () => {
    const test = system.checkStopword(true);
    expect(test).toBe(' ');
});

test('system: checkStopword false value', () => {
    const test = system.checkStopword(false);
    expect(test).toBe(false);
});

test('system: checkStopword error check', () => {
    const test = () => {
        system.checkStopword(new Date());
    };
    expect(test).toThrow(TypeError);
});
