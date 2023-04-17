// Quiz10
const arr1 =[1,2,4,5,45,6,9]
const arr2 =[1,2,6,8,9]
const findNum =(ar1,ar2)=>{
const newArr = []
for(let i=0;i<ar1.length;i++){
  if (ar2.includes(ar1[i])) {
    newArr.push(ar1[i]);
  }
}
console.log('findNum',newArr)
};findNum(arr1,arr2)

//