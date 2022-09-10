function addUpToNm(numb){
    var total = 0;
    for (let i = 1; i <= numb; i++) {
      total = total + i;
    }

    return total;
}

let t1 = performance.now();
var result = addUpToNm(1000000000);
let t2 = performance.now();
console.log('Time Elapsed: '+(t2-t1)/1000);


function addUpTo2(n){
    return n * (n-1)/2;
}

t1 = performance.now();
var result = addUpTo2(1000000000);
t2 = performance.now();
console.log('Time Elapsed: '+(t2-t1)/1000);