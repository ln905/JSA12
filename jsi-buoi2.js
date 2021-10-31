function bai1() {
    let arr1 = [4, 0];
    let arr_clone1 = [1,2,...arr1];
    console.log(arr_clone1);
    let arr_clone2 = [1, 2, arr1];
    console.log(arr_clone2);
}

function bai2() {
    let arr1 = [1,0,2,3,4];
    let arr2 = [3,5,6,7,8,13];
    let sum_arr = [];
    if (arr1.length < arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
           sum_arr.push(arr1[i]+arr2[i]) 
        }
        for (let k = arr1.length; k<arr2.length; k++) {
            sum_arr.push(arr2[k])
        }
        console.log(sum_arr);
    } 
    else if (arr1.length > arr2.length) {
        for (let i = 0; i < arr2.length; i++){
            sum_arr.push(arr1[i]+arr2[i])
        }
        for (let k = arr2.length; k<arr1.length; k++) {
            sum_arr.push(arr1[k])
        }
        console.log(sum_arr);
    }
    else console.log(arr1)
}

function bai3(){
    let arr1=[1,2,3];
    let arr2=[2,30,1];
    num=0;
    for (let i= 0; i < arr2.length; i++){
        for (let j = 0; j < arr1.length;j++){
            if (arr1[j]!==arr2[i]){
               num = num + 1
               console.log(num);
            }
        }
        if (num == arr1.length){
            num = 0
            arr1.push(arr2[i])
        } else num=0
    }
    console.log(arr1);
}
