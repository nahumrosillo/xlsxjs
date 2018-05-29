pe = require('parse-error');

//	Create a promise
promising = function(promise, error) {
    return promise
        .then(data => {
            return [null, data];
        }).catch(err =>
            [Error(error, pe(err))]
        );
};

PrintAndThrowException = function(err_message, log){ // TE stands for Throw Error
    if(log === true){
        console.error(err_message);
    }

    throw new Error(err_message);
};