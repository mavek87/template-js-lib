import {describe, it, expect} from "vitest";
import {calculator} from "../index";

describe('Calculator tests', () => {
    it('sum should work', () => {
        const result = calculator.sum(1, 2);
        expect(result).toBe(3);
    });
    it('subtract should work', () => {
        const result = calculator.substract(5, 10);
        expect(result).toBe(-5);
    });
});