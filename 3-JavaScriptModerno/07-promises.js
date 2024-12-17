const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Sucesso!")
        reject("Erro na request!");
    }, 2000);
});
console.log(apiCall);

// apiCall
//     .then((apiCall) => {
//         console.log(apiCall);
//     })
//     .catch((erro) => {
//         console.log(erro);
//     });

async function run() {
    try {
        const resposta = await apiCall;
        console.log(resposta);
    } catch (erro) {
        console.log(erro);
    }
}

run();
