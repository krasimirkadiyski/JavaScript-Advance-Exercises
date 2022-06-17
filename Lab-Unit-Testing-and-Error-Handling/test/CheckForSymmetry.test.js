const { expect } = require('chai');
const isSymmetric = require('../CheckForSymmetry');
describe('check symmetric algorithm', () => {
it('input is not array', () => {
    expect((isSymmetric('dasdas'))).to.be.false;
})
it('array is symmetric', () => {
    expect(isSymmetric(['a','b','a'])).to.be.true;
})
it('array is not symmetric', () => {
    expect(isSymmetric([1,2,2])).to.be.false;
})
it('array with one element', () => {
    expect(isSymmetric([2])).to.be.true;
})
it('array with zero elements', () => {
    expect(isSymmetric([])).to.be.true;
})
it('input is blank', () => {
    expect(isSymmetric()).to.be.false;
})
it('input is different types', () => {
    expect(isSymmetric([0, '0'])).to.be.false;
})
});
