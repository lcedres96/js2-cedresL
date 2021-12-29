function cotizarCredito() {
    alert("Calculador de prestamos | ReveiceEasy |");
    let nombre = prompt('Ingresa su nombre completo (*)');
    if (nombre=='') {
        alert(' (*) Campo obligatorio');
        cotizarCredito();
    }else{
        if (nombre==null) {
            alert('Nos vemos pronto | ReceivEasy |');
        } else {
            alert('Buen dia '+nombre+' esta funcion solo es una calculadora de prestamos, la misma no garantiza que sea aprobado. '+
            ' Para solicitar la aprobacion debe contactarse con un operador.');
            calculo();
        }

    }
}

function calculo() {
    let montoTxt = prompt('Ingrese el monto del credito que necesita.'); 
    let monto =parseFloat(montoTxt);
    if (monto<=10000) {
        alert('El monto minimo a acreditar no puede ser menor a 10000');
        calculo();   
    }else{
        if (montoTxt==null) {
            alert('Nos vemos pronto | ReceivEasy |');
         }else{
            solicitarCuota(monto);
         }
    }
}

function solicitarCuota(monto) {
        let cuotasTxt = prompt('Ingrese la cantidad de cuotas.' + 'Pueden ser: | 6 | 12 | 18 | 24 |'); 
        let cuotas = parseInt(cuotasTxt); 
        if (cuotasTxt==null) {
            alert('Nos vemos pronto | ReceivEasy |');
         }else{
            interes=buscarInteres(cuotas);
            if (interes==-1) {
                alert('La cantidad de cuotas no corresponde con las opciones disponibles.');
                solicitarCuota(monto);   
            } else {
                let nuevoMonto=monto*interes
                let cuota=nuevoMonto/cuotas;
                alert('El monto final del credito seria $ '+nuevoMonto.toFixed(2)+' y quedaria en '+cuotas+' cuotas de $ '+cuota.toFixed(2));
            }  
            alert('Gracias por confiar en | ReceivEasy |')
        }
}

let a=11/10
let b=25/20
let c=27/20
let d=10/5

function buscarInteres(cuotas) {
    switch (cuotas) {
        case 6:
            return a;  
        case 12:
            return b
        case 18:
            return c;
        case 24:
            return d;           
        default:
            return -1; 
    }    
}
function calcularCuotas(monto,interes) {
    return nuevoMonto=monto+((interes*monto)/100);
}

