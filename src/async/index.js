const doSomeThingAsync = () => {
    return new Promise((resolve, reject) => {
        (true) // IF TERNARIO
        ? setTimeout(() => resolve('Do Some Thing Async'), 3000)
        : reject(new Error('Test Error'))
    });
};

const doSomeThing = async () => {
    const someting = await doSomeThingAsync();
    console.log(someting);
};

console.log('Antes 1');
doSomeThing();
console.log('Despues 1');

const anotherFunction = async () => {
    try {
        const something = await doSomeThingAsync();
        console.log(something);
    } catch (error) { 
        console.error(error);
    }
};

console.log('Antes 2');
anotherFunction();
console.log('Despues 2');