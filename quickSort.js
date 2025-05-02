class QuickSort {
    sort(arr) {
        if (arr.length <= 1) return arr;
    
        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];
    
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] < pivot) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }
    
        const sortedLeft = this.sort(left);
        const sortedRight = this.sort(right);
    
        return [...sortedLeft, pivot, ...sortedRight];
      }

    
}

class Test {
    constructor() {
        const arr = [6, 1, 3, 5, 7, 8, 4, 2];
        const quickSort = new QuickSort();
        const sorted = quickSort.sort(arr);
        console.log("Sorted Array:", sorted);
    }
}

new Test();


// ## **Quick Sort Algorithm**

// *It selects a 'pivot' element, partitions the list into elements less than and greater than the pivot, 
// then recursively applies the same logic to the sublists.*

/** Advantages:
 *
 * - **In-place sorting**, requiring little or no additional memory.
 * - **Faster in practice** than other O(n log n) algorithms like merge sort, for many datasets.
 * - **Tail recursion optimization** can be applied to reduce stack usage.
 */

/** Disadvantages:
 *
 * - **Worst-case time complexity** of O(n²), typically avoided with good pivot selection.
 * - **Unstable sort**, may not preserve the order of equal elements.
 * - **Sensitive to pivot choice**, which affects performance significantly.
 */