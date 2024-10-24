let g = prompt('ВВедите число');

for (let c = 2; c <= g; c++) {
    let sum = 1

    for (let r = 2; r <= Math.sqrt(c); r++) {
        
        
        if (c % r == 0) {
            sum += r + (r === c / r ? 0 : c / r)
        }
    }


    if (sum === c && c != 1)
        console.log(sum)

}
