console.clear()

$arr1 = [3,5,7,9];
console.log("Array 1 :",$arr1);
function traverse($data){
    $arr2 = [];
    for($i = 0;$i<$data.length;$i++){
        $arr2[$i] =findFactorial($data[$i]);
    }
    console.log("Factorial : ",$arr2);
}

traverse($arr1);

function findFactorial($a){
    if($a<=0){
        return 1
    }
    return $a * findFactorial($a-1);
}
