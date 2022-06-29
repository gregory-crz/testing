
function setPropsOnObj(obj) {
    obj.p=5 
    obj['plataforma']=5   
    obj['proximo']= function(num) {
        numero = num +1
        return numero;
    } 

    obj.la = {
        clave:{
            secreta:{
                es:404
            }
        }
    }
}

function setPropsOnArr(array){
    array.hola= function(){
        return 'Hola!';
    }
    array ['river']= 'plate';
    array[0]=5;
    array['doble']=function(numeros){
        numero=numeros*2
        return numero;
    }
};
function functionObject (){
    return 'Soy una función con propiedades!';
};

function setPropsOnFunc(functionObject){
    functionObject.year = '2017'
    functionObject.mitad= function(num){
        numero= (num/2)
        return numero
    }
    functionObject.prototype.helloWorld= function(){
        return 'Hello World'
    }
}
