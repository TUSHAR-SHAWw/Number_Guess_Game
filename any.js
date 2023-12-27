let num = [4, 45, 5, 2, 6, 78, 65, 7, 8, 9, 10];
let newnum=[];
for(let i = 0; i < (num.length-1);i++) {
for(key in num) {
  key=parseInt(key);
  if(num[key] > num[(key+1)]) {
    let temp = num[key];
    num[key] = num[(key+1)];
    num[(key+1)] = temp; 
  }
}
}
console.log(newnum,num);
