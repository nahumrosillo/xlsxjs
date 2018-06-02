pe = require('parse-error');

//	Allow create async function
promising = function(promise, error) {
    return promise
        .then(data => {
            return [null, data];
        }).catch(err =>
            [Error(error, pe(err))]
        );
};

//  Debug function
PrintAndThrowException = function(err_message, log){
    if(log === true){
        console.error(err_message);
    }
    throw new Error(err_message);
};