console.clear()

arr1 = [2,4,6,8];
console.log("Array 1 :",arr1);
function traverse($data){
    $arr2 = [];
    for($i = 0;$i<$data.length;$i++){
        console.log($data[$i]);
        $arr2[$i] =multiplyByTwoPlus10($data[$i]);
    }
    console.log("Result",$arr2);
}

traverse(arr1);

function multiplyByTwoPlus10($a){
    return ($a*2)+10;
}
