const array = [
    { name: "iPhone", price: 5000, quantity: 2 },
    { name: "MacBook Pro", price: 20000, quantity: 1 },
    { name: "Magic Mouse", price: 1000, quantity: 5 }
];

// .find (encontrar/buscar)
const find = array.find((product) => product.price > 1000);
console.log({ find });

// .findIndex (buscar index do array)
const findIndex = array.findIndex((product) => product.quantity > 4);
console.log({ findIndex })
console.log("Produto:", array[findIndex]);

// .some (algum item do array)
const some = array.some((product) => product.price > 1000);
console.log({ some });

// .every (todos os itens do array)
const every = array.every((product) => product.price > 1000);
console.log({ every });

// .map (mapeia) cria um novo array e permite inserir novos dados como o subtotal
const map = array.map((product) => {
    return {
        ...product,
        subtotal: product.quantity * product.price
    }
});
console.log({ map });

// .filter (filtra) cria um novo array com base na condição verdadeira da função
const filter = array.filter((product) => {
    return product.quantity > 1
});
console.log({ filter })

// .reduce (reduz para uma operação acumulativa do array)
const reduce = array.reduce((accumulator, current) => {
    console.log({ accumulator });

}, 0);
console.log({ reduce })