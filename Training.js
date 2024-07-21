let cinta = prompt("apakah kamu sayang dan cinta sama saya? ")
switch (cinta) {
    case "tidak":
        for(let dia = 1; dia <= 100; dia++) {
            console.log("jangan tinggalkan aku")
        }
        break;
    case "iya":
        console.log("aku juga sayang sama kamu")
        break;
    default:
        console.log("ya udah tidak apa-apa");
}