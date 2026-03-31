function numDecrease(num){
    console.log(num);
    num = num - 1;;
    if (num  === 0){
        return false;
    }
    return numDecrease(num);
    }
numDecrease(5);