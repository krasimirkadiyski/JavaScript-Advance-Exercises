const { expect } = require('chai');
let lookupChar = require('../CharLookup');
describe('test lookupChar function', () => {
    it('input index is bigger than string length', () => {
        expect(lookupChar('abc',445)).to.equal('Incorrect index');
    })
    it('input index is negativ', () => {
        expect(lookupChar('abc',-5)).to.equal('Incorrect index');
    })
    it('input index equal string length', () => {
        expect(lookupChar('abc',3)).to.equal('Incorrect index');
    })
    it('input index 0', () => {
        expect(lookupChar('abc',0)).to.equal('a');
    })
    it('input is not a string', () => {
        expect(lookupChar([],0)).to.be.undefined;
    })
    it('input is not a number', () => {
        expect(lookupChar('sdada',[])).to.be.undefined;
    })
    it('string is empty', () => {
        expect(lookupChar('',0)).to.equal('Incorrect index');
    })
    it('last possible index', () => {
        expect(lookupChar('AbC',2)).to.equal('C');
    })
    it('func without params', () => {
        expect(lookupChar()).to.be.undefined;
    })
    it('space string', () => {
        expect(lookupChar('    ',2)).to.equal(' ');
    })
    it('second param is string, should return undefined', () => {
        expect(lookupChar('dsadasdas','2')).to.be.undefined;
    })
    it('second param is decimal, should return undefined', () => {
        expect(lookupChar('dsadasdas',2.5)).to.be.undefined;
    })
});