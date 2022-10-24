function procuraMinMax(array) {
    if(Array.isArray(array)) {
        if (array.length == 0) {
            console.log("Array passada:");
            console.log({array});
            console.log("Não é possível procurar.\n");
            return;
        }
    }

    if (!Array.isArray(array)) {
        console.log("Array passada:");
        console.log({array});
        console.log("Não é possível encontrar\n");
        return;
    }

    console.log("Array passada:");
    console.log({array});

    array.sort();

    const menorValor = array[0];
    const maiorValor = array[array.length -1];

    console.log(`Resultado\n\tMenor valor: ${menorValor}\n\tMaior valor: ${maiorValor}\n`);

}

console.log("Executando testes...");
procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2, -2, -2, -2]);
procuraMinMax([20, 10, 30]);