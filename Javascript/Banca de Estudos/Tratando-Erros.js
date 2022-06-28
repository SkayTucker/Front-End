function validaArray(arr, num) {
    try {
    if(!arr && num) throw new ReferenceError("Envie os parametros");

    if(typeof arr !== 'object')
    throw new TypeError("tipo inválido");
    
    if(typeof arr !== 'number') 
    throw new TypeError("Num precisa ser do tipo numero");

    if(arr.length !== num)
     throw new RangeError("Tamanho inválido");

    return arr;
    }catch(e) {
    if(e instanceof ReferenceError) {
        console.log("Este erro é um ReferenceError!")
        console.log(e.message)
    } else if (e instanceof TypeError) {
        console.log("Este erro é um TypeError!")
        console.log(e.message)
    }else if (e instanceof RangeError) {
        console.log("Este erro é um RangeError!")
        console.log(e.message)
    } else {
        console.log("Tipo de Erro não esperado:" + e);
    }
            
   }
}

console.log(validaArray([1,2,3,4,5], 2));
