//FUNÇÃO RECURSIVA
//é uma função que se chama ela mesma

function recursiva(max) {
    console.log(max)
    if (max >= 10) return
    max++

    recursiva(max)
}
recursiva(0)
// a recursividade ten um limite, chegando ao limite o motor do javascript não vai mais eexecutar