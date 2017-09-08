const a = console.log;

a('123');

function getLog() {
    return console.log;
}

getLog()(123);

function doSth(x) {
    x(3); //console.log(3);
}

doSth(console.log);

