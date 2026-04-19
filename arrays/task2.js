const originalArray = [1, 2, 3, 4, 5]
const newArray = originalArray.map(function (element, index) {
    return element * index
})
console.log(newArray)
