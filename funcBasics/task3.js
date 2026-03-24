function checkOrder(available, ordered) {
    if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    }
    else if (ordered === 0){
        return "Your order is empty";
    }
    else {
        return "Your order is accepted";
    }
}


 function checkOrderSwitch(available, ordered){
    switch(true){
        case (ordered > available):
            return "Your order is too large, we don’t have enough goods.";
        case (ordered === 0):
            return "Your order is empty";
        case (ordered <= available):
            return "Your order is accepted";
    }
}


