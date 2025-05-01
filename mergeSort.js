class MergeSort {
    sort(arr){
        if(arr.length<=1){
            return arr;
        }
        const mid = Math.floor(arr.length/2);

        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
      
       const leftArray = this.sort(left);    
        const rightArray = this.sort(right);

        return this.merge(leftArray,rightArray)
    }

    merge(left,right){
        const result = [];
        let i =0;
        let j=0
        
        while(i<left.length && j<right.length){
            if(left[i] < right[j]){
                result.push(left[i++])
            }else{
                result.push(right[j++])
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
    }
}

class Test {
    constructor() {
        const arr = [6, 1, 3, 5, 7, 8, 4, 2];
        const mergeSort = new MergeSort();
        const sorted = mergeSort.sort(arr);
        console.log("Sorted Array:", sorted);
    }
}

new Test();


// ## **Merge Sort Algorithm**

// *It divides the list into halves, recursively sorts each half, and then merges the sorted halves to produce the final sorted list.*

// **Advantages:**

// - **Consistent time complexity** of O(n log n), even in the worst case.
// - **Stable sort**, preserving the order of equal elements.
// - **Efficient for large datasets** due to its predictable performance.

// **Disadvantages:**

// - **Requires extra space** (not an in-place algorithm).
// - **More overhead** due to recursive calls and merging steps.
// - **Slower for small datasets** compared to simpler algorithms like insertion sort.