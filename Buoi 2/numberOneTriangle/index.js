var arr = new Array();
function numberOneTriangle() {
    let line = prompt("How many rows you want to make?");
    if (line >0){
        for (var i = 1; i <= line; i++) {
            arr.push(1);
            let h1 = document.createElement("h1")
            h1.innerHTML = arr
            document.body.appendChild(h1)
        }
    } else {
        alert('The number must be >0')
        numberOneTriangle()
    }    
  }

numberOneTriangle()