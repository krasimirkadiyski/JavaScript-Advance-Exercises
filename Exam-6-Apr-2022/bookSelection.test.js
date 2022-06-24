const { expect, should } = require('chai');
let bookSelection = require('./bookSelection');

bookSelection = require('./bookSelection');
describe('bookSelection', () => {
    describe('test isGenreSuitable function', () => {
        it('should return message if genre is Thriller and age is less or equal to 12', () => {
            expect((bookSelection.isGenreSuitable('Thriller', 8))).to.equal('Books with Thriller genre are not suitable for kids at 8 age')
        })
        it('should return message if genre is Thriller and age is less than 12', () => {
            expect((bookSelection.isGenreSuitable('Horror', 12))).to.equal('Books with Horror genre are not suitable for kids at 12 age')
        })
        it('should not throw an error if age is over than 12', () => {
            expect((bookSelection.isGenreSuitable('Horror', 14))).to.equal(`Those books are suitable`);
        })
    })
    describe('test isItAffordable function', () => {
        it('should return message if result is less than 0', () => {
            expect(bookSelection.isItAffordable(11, 10)).to.equal(`You don't have enough money`)
        })
        it('should return message if result is less than 0 - decimal numbers', () => {
            expect(bookSelection.isItAffordable(12.5, 11.5)).to.equal(`You don't have enough money`)
        })
        it('should return message if result is equal to 0', () => {
            expect(bookSelection.isItAffordable(11, 11)).to.equal(`Book bought. You have 0$ left`)
        })
        it('should return message if result is over than 0  - decimal numbers', () => {
            expect(bookSelection.isItAffordable(11, 11.5)).to.equal(`Book bought. You have 0.5$ left`)
        })
        it('should return message if result is over than 0  - decimal numbers', () => {
            expect(bookSelection.isItAffordable(11, 111)).to.equal(`Book bought. You have 100$ left`)
        })
        it('should throw error if input is not number', () => {
            expect(() => bookSelection.isItAffordable([11], [111])).to.throw("Invalid input")
        })
        it('should throw error if input is not number', () => {
            expect(() => bookSelection.isItAffordable([11], 111)).to.throw("Invalid input")
        })
        it('should throw error if input is not number', () => {
            expect(() => bookSelection.isItAffordable(11, [111])).to.throw("Invalid input")
        })
           
    })
    describe('test suitableTitles function', () => {
        it('should throw error with invalid input', () => {
            expect(() => bookSelection.suitableTitles([],2)).to.throw('Invalid input');
        })
        it('should throw error with invalid input', () => {
            expect(() => bookSelection.suitableTitles(2,'sad')).to.throw('Invalid input');
        })
        it('should throw error with invalid input', () => {
            expect(() => bookSelection.suitableTitles(2,'sad')).to.throw('Invalid input');
        })
        it('should return array with searched element if exist', () => {
            expect(bookSelection.suitableTitles(([{title: "The Da Vinci Code", genre: "Thriller" }]), 'Thriller')).to.deep.equal(["The Da Vinci Code"]);
        })
        it('should return empty array with searched element if does not exist', () => {
            expect(bookSelection.suitableTitles(([{title: "The Da Vinci Code", genre: "Thriller" }]), 'Tller')).to.deep.equal([]);
        })
        
    })
})
