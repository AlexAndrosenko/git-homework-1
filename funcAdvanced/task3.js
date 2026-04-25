function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Деномітатор дорівнює нулю')
    }
    if (!Number.isFinite(numerator) || !Number.isFinite(denominator)) {
        throw new Error('Один з аргументів не число')
    }
    return numerator / denominator
}

//case 1
try {
    console.log(divide(6, 3))
} catch (error) {
    console.error(error.message)
} finally {
    console.log('Робота завершена')
}
//case 2
try {
    console.log(divide(10, 0))
} catch (error) {
    console.error(error.message)
} finally {
    console.log('Робота завершена')
}
//case 3
try {
    console.log(divide(11, 'justAString'))
} catch (error) {
    console.error(error.message)
} finally {
    console.log('Робота завершена')
}
