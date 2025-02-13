console.clear();

// Count number of even and odd elements in an array
function countEvenOdd(data) {
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 == 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }
  console.log(
    "Total Odd Numbers : ",
    oddCount,
    " | Total Even Count : ",
    evenCount
  );
}
let arr1 = [5, 4, 3, 2, 6, 7, 8, 9, 1];
// countEvenOdd(arr1);

// Average numbers in array
function averageNumber(data) {
  let count = 0;
  let len = data.length;
  for (let i = 0; i < data.length; i++) {
    count += data[i];
  }

  console.log("Average : ", count / len);
}

let arr2 = [5, 6, 7, 8, 9, 3, 4];
// averageNumber(arr2);

function numberToWord(num) {
  if (isNaN(num)) {
    console.log("Enter Only Number");
  } else {
    switch (Number(num)) {
      case 0:
        console.log("Zero");
        break;
      case 1:
        console.log("One");
        break;
      case 2:
        console.log("two");
        break;
      case 3:
        console.log("Three");
        break;
      case 4:
        console.log("Four");
        break;
      case 5:
        console.log("Five");
        break;
      case 6:
        console.log("Six");
        break;
      case 7:
        console.log("OnSevene");
        break;
      case 8:
        console.log("Eight");
        break;
      case 9:
        console.log("Nine");
        break;
      default:
        console.log("Invalid Number");
    }
  }
}

function convertNum(num) {
  for (let i = 0; i < num.length; i++) {
    numberToWord(num[i]);
  }
}

convertNum("532011");
