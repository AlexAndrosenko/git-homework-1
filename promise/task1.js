function printText(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

printText("Hello", 1000);