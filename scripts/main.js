import { strictEquals } from './tools';

console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, 1));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, '1'));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals('water', 'oil'));
