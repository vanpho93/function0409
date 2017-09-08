function inHinh1(soDong) {
    for(let i = 0; i < soDong; i++) {
        let str = '';
        for(let j = 0; j < soDong; j++) {
            const dk = j >= soDong -1 - i;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function inHinh2(soDong) {
    for(let i = 0; i < soDong; i++) {
        let str = '';
        for(let j = 0; j < soDong; j++) {
            const dk = j <= i;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function inHinh3(soDong) {
    for(let i = 0; i < soDong; i++) {
        let str = '';
        for(let j = 0; j < soDong; j++) {
            const dk = j >= i;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function inHinh4(soDong) {
    for(let i = 0; i < soDong; i++) {
        let str = '';
        const soCot = soDong * 2;
        for(let j = 0; j < soCot; j++) {
            const dk = Math.abs(j - (soDong - 1)) <= i;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function inHinh(soDong, checkPoint) {
    for(let i = 0; i < soDong; i++) {
        let str = '';
        for(let j = 0; j < soDong; j++) {
            const dk = checkPoint(i, j, soDong);
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

inHinh(4, (i, j, soDong) => j >= soDong - 1 - i);
inHinh(5, (i, j) => j <= i);
inHinh(5, (i, j) => j >= i);
