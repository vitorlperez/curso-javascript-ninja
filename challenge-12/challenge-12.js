(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    'name': 'Vitor',
    'lastname': 'Rosario',
    'age': 20
}
console.log( 'Propriedades de "person":');

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person))

/*
Crie um array vazio chamado `books`.
*/
var books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({'name': 'A cruzada secreta', 'pages': 300});
books.push({'name':'hackeado', 'pages': 100});
books.push({'name': 'Biblia', 'pages': 1500})
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log(JSON.stringify(books));

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log(books.pop())

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/

console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
books = JSON.stringify(books)
console.log(books)
/*
Converta os livros novamente para objeto.
*/

console.log( '\nAgora os livros são objetos novamente:' );
books = JSON.parse(books)
console.log(books)

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
var count = 1;
for(var pos in books){
    console.log('Livro ' + count + ':')
    for(var prop in books[pos]){
        console.log(prop + ': ' + books[pos][prop])
    }
    count++;
    console.log('')
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myname = ['V', 'i', 't', 'o', 'r']
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myname.join(''));

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
myname = myname.reverse();
console.log(myname.join(''));


console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
myname = myname.sort();
console.log(myname.join(''))
})();