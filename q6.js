var valorMaximo = 9;
var valorMinimo = 5;

var ChecarValor = valorMaximo - valorMinimo;

//<, >, <=, >=, ==, !=

if (valorMaximo < valorMinimo){        

    if (ChecarValor > 100){
        console.log("Não Comprarei");
    }else if (ChecarValor == 20){
        console.log("Comprarei - Troco Menor que 20.00");
    }else if (ChecarValor == 4){
        console.log("Comprarei - Troco de 4.00");
    }else{
        console.log("Comprarei");
    }

}else if (valorCompra == meuDinheiro){
    console.log("Comprarei");
}else{
    console.log("Não comprarei");
}