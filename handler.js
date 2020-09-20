'use strict';

const timeout = async () => {
    return await new Promise(function (resolve, _reject) {
        setTimeout(resolve, 2000);
    });
};

module.exports.datesCollector = async event => {
    console.log('DEBUG 01', event);
    const date = new Date().toISOString();
    return {
        statusCode: 200,
        body: {
            date: date,
        },
    };
};

module.exports.ediCollector = async event => {
    console.log('DEBUG 02', event);
    await timeout();
    return {
        statusCode: 200,
        body: {
            items: [
                {
                    name: 'Lucas',
                    age: 24
                },
                {
                    name: 'Ferreira',
                    age: 23
                },
                {
                    name: 'dos Santos',
                    age: 25
                },
                {
                    name: 'Lucas Ferreira',
                    age: 27
                },
            ],
        },
    };
};

module.exports.ediStorage = async event => {
    console.log('DEBUG 03', event);
    await timeout();
    return {
        statusCode: 200,
        body: {
            message: 'Success 02',
        },
    };
};

module.exports.feedDate = async event => {
    console.log('DEBUG 04', event);
    return { date: 2 };
};

module.exports.endTask = async event => {
    console.log('DEBUG 05', event);
    return { message: 'SUCCESS' };
};
