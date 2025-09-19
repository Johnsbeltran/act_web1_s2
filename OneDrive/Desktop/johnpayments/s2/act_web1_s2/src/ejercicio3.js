let numero = 11;

if (numero >= 0 && numero <= 12) {
    console.log("Niño");
} else if (numero >= 13 && numero <= 17) {
    console.log("Adolescente");
} else if (numero >= 18 && numero <= 64) {
    console.log("Adulto");
} else if (numero >= 65) {
    console.log("Anciano");
} else {
    console.log("Error");
}