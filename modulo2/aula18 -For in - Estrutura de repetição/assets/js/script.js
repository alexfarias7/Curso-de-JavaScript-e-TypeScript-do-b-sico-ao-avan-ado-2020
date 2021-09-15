const elementos =[
    {tag:'p', texto:'exemplo de texto',},
    {tag:'div', texto:'frase 2',},
    {tag:'section', texto:'frase 3',},
    {tag:'footer', texto:'frase 4',},
];

const container = document.querySelector('.container');
const div = document.createElement('div');


for( let i=0; i<elementos.length; i++){
    let {tag, texto}= elementos[i]
    let tagCriada =  document.createElement(tag)
    //tagCriada.innerHTML=texto
    let textoNode =document.createTextNode(texto)
    tagCriada.appendChild(textoNode)
    div.appendChild(tagCriada)

}
container.appendChild(div)

