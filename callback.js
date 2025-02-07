const greetfn = (name) => {
    console.log(`Hello,${name}!`);
}
function processName(callback) {
    const name = "bhavitha";
    callback(name);
}
processName(greetfn);