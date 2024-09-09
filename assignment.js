const promiseAfterSeconds = (seconds) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("resolved")
        },seconds*1000)
    })
    return promise;
}

const response = promiseAfterSeconds(2);
response.then((e)=>{
    console.log(e)
})