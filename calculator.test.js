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
