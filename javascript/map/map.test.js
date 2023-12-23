const { expect } = require('@jest/globals');

/**
 * Test case for Array.prototype.map
 * 
 * It should apply the callback function to each element of the array and return a new array with the results.
 */
describe('Array.prototype.map', () => {
    it('should apply the callback function to each element of the array and return a new array with the results', () => {
        // Arrange
        const arr = [1, 2, 3, 4]; // Input array
        const callback = (x) => x * 2; // Callback function that doubles each element
        const expected = [2, 4, 6, 8]; // Expected output array

        // Act
        const result = arr.map(callback); // Apply the callback function to each element of the array

        // Assert
        expect(result).toEqual(expected); // Check if the result matches the expected output
    });
});