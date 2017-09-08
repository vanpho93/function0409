// function in cac so chan trong khoang 0 - 100
// function in cac so le trong khoang 0 - 100
// function in cac so chia 3 du 1 trong khoang 0 - 100
// function in cac so chinh phuong trong khoang 0 - 100

// Math.sqrt(x) % 1
function inSoChan() {
    for(let i = 0; i <= 100; i++) {
        if(i % 2 === 0) console.log(i);
    }
}

function inSoLe() {
    for(let i = 0; i <= 100; i++) {
        if(i % 2 === 1) console.log(i);
    }
}

function inSoChia3Du1() {
    for(let i = 0; i <= 100; i++) {
        if(i % 3 === 1) console.log(i);
    }
}

function inSoChinhPhuong() {
    for(let i = 0; i <= 100; i++) {
        if(Math.sqrt(i) % 1 === 0) console.log(i);
    }
}

inSoChinhPhuong();
