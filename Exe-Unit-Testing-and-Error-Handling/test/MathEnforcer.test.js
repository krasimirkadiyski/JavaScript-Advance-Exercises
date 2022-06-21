const { expect } = require('chai');
const mathEnforcer = require('../MathEnforcer');

describe('test functions of mathEnforcer', () => {
    describe('test function addFive', () => {
        it('test with invalid input, should return undefined', () => {
            expect(mathEnforcer.addFive('NaN')).to.be.undefined;
        })
        it('test input valid number', () => {
            expect(mathEnforcer.addFive(2)).to.equal(7);
        })
        it('test input negative number', () =>{
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        })
        it('test input negative decimal number', () =>{
            expect(mathEnforcer.addFive(-1.5)).to.equal(3.5);
        })
        it('test input negative number', () =>{
            expect(mathEnforcer.addFive(-30)).to.equal(-25);
        }) 
        it('test input decimal number', () =>{
            expect(mathEnforcer.addFive(2.5)).to.equal(7.5);
        })  
    })


    describe('test function subtract', () => {
        it('test subtract invalid input, should return undefined', () => {
            expect(mathEnforcer.subtractTen('NaN')).to.be.undefined;
        })
        it('test subtract valid number', () => {
            expect(mathEnforcer.subtractTen(25)).to.equal(15);
        })
        it('test subtract decimal number', () => {
            expect(mathEnforcer.subtractTen(12.5)).to.equal(2.5);
        })
        it('test subtract negative decimal number', () => {
            expect(mathEnforcer.subtractTen(-12.5)).to.equal(-22.5);
        })
        it('test subtract valid number', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        })
        it('test to subtract negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        
    })
    describe('test function sum', () => {
        it('test to sum two invalid numbers', () => {
            expect(mathEnforcer.sum('NaN',[])).to.be.undefined;
        })
        it('test to sum two invalid numbers', () => {
            expect(mathEnforcer.sum(3,[])).to.be.undefined;
        })
        it('test to sum two invalid numbers', () => {
            expect(mathEnforcer.sum([],2)).to.be.undefined;
        })
        it('test to sum two valid number', () => {
            expect(mathEnforcer.sum(3,3)).to.equal(6);
        })
        it('test with one negative number', () => {
            expect(mathEnforcer.sum(-2,2)).to.equal(0);
        })
        it('test with one decimal number', () => {
            expect(mathEnforcer.sum(5,2.2)).to.equal(7.2);
        })
        it('test with one decimal number', () => {
            expect(mathEnforcer.sum(5,-2.2)).to.equal(2.8);
        })
        it('test with one decimal number', () => {
            expect(mathEnforcer.sum(1.0,-2.2)).to.equal(-1.2000000000000002);
        })
        it('test with one decimal number and one invalid', () => {
            expect(mathEnforcer.sum([1.0],-2.2)).to.be.undefined
        })

    })

})