let getUserCb = (id, callback) => {
    var user = {
        id: 1,
        name: 'Aaaa'
    };

    setTimeout(() => {
        callback(user);
    }, 4000);
};

let getUserRet = id => {
    return (user = {
        id: 1,
        name: 'Aaaa'
    });
};

getUserCb(1, userParam => {
    console.log(`Called callback method: ${userParam.name}`);
});

console.log(`Called returning method: ${getUserRet(1).name}`);
