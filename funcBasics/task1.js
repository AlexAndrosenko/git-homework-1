//declaration
function square(width, height) {
    return width * height
}
console.log(square(3, 5))
//expression
const squareExp = function (width, height) {
    return width * height
}
console.log(squareExp(2, 6))
//arrow
const squareArrow = (width, height) => width * height
console.log(squareArrow(4, 7))
