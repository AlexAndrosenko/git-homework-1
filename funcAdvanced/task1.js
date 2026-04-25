function handleNum(a, b, c) {
    if (a % 2 === 0) {
        return b()
    } else {
        return c()
    }
}

function evenNum() {
    return console.log('number is even')
}

function oddNum() {
    return console.log('number is odd')
}

handleNum(213, evenNum, oddNum)
