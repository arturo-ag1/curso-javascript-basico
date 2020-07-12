var uno = "30";
var dos = 20;

//If común
if(uno != dos){
    console.log("If normal")
}

//If - else
if(uno == dos){
    console.log("Prueba, no entra aquí")
}else{
    console.log("If else")
}

//If - else - if - else
if( uno == "31"){
    console.log("Prueba, no entra aquí")
}else if(dos == 21){
    console.log("Prueba, no entra aquí")
}else{
    console.log("Prueba, si entra aqui")
}

switch(uno){
    case "28":
        console.log("Case 28")
        break
    case "29":
        console.log("Case 29")
        break
    case "30":
        console.log("Case 30")
        break
}