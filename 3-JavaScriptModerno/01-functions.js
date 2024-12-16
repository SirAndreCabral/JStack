function minhaFunction() {
    //Este
    this.name = 'Mateus'

    const minhaArrowFunction = () => {
        this.lastname = 'Silva'

    }

    minhaArrowFunction();
};

console.log('====================================');
console.log(new minhaFunction());
console.log('====================================');

console.log('====================================');
soma(1, 2, 3, 4, 5, 6, 7, "Mateus");
console.log('====================================');

function soma() {
    console.log(Object.values(arguments))
}

// COMO RECEBER MAIS DE UM PARAMETRO NA FUNÇÃO
function soma2(primeiroParametro, ...argumentos) {
    console.log('=======PrimeiroParametro============');
    console.log({ primeiroParametro });
    console.log('====================================');
    console.log('==============Outros================');
    console.log({ argumentos });
    console.log('====================================');
}

soma2(1, 2, 3, 4, 5, 6, 7, "Mateus");
// DIFERENÇA ENTRE FUNÇÃO COM CHAVE E FUNÇÃO COM PARENTESE
// de const soma = () => { } para const soma = () => ();

const algumNumero = 10;
const string = () => algumNumero >= 10 ? "Maior igual a 10" : "Menor que 10"
console.log(string());

const algumNumeroDois = 8
const stringdois = () => (
    algumNumeroDois >= 10 ?
        "Maior igual a 10" : "Menor que 10"
);
console.log(stringdois());

// Retorno direto
const stringtres = () => "Hello World!";
console.log(soma());

// RETORNANDO UM OBJETO INDIRETAMENTE
const getUser = () => {
    return {
        id: "123",
        name: "Mateus"
    };
};
console.log(getUser());

//RETORNANDO UM OBJETO DIRETAMENTE
const getUserDois = () => ({
    id: '123',
    name: 'Mateus'
});
console.log(getUserDois());
