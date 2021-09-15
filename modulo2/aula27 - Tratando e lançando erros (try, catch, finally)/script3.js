function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('esperando a instancia de date')
       // console.log('não é' )
    }
    if(!data){
        data= new Date()
    }
    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false

    }
    )
}

//retornaHora(new Date)
try{
const data2 = new Date('01-01-1980 12:58:12')
const hora = retornaHora(data2)
console.log(hora)
}catch(error){
//tra o erro
//console.log(error)
}finally{
    console.log('tenha um bom dia')
}
