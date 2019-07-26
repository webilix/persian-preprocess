const emoticon = require('../../map/emoticon');
const normilize = require('../../map/normilize');
const number = require('../../map/number');
const punctuation = require('../../map/punctuation');
const remove = require('../../map/remove');
const stopword = require('../../map/stopword');

test('map: emoticon', () => {
    expect(typeof emoticon).toBe('object');
    expect(Array.isArray(emoticon)).toBe(true);
    expect(emoticon.length).toBe(5);
});

test('map: normilize', () => {
    expect(typeof normilize).toBe('object');
    expect(Object.prototype.toString.call(normilize)).toBe('[object Object]');
    expect(Object.prototype.toString.call(normilize.persian)).toBe('[object Object]');
    expect(Object.prototype.toString.call(normilize.english)).toBe('[object Object]');
    expect(Object.prototype.toString.call(normilize.arabic)).toBe('[object Object]');
    expect(Object.prototype.toString.call(normilize.number)).toBe('[object Object]');
    expect(Object.prototype.toString.call(normilize.math)).toBe('[object Object]');
    expect(Object.prototype.toString.call(normilize.html)).toBe('[object Object]');
    expect(Object.prototype.toString.call(normilize.punctuation)).toBe('[object Object]');
    expect(Object.prototype.toString.call(normilize.special)).toBe('[object Object]');
});

test('map: number', () => {
    expect(typeof number).toBe('object');
    expect(Object.prototype.toString.call(number)).toBe('[object Object]');
    expect(Array.isArray(number.fa)).toBe(true);
    expect(number.fa.length).toBe(10);
    expect(Array.isArray(number.en)).toBe(true);
    expect(number.en.length).toBe(10);
});

test('map: punctuation', () => {
    expect(typeof punctuation).toBe('object');
    expect(Object.prototype.toString.call(punctuation)).toBe('[object Object]');
    expect(typeof punctuation.basic).toBe('string');
    expect(typeof punctuation.mark).toBe('string');
    expect(typeof punctuation.diacritic).toBe('string');
    expect(typeof punctuation.unicode).toBe('string');
});

test('map: remove', () => {
    expect(typeof remove).toBe('object');
    expect(Object.prototype.toString.call(remove)).toBe('[object Object]');
    expect(typeof remove.number).toBe('string');
    expect(typeof remove.persian).toBe('string');
    expect(typeof remove.english).toBe('string');
});

test('map: stopword', () => {
    expect(typeof stopword).toBe('object');
    expect(Object.prototype.toString.call(stopword)).toBe('[object Object]');
    expect(Array.isArray(stopword.persian)).toBe(true);
    expect(stopword.persian.length).toBe(365);
    expect(Array.isArray(stopword.english)).toBe(true);
    expect(stopword.english.length).toBe(209);
});
