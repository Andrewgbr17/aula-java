function soma() {
    let n1 = number(window.prompt('Digite um número: '))
    let n2 = Number(window.prompt('Digite outro número: '))
    somando = n1 + n2

    let resultado = document.querySelector('section#resultado')
    resultado.innerHTML = `<p>A soma entre <mark>${n1}</mark> e <mark>${n2}<mark> é igual a <strong>${somando}<strong/>!>/p>`
}