console.clear();

let data = [];
let currSize = data.length;
let max = 5;
function pushStack1(val){
    if(currSize<max){
        data[currSize] = val;
        currSize++;
        console.log(data)
    }
    else{
        console.log("Stack Size is Reached!")
    }
}

function popStack1(){
    if(currSize<=0){
        console.log("Stack is Emply");
    }
    else{
        currSize--;
        data.length = currSize;
        console.log(data)
    }
}

// pushStack1(5);
// pushStack1(3);
// pushStack1(7);
// pushStack1(9);
// pushStack1(1);
// pushStack1(2);
// popStack1();
// popStack1();
// popStack1();
// popStack1();
// popStack1();
// popStack1();

function bubbleSort(data){
    for(let i=0;i<data.length;i++){
        // console.log("=======")
        for(let j=0;j<data.length;j++){
            // console.log(data[j])
            if(data[j]<data[j+1]){
                temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
    console.log(data)
}
// let arr1 = [7,1,8,2,9,3,4,6,5];
// bubbleSort(arr1);

// let data = [];
// let currentSize =data.length;
// let max = 6;

function pushqueue(item){
    if(data.length<max){
        data[currentSize] =item; 
        currentSize++;
        console.log(data)
    }else{
        console.log("queue is full");
    }
}

function popqueue(){
    if(data.length<=0){
        console.log("queue is empty")
    }
    else{
        for(let i=0;i<currentSize;i++){
            data[i] = data[i+1]
        }
        currentSize--;
        data.length = currentSize;
        console.log(data)
    }
}

// pushqueue(10);
// pushqueue(20);
// pushqueue(30);
// popqueue();
// popqueue();
// popqueue();
// popqueue();


// let data = [];
// let currentSize = data.length;
// let max = 6;

function pushstack(item){
    if(currentSize<max){
        data[currentSize] = item;
        currentSize++;
        console.log(data);
    }
    else{
        console.log("stack is full")
    } 
}

function popstack(){
    if(currentSize<=0){
        console.log("stack is empty")
    }
    else{
        currentSize--;
        data.length =currentSize;
        console.log(data)
    }
}

// pushstack(5);
// pushstack(6);
// pushstack(1);
// pushstack(3);
// pushstack(4);
// pushstack(10);
// pushstack(9);
// pushstack(2);
// popstack();
// popstack();
// popstack();
// popstack();
// popstack();
// popstack();
// popstack();
// popstack();

function bubblesort(data){
    console.log("Array Before : ",data);
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data.length;j++){
            if(data[j]>data[j+1]){
                console.log(" = ",data)
                temp = data[j+1];
                data[j+1] = data[j];
                data[j] = temp
            }
        }
    }
    console.log("Array After : ",data);
}

let arr = [7,1,8,2,9,3,4,6,5];
// bubblesort(arr) 

function reverseString(data,start,end){
    // console.log("start[data] : ",data[start]," start : ",start," End[data] : ",data[end]," end : ",end)
    if(start<end){
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        reverseString(data,start+1,end-1)
    }
}

let str = [9,7,5,3,1]
// console.log(str)
// reverseString(str,0,str.length-1)
// console.log(str);