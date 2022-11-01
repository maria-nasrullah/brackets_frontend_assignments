let number=5;
const arr=[];
for (let index = 1; index <= number; index++) {
  const subarr=[]
  for (let index1 = number; index1 > index; index1--) {
    subarr.push(' ');
  }
  for (let index2 = 0; index2 < index*2-1; index2++) {
    subarr.push("*" );  
  }
  arr.push(subarr)
}
for (let index = 1; index <= number-1; index++) {
  const subarr=[]
  for (let index1 = 1; index1 <= index; index1++) {
    subarr.push(' ');
  }
  for (let index2 = (number-index)*2-1; index2 > 0; index2--) {
    subarr.push('*');
  }
  arr.push(subarr)
}
arr.map(item=>console.log(...item));
