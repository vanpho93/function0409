function inSoChan() {
    for(let i = 0; i <= 100; i++) {
        const dk = i % 2 === 0;
        if(dk) console.log(i);
    }
}

function inSoLe() {
    for(let i = 0; i <= 100; i++) {
        const dk = i % 2 === 1;
        if(dk) console.log(i);
    }
}


function inSoChia3Du1() {
    for(let i = 0; i <= 100; i++) {
        const dk = i % 3 === 1;
        if(dk) console.log(i);
    }
}

function inSoChinhPhuong() {
    for(let i = 0; i <= 100; i++) {
        const dk = Math.sqrt(i) % 1 === 0;
        if(dk) console.log(i);
    }
}

function inSo(checkFunction) {
    for(let i = 0; i <= 100; i++) {
        const dk = checkFunction(i); //checkSoChan(0)
        if(dk) console.log(i);
    }
}

// arrow function

function checkSoLe(x) {
    return x % 2 === 1;
}

// inSo(x => x % 3 === 1);
// inSo(x => Math.sqrt(x) % 1 ===0);
// inSo(checkSoLe(1));
// console.log(console.log());
