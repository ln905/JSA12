var n = prompt("Input the value of number")

function findEven(){
    if (n>=4 && n<=20){
        for (let i=4; i<=n; i++){
            if (i%2==0){
                console.log(i)
            }
        }
    } else {
        alert('The number value must be from 4 to 20')    }
}

findEven(n)