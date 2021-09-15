//METODOS ESTATICPS- são metodos que são acessados na clase sem instaciar a classe
//tb esse metoddos não estão disponiveis dentro na instancia
//não tem acesso aos dados da instancia
function teste(){
    console.log(' este é um teste')
}
class controleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume =0;
        teste();
    }
    //metodo  de instancia
    aumentarVolume(){
        this.volume ++;
    }
    diminuirvolume(){
        this.volume --
    }

    //metodo estatico
    static trocaPilha(){
        console.log('TROCA A PILHA')
    }
    static soma(x,y){
        //return x+y;
        console.log(this)
    }
}

const controle1 = new controleRemoto('lg');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controleRemoto.trocaPilha()
console.log(controle1);
console.log(Math.random())
console.log(controleRemoto.soma(2,4))
