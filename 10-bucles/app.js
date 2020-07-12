//Ciclo for
var i = 0
for(i = 0; i < 5; i++){
    console.log("i: "+i)
}

//Ciclo while
var encontrado = true
i = 0
while(encontrado){
    i++
    if(i == 5){
        console.log("Ciclo while termina")
        encontrado = false
    }else{
        i+=1
    }
}

//Ciclo do-while
var encontrado = true
i = 0
do{
    i++
    if(i == 5){
        console.log("Ciclo while termina")
        encontrado = false
    }else{
        i+=1
    }
}while(encontrado)
