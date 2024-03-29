const sum = require('../SumOfNumbers');
const expect = require('chai').expect;
describe('check sum', () => {
it('works with numbers', () => {
    expect(sum([2, 2, 1])).to.equal(5);
});
it('works with negative numbers', () => {
    expect(sum(['-1', 2])).to.equal(1);
});
it('work with one element', () => {
    expect(sum([0])).to.equal(0);
});

});
