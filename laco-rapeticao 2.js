let frutas = ['Maça', 'Banana', 'Laranja'];
frutas.splice(2, 1, 'Manga', 'Kiwi'); //Na posição 2 (laranja), cortar 1 registro e inserir 'Manga' e 'Kiwi'
let verduras = ['Cenoura','Alface'];
let alimentos = frutas.concat(verduras);
console.log(alimentos);