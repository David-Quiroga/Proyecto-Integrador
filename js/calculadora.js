 function Press()
{
    var largo=parseInt(document.getElementById('largo').value);
    console.log(largo);
    var ancho=parseInt(document.getElementById('ancho').value);
    var profundidadMin=parseInt(document.getElementById('prof-min').value);
    var profundidadMax=parseInt(document.getElementById('prof-max').value);
    var Result;
    Result= ((profundidadMin+profundidadMax)/2)*largo*ancho*1000
    var agua
    agua=Result
    var cloro
    cloro= (agua*2)/10000
    var bromo
    bromo= (20*agua)/1000
    var sal
    sal= (5*agua)/1000
    if ((ancho<60)&&(largo<60)&&(profundidadMax<60)&&(profundidadMin<60)){
    alert("La piscina debe ser llenada con "+agua+" Litros de agua"+
    "\n"+
    "\nSe debe agregar: "+
    "\n"+
    "\n"+cloro+" litros de Cloro"+
    "\n"+
    "\n"+bromo+" kilogramos de Bromo"+
    "\n"+
    "\n"+sal+" kilogramos de Sal");
    }
    else
    alert("Valor maximo excedido, porfavor vuelva a ingresar los datos")
}