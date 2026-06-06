const arr1 = (target) => {
  const arr = target

  return arr.filter(v => v !== 5)
}
console.log(arr1([1,2,3,4,5,6,7]))