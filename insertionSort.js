class InsertionSort{
    constructor(arr){
        this.arr = arr;
    }

    sort(){
       for(let k = 1; k< this.arr.length;k++){
            let temp = this.arr[k];
            let i;
            for(i=k-1;i>=0 && temp < this.arr[i];i--){
                this.arr[i+1] = this.arr[i];
            }
            this.arr[i+1] = temp;
       }

       console.log(this.arr)
    }

}

class Test{
    constructor(){
        const arr = [9,1,8,2,7,3,6,4,5]
        const insertionSort = new InsertionSort(arr);
        insertionSort.sort()
    }
}


const test  = new Test()


// note 
//Insertion sort is a sorting algorithm that builds the final sorted array by taking one element at a time from the unsorted part and inserting it into the correct position in the sorted part.