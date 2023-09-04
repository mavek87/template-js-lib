import {describe, it, expect, vi, afterEach} from 'vitest';
import {greet} from "../index";

describe('should mock console.log', () => {
    const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => {});

    afterEach(() => {
        consoleMock.mockReset();
    });

    it('if greet NOT called should not log anything', () => {
        expect(consoleMock).not.toHaveBeenCalled();
    });

    it('if greet called should log `hello`', () => {
        greet();
        expect(consoleMock).toHaveBeenCalledOnce();
        expect(consoleMock).toHaveBeenLastCalledWith('hello');
    });

    it('if greet called three times should log `hello` three times', () => {
        greet();
        greet();
        greet();
        expect(consoleMock).toHaveBeenCalledTimes(3);
        expect(consoleMock).toHaveBeenNthCalledWith(3, 'hello');
    });
});
