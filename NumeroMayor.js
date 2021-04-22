var num1 = prompt("Ingrese el primer digito: ");
var num2 = prompt("Ingrese el segundo digito: ");
var num3 = prompt("Ingrese el tercer digito: ");


if ( num1 > num2){
	
    if (num1 > num3){
        document.write("El número mayor es: " + num1);
    }else{
        document.write("el número mayor es: " + num3);
    }
}else if(num2 > num3){
	
document.write("El número mayor es: " + num2 );
}else{
    document.write(" El número mayor es: " + num3);
}


