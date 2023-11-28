import { calculate } from './calculator';

test('calculate 2*3*2*5', () => {
    expect(calculate('2*3*2*5=')).toBe(60);
});

test('calculate 2+3+2+5', () => {
    expect(calculate('2+3+2+5=')).toBe(12);
});

test('calculate 10-5', () => {
    expect(calculate('10-5=')).toBe(5);
});

test('calculate 10/2', () => {
    expect(calculate('10/2=')).toBe(5);
});

test('calculate 1 + 2 to equal 3', () => {
    expect(calculate('1+2=')).toBe(3);
});

test('calculate -1 + -2 to equal -3', () => {
    expect(calculate('-1+-2=')).toBe(-3);
});

test('calculate 0 + 0 to equal 0', () => {
    expect(calculate('0+0=')).toBe(0);
});

test('calculate 3 - 2 to equal 1', () => {
    expect(calculate('3-2=')).toBe(1);
});

test('calculate 2 - 3 to equal -1', () => {
    expect(calculate('2-3=')).toBe(-1);
});

test('calculate 0 - 0 to equal 0', () => {
    expect(calculate('0-0=')).toBe(0);
});

test('calculate 2 * 3 to equal 6', () => {
    expect(calculate('2*3=')).toBe(6);
});

test('calculate -2 * 3 to equal -6', () => {
    expect(calculate('-2*3=')).toBe(-6);
});

test('calculate 0 * 3 to equal 0', () => {
    expect(calculate('0*3=')).toBe(0);
});

test('calculate 6 / 3 to equal 2', () => {
    expect(calculate('6/3=')).toBe(2);
});

test('calculate 6 / -3 to equal -2', () => {
    expect(calculate('6/-3=')).toBe(-2);
});

test('calculate 0 / 3 to equal 0', () => {
    expect(calculate('0/3=')).toBe(0);
});

// This test should throw an error
test('calculate 3 / 0 to throw an error', () => {
    expect(() => calculate('3/0=')).toThrow();
});
