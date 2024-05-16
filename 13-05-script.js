function inicio() {
    let nome = window.prompt( 'Qual é o seu nome?') 
    window.alert(`Olá, ${nome}! É um prazer te conhecer!`)
}

    function media() {
    let aluno = window. prompt( 'Qual é o nome do aluno?')
    let nota1 = Number (window.prompt(`Qual foi a primeira nota dele(a)?` ))
    let nota2 = Number (window.prompt(`Qual foi a segunda nota dele(a)?` ))
    let nota3 = Number (window.prompt(`Qual foi a terceira nota dele(a)?` ))
    let media = (notal+nota2+nota3)/3

    let final = document.getElementById( 'jogarnohtml')
    final.innerHTML = `<p>Calculando a média final de <mark>${aluno}</mark> As notas obtidas foram <mark>
    ${nota1}, ${nota2} e ${nota3}</mark> A média final será <mark>${media. toFixed(1)}</mark>.</p>`
    }
