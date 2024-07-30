const { parse } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusToFahrenheit(celsius){
    return(celsius * 9/5) + 32;
};

function fahrenheitToCelsius(fahrenheit){
    return(fahrenheit - 32) *5/9;
};

function Conversion(){
    rl.question("Escolha a opção: 1 para Celsius e 2 para Fahrenheit: ", (choice) => {
        if(choice === "1"){
            temperaturaCelsius();
        } else if( choice === "2"){
            temperaturaFahrenheit();
        } else{
            console.log("Escolha inválida. Tente novamente.")
            Conversion();
        }
    });
}

function temperaturaCelsius(){
    rl.question("Digite o valor da temperatura: ", (input) => {
        const celsius = parseFloat(input);
        if(isNaN(celsius)){
            console.log("Insira um número válido!");
            temperaturaCelsius();
        } else{
            const fahrenheit = celsiusToFahrenheit(celsius);
            console.log(`${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`);
            rl.close();
        }
    });
}

function temperaturaFahrenheit(){
    rl.question("Digite o valor da temperatura: ", (input) => {
        const fahrenheit = parseFloat(input);
        if(isNaN(fahrenheit)){
            console.log("Insira um número válido!");
            temperaturaFahrenheit();
        } else{
            const celsius = fahrenheitToCelsius(fahrenheit);
            console.log(`${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C`);
            rl.close();
        }
    })
}

Conversion();