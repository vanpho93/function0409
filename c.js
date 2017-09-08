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
            str += (j >= soDong -1 - i) ? '*' : ' ';
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
            str += (j <= i) ? '*' : ' ';
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