const { expect } = require('chai');
const isOddOrEven = require('../EvenOrOdd');
describe('test function isOddOrEven', () => {
it('test with even string, should return even', () =>{
    expect(isOddOrEven('test')).to.equal('even');
})
it('test with odd string, should return odd', () =>{
    expect(isOddOrEven('tes')).to.equal('odd');
})
it('test with non string', () =>{
    expect(isOddOrEven([])).to.be.undefined;
})

});
