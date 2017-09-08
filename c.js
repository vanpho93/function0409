/*

hinh 1

    *
   **
  ***
 ****
*****
*/

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

/*

hinh 2

*
**
***
****
*****
*/

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

/*
soDong = 4

   *
  ***
 *****
*******
*/

function inHinh3(soDong) {
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

// inHinh3(4);
/*
hinh 4

*****
 ****
  ***
   **
    *

*/

function inHinh4(soDong) {
    for(let i = 0; i < soDong; i++) {
        let str = '';
        for(let j = 0; j < soDong; j++) {
            const dk = j >= i;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

inHinh4(5);
