/**
 * @param {string} array Array
 * @param {string} n  Number of values that needs to be returned from Array
 * @returns return new Array with the size n
 */
 export function lastNMembers(array, n) {
    if (array == null) {
      return void 0;
    }
    if (n == null) {
      return array[array.length - 1];
    }
    return array.slice(Math.max(array.length - n, 0));
  }
  
  /**
   * @param {string} value  The target for wrapper
   * @returns Create html wrapper for moving average for displaying big number
   */
  export function containerClassBig(value: string): string {
    return `<span class="big">${value}</span>`;
  }