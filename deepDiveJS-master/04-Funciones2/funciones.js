let concatenar = function(...args){
    return args.join('')
}

function invocarFunciones(func, func2){
    if(func2== undefined){
        return func()
    }else{
        return func() + func2()
    }
}

function creadorDeIncrementos(num) {
    let incrementaPor2 = function(x){
        return x + num;
    }
    return incrementaPor2
}
function invocacionUnica (func){
    let veces = 0
    function funcRetorno(){
        if(veces == 0)
        func()
        veces++;
    }
    return funcRetorno
}
function objetoConClousure(){
    let valor = 0
    const obj= {
        incremento: function(){
            valor++
        },
        incrementoPor10:function(){
            valor +=10
        },
        pedirValor: function(){
            return valor
        },
        cambiarValor: function(nuevoValor){
            valor = nuevoValor
        }
    };
    return obj;
}

function ListaDeFuncionesInvitados(arr, cod){
    const arrFunciones = []
    for (let nombre of arr){
        arrFunciones.push(function(intentoCod){
            if (intentoCod == cod){
                return nombre;
            }
            return 'código secreto: invalido'
        })
    }
    return arrFunciones
}
function armarListaDeInvitados (){
    let listaOficial =['Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo']
    return listaOficial
    
}
