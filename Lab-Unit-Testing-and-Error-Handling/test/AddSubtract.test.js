const { expect } = require('chai');
const createCalculator = require('../AddSubtract');



it('test subract ', () => {
    let calculate = createCalculator();
    calculate.subtract(5);
    expect(calculate.get()).to.equal(-5);
})
it('test add ', () => {
    let calculate = createCalculator();
    calculate.add(5);
    expect(calculate.get()).to.equal(5);
})
it('test add with negative value', () => {
    let calculate = createCalculator();
    calculate.add(-5);
    expect(calculate.get()).to.equal(-5);
})
it('test add blank value', () => {
    let calculate = createCalculator();
    calculate.add();
    expect(calculate.get()).to.be.NaN;
})
it('test add string', () => {
    let calculate = createCalculator();
    calculate.add('sadas');
    expect(calculate.get()).to.be.NaN;
})
it('test get method', () => {
    let calculate = createCalculator();
    expect(calculate.get()).to.equal(0);
})
