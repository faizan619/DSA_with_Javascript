console.clear();
function fiboNacci(num){
    console.log("Fibonacci Series upto ",num)
    // console.log(num)
    let prev1 = 0;
    let prev2 = 1;
    console.log(prev1," ")
    console.log(prev2," ")
    for(let i=3;i<=num;i++){
        let curr = prev1+prev2;
        prev1 = prev2;
        prev2 = curr;
        console.log(curr," ")
    }
}

// fiboNacci(10);

function bubbleSort(data,count){
    if(count==1){
        return;
    }
    for(let i =0;i<count-1;i++){
        if(data[i] > data[i+1]){
            temp = data[i];
            data[i] = data[i+1];
            data[i+1] = temp;
        
        }
        bubbleSort(data,count-1);
        // return data;

    }
    console.log(data)
}

let arr1 = [5,3,7,9,1,2,4,6,8]
// bubbleSort(arr1,arr1.length);

// console.log("Sorting : Bubble Sort, Insertion Sort ,Selection Sort, Merge Sort, Quick Sort, Heap Sort and String Sorting")
// console.log("Search : Linear Search, Binary Search,");

function binarySearch(data,ele){
    let start = 0;
    let end = data.length-1;
    // let positon = 0;
    // console.log(end)
    while(start <= end){
        console.log("Start : ",start);
        console.log("End : ",end);
        mid= Math.round((start+end)/2);
        if(data[mid] == ele){
            // console.log("Middle : ",mid)
            return mid;
        }
        else if(data[mid]>ele){
            end = mid-1;
        }
        else{
            start = mid+1;
        }
    }
    return -1;
}
let arr = [10,20,30,40,50,60,70,80,90]
// binarySearch(arr,30);
console.log("Found at : ",binarySearch(arr,70))