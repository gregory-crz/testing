function crearCalculadora(){
    let calculadora={
        almacenador: 0,
        valor:function(){
            return this.almacenador
        },
        sumar: function(num){
            this.almacenador = this.almacenador + num
        },
        restar: function(num){
            this.almacenador = this.almacenador - num
        },
        reset : function(){
            this.almacenador = 0
        }
    }
    return calculadora
}