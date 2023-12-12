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

test('calculate 2*-3 to equal -6', () => {
    expect(calculate('2*-3=')).toBe(-6);
});

test('calculate 2/-3 to equal -0.6666666666666666', () => {
    expect(calculate('2/-3=')).toBe(-0.6666666666666666);
});

test('calculate -2*-3 to equal 6', () => {
    expect(calculate('-2*-3=')).toBe(6);
});

test('calculate -2/-3 to equal 0.6666666666666666', () => {
    expect(calculate('-2/-3=')).toBe(0.6666666666666666);
});

test('calculate 2*3+4 to equal 10', () => {
    expect(calculate('2*3+4=')).toBe(10);
});

test('calculate 2+3*4 to equal 14', () => {
    expect(calculate('2+3*4=')).toBe(14);
});

test('calculate 2+3*4-5 to equal 9', () => {
    expect(calculate('2+3*4-5=')).toBe(9);
});

test('calculate 2+3*4-5/2 to equal 11.5', () => {
    expect(calculate('2+3*4-5/2=')).toBe(11.5);
});

test('calculate 2+3*-4 to equal -10', () => {
    expect(calculate('2+3*-4=')).toBe(-10);
});

test('calculate 2+3*-4/-2 to equal 8', () => {
    expect(calculate('2+3*-4/-2=')).toBe(8);
});

test('calculate -2+3 to equal 1', () => {
    expect(calculate('-2+3=')).toBe(1);
});

test('calculate -2*-3 to equal 6', () => {
    expect(calculate('-2*-3=')).toBe(6);
});

test('calculate -2/-1 to equal 2', () => {
    expect(calculate('-2/-1=')).toBe(2);
});

test('calculate -2+3*-1 to equal -5', () => {
    expect(calculate('-2+3*-1=')).toBe(-5);
});

test('calculate -2*-3+4 to equal 10', () => {
    expect(calculate('-2*-3+4=')).toBe(10);
});

test('calculate -2/-1+5 to equal 7', () => {
    expect(calculate('-2/-1+5=')).toBe(7);
});

test('calculate 2*-3*-2 to equal 12', () => {
    expect(calculate('2*-3*-2=')).toBe(12);
});

test('calculate 2/-1*-3 to equal 6', () => {
    expect(calculate('2/-1*-3=')).toBe(6);
});

test('calculate -2*-3/-1 to equal -6', () => {
    expect(calculate('-2*-3/-1=')).toBe(-6);
});

test('calculate -2/-1*-3 to equal -6', () => {
    expect(calculate('-2/-1*-3=')).toBe(-6);
});

test('calculate -2+3*-1+5 to equal 0', () => {
    expect(calculate('-2+3*-1+5=')).toBe(0);
});

test('calculate -2*-3+4/-2 to equal 4', () => {
    expect(calculate('-2*-3+4/-2=')).toBe(4);
});

test('calculate -2/-1+5*-3 to equal -13', () => {
    expect(calculate('-2/-1+5*-3=')).toBe(-13);
});

test('calculate 2*-3*-2+4 to equal 16', () => {
    expect(calculate('2*-3*-2+4=')).toBe(16);
});

test('calculate 2/-1*-3+5 to equal 11', () => {
    expect(calculate('2/-1*-3+5=')).toBe(11);
});

test('calculate -2*-3/-1+4 to equal -2', () => {
    expect(calculate('-2*-3/-1+4=')).toBe(-2);
});

test('calculate -2/-1*-3+5 to equal -1', () => {
    expect(calculate('-2/-1*-3+5=')).toBe(-1);
});
