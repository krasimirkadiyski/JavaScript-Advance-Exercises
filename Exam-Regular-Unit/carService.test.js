const { expect } = require('chai');
const carService = require('./03. Car service_Resources');

describe('carService', () => {
    describe('test isItExpensive function', () => {
        it('test with valid param should return accepted message', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
        })
        it('test with valid param should return accepted message', () => {
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        })
        it('test with valid param should return default message', () => {
            expect(carService.isItExpensive('Tyre')).to.equal(`The overall price will be a bit cheaper`);
        })
        it('test with valid param should return default message', () => {
            expect(carService.isItExpensive(5)).to.equal(`The overall price will be a bit cheaper`);
        })
        it('test with valid param should return default message', () => {
            expect(carService.isItExpensive(5.5)).to.equal(`The overall price will be a bit cheaper`);
        })
        it('test with valid param should return default message', () => {
            expect(carService.isItExpensive([])).to.equal(`The overall price will be a bit cheaper`);
        })
    })
    describe('test discount function', () => {
        it('test with invalid input NaN', () => {
            expect(() => carService.discount("12", 10)).to.throw(`Invalid input`);
        })
        it('test with invalid input NaN', () => {
            expect(() => carService.discount(12, '10')).to.throw(`Invalid input`);
        })
        it('test with invalid input NaN', () => {
            expect(() => carService.discount("12", [10])).to.throw(`Invalid input`);
        })
        it('test with valid input discount should be 0% if number of parts is qual or less than 2', () => {
            expect(carService.discount(2, 123.5)).to.equal('You cannot apply a discount');
        })
        it('test with valid input discount should be 0% if number of parts is qual or less than 2', () => {
            expect(carService.discount(-5, 123.5)).to.equal('You cannot apply a discount');
        })
        it('test with valid input discount should be 0% if number of parts is qual or less than 2', () => {
            expect(carService.discount(1, 1230)).to.equal('You cannot apply a discount');
        })
        it('test with valid input and valid number of parts, should return message with disocunt', () => {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`)
        })
        it('test with valid input and valid number of parts, should return message with disocunt', () => {
            expect(carService.discount(3.5, 100)).to.equal(`Discount applied! You saved 15$`)
        })
        it('test with valid input and valid number of parts, should return message with disocunt', () => {
            expect(carService.discount(3, 1000.45)).to.equal(`Discount applied! You saved 150.0675$`)
        })
        it('test with valid input and valid number of parts, should return message with disocunt', () => {
            expect(carService.discount(7, 1000.45)).to.equal(`Discount applied! You saved 150.0675$`)
        })
        it('test with valid input and valid number of parts, should return message with disocunt', () => {
            expect(carService.discount(8, 1000.45)).to.equal(`Discount applied! You saved 300.135$`)
        })
        it('test with valid input and valid number of parts, should return message with disocunt', () => {
            expect(carService.discount(8, 1000)).to.equal(`Discount applied! You saved 300$`)
        })
        it('test with valid input and valid number of parts, should return message with disocunt', () => {
            expect(carService.discount(124545, 1000)).to.equal(`Discount applied! You saved 300$`)
        })
    })
    describe('test partsToBuy function', () => {
        it('should throw error if input is not an array', () => {
            expect(() => carService.partsToBuy('dsada',NaN)).to.throw('Invalid input');
        })
        it('should throw error if input is not an array', () => {
            expect(() => carService.partsToBuy(([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],NaN))).to.throw('Invalid input');
        })
        it('should throw error if input is not an array', () => {
            expect(() => carService.partsToBuy(('dsadsa',(["blowoff valve", "injectors"]))).to.throw('Invalid input'));
        })
        it('should return total sum is input is OK', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"])).to.equal(145);
        })
        

    })
})