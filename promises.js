const cart = ["shoes", "pants", "shirts"];
const orderId = createOrder(cart);
console.log(orderId);

orderId
.then((data)=>{
    console.log(orderId);
    return data;
})
.then((order) => {
    console.log(order);
    const payment = proceedToPayment(order);
    return payment;
})
.then((paymentInfo)=>{
    console.log(paymentInfo);
    const final = orderSummaryDisplay(paymentInfo);
    return final;
})
.then((final) => {
    console.log(final);
})
.catch((error)=>{
    console.log(error);
})

function createOrder(cart){
    const promise = new Promise((resolve,reject) => {
        if (!validCart(cart)) {
            const error = new Error("Invalid cart");
            reject(error);
        }
        const orderId = "1234";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 3000)
        }
    });
    return promise;
}

function validCart(cart){
    if (cart) {
        return true;
    }
}

function proceedToPayment(order){
    const promise = new Promise((resolve, reject)=>{
        if (order) {
            setTimeout(()=>{
                resolve("payment done");
            }, 3000);    
        }
    })
    return promise;
}

function orderSummaryDisplay(paymentInfo){
    const promise = new Promise((resolve,reject)=>{
        resolve("Success");
    })

    return promise;
}