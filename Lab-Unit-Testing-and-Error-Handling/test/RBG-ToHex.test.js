const { expect } = require("chai");
const rgbToHexColor = require("../RBG-ToHex");
describe('test rgbToHex function', () => {
it('test red with NaN', () => {
    expect(rgbToHexColor(NaN, 2, 5)).to.be.undefined;
});
it('test red with negative value', () => {
    expect(rgbToHexColor(-5, 2, 5)).to.be.undefined;
});
it('test red with too big value', () => {
    expect(rgbToHexColor(299, 2, 3)).to.be.undefined;
});
it('test green with NaN', () => {
    expect(rgbToHexColor(2, NaN, 5)).to.be.undefined;
});
it('test green with negative value', () => {
    expect(rgbToHexColor(2, -5, 5)).to.be.undefined;
});
it('test green with too big value', () => {
    expect(rgbToHexColor(2, 299, 3)).to.be.undefined;
});

it('test blue with NaN', () => {
    expect(rgbToHexColor(2, 5, NaN)).to.be.undefined;
});
it('test blue with negative value', () => {
    expect(rgbToHexColor(2, 5, -5)).to.be.undefined;
});
it('test blue with too big value', () => {
    expect(rgbToHexColor(2, 2, 299)).to.be.undefined;
});
it('test input code', () => {
    expect(rgbToHexColor(2, 6, 9)).to.equal('#020609');
});
it('test valid input', () => {
    expect(rgbToHexColor(254, 255, 8)).to.equal('#FEFF08');
});
it('test valid input', () => {
    expect(rgbToHexColor(254, 255, 8)).to.equal('#FEFF08');
});
it('test input string number', () => {
    expect(rgbToHexColor('254', 255, 8)).to.be.undefined;
});
it('test blank input', () => {
    expect(rgbToHexColor()).to.be.undefined;
});
it('test with string input', () => {
    expect(rgbToHexColor('sadas',2,5)).to.be.undefined;
});
it('test with not enought args', () => {
    expect(rgbToHexColor(2,5)).to.be.undefined;
});
it('test with zero for input', () => {
    expect(rgbToHexColor(0, 255, 8)).to.equal('#00FF08');
});
})





