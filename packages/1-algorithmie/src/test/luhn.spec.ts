import {isValidLunh} from "../main/luhn";

describe('Luhn validation', () => {
    it('should validate valid luhn number with odd number of character', () => {
        expect(isValidLunh('357865093437023')).toBeTruthy();
    })

    it('should validate luhn number with even number of character', () => {
        expect(isValidLunh('50865093437023')).toBeTruthy();
    })

    it('should invalidate invalid luhn number (even number of character) ', () => {
        expect(isValidLunh('50865093437022')).toBeFalsy();
    })

    it('should invalidate invalid luhn number (even number of character) ', () => {
        expect(isValidLunh('357865093437022')).toBeFalsy();
    })
});