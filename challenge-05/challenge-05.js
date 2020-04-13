/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var aux = [1, 2, 3, 4, 5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function Retorna(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(Retorna(aux[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function RetornaComParametro(vetor, indice){
    return vetor[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var aleatoria = [1, true, 'true', null, 1.2];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(RetornaComParametro(aleatoria, 0));
console.log(RetornaComParametro(aleatoria, 1));
console.log(RetornaComParametro(aleatoria, 2));
console.log(RetornaComParametro(aleatoria, 3));
console.log(RetornaComParametro(aleatoria, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(livro){
    var objeto = {
        'livro1': {quantidadedePaginas: 1350, autor: 'Joao', editora: 'Saraiva'},
        'livro2': {quantidadedePaginas: 250, autor: 'Lucas', editora: 'Dracaena'},
        'livro3': {quantidadedePaginas: 120, autor: 'Raquel', editora: 'Vida Nova'}
    }
    if(!livro){
        return objeto;
    }else{
        return objeto[livro];
    }
    //return livro === undefined ? objeto : objeto.livro;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = 'livro1'
console.log('O livro ' + 'livro1 ' + 'tem ' + book(livro).quantidadedePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + livro + ' é ' + book(livro).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + livro + ' foi publicado pela editora ' + book(livro).editora + '.');
