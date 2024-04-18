//ARRAY
const alunos = [
     "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",

    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

// alunos.slice(0,10); //SLICE NÃO ALETAR ORIGINAL DEVE ER CRIADO CONSTÁRA ISSO
// alunos.slice(10,20);
// console.log(alunos);

const sala1 = alunos.slice(0,10); //CONST CRIADA AGORA ELE OBEDECE
// const sala2 = alunos.slice(10);
console.log(sala1);
// console.log(sala2);

// const sala1 = alunos.slice(0, alunos.length / 2); //USANDO LENGTH PARA NAO FICAR CONTANDO METADE
// const sala2 = alunos.slice(alunos.length / 2);
// console.log(sala1);
// console.log(sala2);