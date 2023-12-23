// Implement Array.prototype.map in JavaScript

/**
 * Applies a callback function to each element of the array and returns a new array with the results
 * @param {Function} callback - The callback function to apply to each element
 * @returns {Array} - A new array with the results of the callback function applied to each element
 */
Array.prototype.map = function (callback) {
    // Create an empty array to store the results
    const newArray = [];

    // Iterate over each element of the array
    for (let i = 0; i < this.length; i++) {
        // Apply the callback function to the current element, passing the element, its index, and the original array as arguments
        newArray.push(callback(this[i]));
    }

    // Return the new array with the results
    return newArray;
}