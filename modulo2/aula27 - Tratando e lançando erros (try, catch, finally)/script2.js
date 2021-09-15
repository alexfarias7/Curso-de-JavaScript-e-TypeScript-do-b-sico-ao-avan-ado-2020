try {
    console.log('abri um arquivo');
    console.log('manipulei o arquivo e gerou erro');
    //console.log(a)
    console.log('fechei o arquivo')

    try{
     console.log(e)
    }catch(error){
        console.log('deu erro')
    }
    finally{
        console.log('mais um finnaly')
    }

    // é executada quando não há erros
} catch (error) {
    // é executada quando há erros
    console.log('tratando o erro')
} finally {
    //executada sempre
    console.log('finally: sempre executado')
}