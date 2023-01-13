console.log("Hola Mundo Como estan");
var variable=true;
const constante=5;
console.log(constante);
variable=false;
console.log(variable);

//Operadores Arismeticos
var Num1 = 15;
var Num2 = 3;
var vNom ="Juan Carlos";
var vApellidos ="Osses Vidal";
console.log("Suma: ",Num1+Num2);
console.log("Resta: ",Num1-Num2);
console.log("Division: ",Num1/Num2);
console.log("Multiplicacion: ",Num1*Num2);
console.log("Nombre Completo: "+ vNom+ " " + vApellidos);
console.log("Resto de Divicion: ",Num1%2);

//Sentencias Condicionales

if (Num1%2==0) {
    console.log("El ",Num1, "Es numero Par");
}

else {
    console.log("El ",Num1, "Es numero impar");
}

//Operadores Comparacion
var vGlosa = "El Numero: ";
if (Num1 > Num2) {
    console.log(vGlosa,Num1,"Es Mayor que",Num2);
}

else if(Num1 < Num2){
    console.log(vGlosa,Num2,"Es menor que",Num1);
}

else {
    console.log(vGlosa,Num1, "Es igual a", Num2);
}

//Sumar dos numeros
function Suma(){
    var vfNum1 = document.getElementById("vNum1").value;
    var vfNum2 = document.getElementById("vNum2").value;

    if(vfNum1==="" || vfNum2==="") {
        alert("Debe completar todos los Datos");
    }

    else{
        var vfSuma = parseInt(vfNum1) + parseInt(vfNum2);
        document.getElementById("vResultado").value = vfSuma;
    }
} 
