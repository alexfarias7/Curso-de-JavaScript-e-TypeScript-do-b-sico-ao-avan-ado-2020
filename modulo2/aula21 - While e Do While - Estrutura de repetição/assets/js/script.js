const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')

/* for (let p of ps){
    console.log(p)
} */

const estilosBody = getComputedStyle(document.body);
const backBody = estilosBody.backgroundColor
console.log(backBody)

for (let  p of ps){
    p.style.backgroundColor = backBody
    p.style.color= '#ffffff'
}