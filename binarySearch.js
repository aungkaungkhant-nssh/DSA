class BinarySearch{
    constructor(array){
        this.array = array;
    }

    search(target){
        let min = this.array[0];
        let max = this.array[this.array.length - 1];


        while(min < max){
            let mid = min + (max-min)/2;
            if(target > mid){
                min = mid;
            }else if(target < mid){
                max = mid;  
            }else{
                return mid;
            }
        }
       
        
    }

}

class Test{
    constructor(){
        const arr = Array.from({ length: 100 }, (_, i) => i + 1);
        const binarySearch = new BinarySearch(arr);
        binarySearch.search(77)
    }
}


const test  = new Test()


// note
// binarySearch algorithm find the position of value in sorted array
// half of the array is eliminated in each iteration
