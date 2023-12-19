/* function sumar(){
    let dato1 = document.getElementById('dato1').value;
    let dato2 = document.getElementById('dato2').value;
    const solucion = parseInt(dato1) + parseInt(dato2)
    console.log(solucion)
    resultado.innerHTML = solucion;
} */
function operaciones(){
    
    let num1 = document.getElementById('num1').value;
    document.getElementById('num1').value = '';
    document.getElementById('num1').classList.add('is-valid')

    let num2 = document.getElementById('num2').value;
    document.getElementById('num2').value = '';
    document.getElementById('num2').classList.add('is-valid')

    let operaciones = document.getElementById('operacion').value;
    document.getElementById('operacion').value = '';
    document.getElementById('operacion').classList.add('is-valid')
    
    console.log(resultado);

    if(num1 != "" && num2 != "" && operaciones != "")
    {
        console.log("EL elemento no esta vacio, continue con el proceso")
        if(operaciones == 'suma'){
            var resultado = parseInt(num1) + parseInt(num2);
        }
        else if(operaciones == 'resta'){
            var resultado = parseInt(num1) - parseInt(num2);
        }
        else if(operaciones == 'multi'){
            var resultado = parseInt(num1) * parseInt(num2);
        }
        else if(operaciones == 'divi'){
            var resultado = parseInt(num1) / parseInt(num2);
        }
        else if(operaciones == 'modulo'){
            var resultado = parseInt(num1) ** parseInt(num2);
        } 
    }
    else{
        console.log("Te hacen falta campos por llenar");
        if(operaciones == ''){
            document.getElementById('operacion').focus()
            document.getElementById('operacion').classList.add('is-invalid')
        }
        else if(num1 == ''){
            document.getElementById('num1').focus()
            document.getElementById('num1').classList.add('is-invalid')
        }
        else if(num2 == ''){
            document.getElementById('num2').focus()
            document.getElementById('num2').classList.add('is-invalid')
        }
    }
    solucion.innerHTML = `El resultado de ${num1} ${operaciones} ${num2} es de: ${resultado}`
}




/* && = AND
   [] = OR */
