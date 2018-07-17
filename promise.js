/* var iPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('See, I promised.');
        //reject(':-(');
    }, 2000);
});
iPromise.then(
    message => {
        console.log(`Voila: ${message}`);
    },
    errorMessage => {
        console.log(`Error: ${errorMessage}`);
    }
);
 */
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 2000);
    });
}; //Better way to handle error cases while chaining Promises is:
//When first promise fails then output isn't as expected
/* asyncAdd(4, '5')
    .then(
        result => {
            console.log(`Result: ${result}`);
            return asyncAdd(result, 91);
        },
        errorMessage => {
            console.log(errorMessage);
        }
    )
    .then(
        result => {
            console.log(
                `Result of first addition plus ninety one is : ${result}`
            );
        },
        errorMessage => {
            console.log(errorMessage);
        }
    ) */ asyncAdd(
    4,
    '5'
)
    .then(result => {
        console.log(`Result: ${result}`);
        return asyncAdd(result, 91);
    })
    .then(result => {
        console.log(`Result of first addition plus ninety one is : ${result}`);
    })
    .catch(errorMessage => {
        console.log(errorMessage);
    });
