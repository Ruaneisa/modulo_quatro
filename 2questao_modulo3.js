const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (input) => {
    const number = parseInt(input);

    if(isNaN(number)){
        console.log("Insira um número válido.");
    } else{
        console.log(`Tabuada do ${number}`);

        for(let i = 0; i <= 10; i++){
            console.log(`${number} X ${i} = ${number * i}`);
        }
    }

    rl.close();
});

