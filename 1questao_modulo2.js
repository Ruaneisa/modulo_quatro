process.stdin.setEncoding("utf-8");

function askName() {
    process.stdout.write("Qual seu nome? \n");
}

function askAge() {
    process.stdout.write("Qual sua idade? \n");
}

let userName = "";
let userAge = "";
let step = 0;

process.stdin.on("data", (data) => {
    const input = data.trim();
    
    if (step === 0) {
        userName = input;
        step++;
        askAge();
    } else if (step === 1) {
        userAge = input;
        process.stdout.write(`Olá, seu nome é: ${userName}! Você tem ${userAge} anos.\n`);
        process.exit();
    }
});

askName();
