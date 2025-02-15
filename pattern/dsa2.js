console.clear();

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
bubblesort(arr) 