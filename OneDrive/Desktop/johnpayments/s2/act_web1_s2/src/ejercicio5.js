let dia = "sabado";

switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Dia laborable");
        break;
    case "sabado":
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Error");
        break;
}