

const { isValidPhone } = require('./../utils/validationFunctions');
const { isSecurePassword } = require('./../utils/validationFunctions');

// const sum = (a,b) =>{
//     return a +b;
// }

// test('adds 1 + 2 to equal 3', () =>{
//     expect(sum(1,2)).toBe(3);
// })

test('compare password equal regex', () => {
    expect(isSecurePassword('holaquetal')).toEqual(true);
})
