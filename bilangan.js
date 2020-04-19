function bilangan(x)
{

var x;
var jenis = [] ;
var prima ;

    if (x == 0) {
        jenis.push("nol");
    }
    else {
    for (i=2;i<x;i++){
        if (x%i==0) {
        prima = 0 ;break;
        }
        else {
        prima = 1;
        }
        }
    
    if (prima) {
        jenis.push("prima");
            }
            else {
            jenis.push("komposit");
            }
        }
    
    if (x % 2 == 0) {
        jenis.push("genap");
    }
        else {
        jenis.push("ganjil"); 
        }

    if (x < 0) {
        jenis.push("negatif");
    }
        else {
        jenis.push("cacah"); 
        }

    if (x % 1 == 0) {
    
    jenis.push("bulat");
    }
    else {
    jenis.push("pecahan"); 
    }

    if (x !== 0) {
        jenis.push("asli");
    }

    return jenis;
}

console.log(bilangan(11));
