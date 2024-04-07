function LeapYear(y) {
    if (y % 4 === 0) {
        if (y % 100 === 0) {
            if (y % 400 === 0) {
                return 'its a leap';
            } 
            else {
                return 'not a leap';
            }
        } 
        else {
            return 'its a leap';
        }
    } 
    else {
        return 'not a leap';
    }
}



function TicketPricing(age){
    switch (true) {
        case age <= 12:
            console.log("price is $10")
            break;
        case age >=13 && age <= 17:
            console.log("price is $15")
            break;
        case age >= 18:
            console.log("price is $20")
            break;  
        default:
            console.log("Enter your correct Age!!")
            break;
    }
}


function power(x, n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 1 / power(x, -n);
    } else {
        return x * power(x, n - 1);
    }
}



function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}