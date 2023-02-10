public class ExercicioDois {
    public static void main(String[] args) {
        // Implemente um código copiando o array abaixo,
        // e depois imprima no console o valor dos seguintes elementos:

        double[][] notas = {
                {10, 8.5, 5.5, 9.5},
                {8.5, 7, 7.5, 6},
                {8, 9, 10, 7.5},
                {9, 9.5, 10, 8}
        };

        // a) Imprima o valor da nota do primeiro elemento do terceiro array de notas.
        System.out.println("Nota do primeiro elemento do terceiro array: " + notas[2][0]);

        // b) Imprima o valor da nota do segundo elemento do quarto array de notas.
        System.out.println("Nota so segundo elemento do quarto array: " + notas[3][1]);

        // c) Imprima o valor da soma das quatro primeiras notas de cada array.
        double somaDasNotas = 0;

        for (double[] nota : notas) {
            somaDasNotas += nota[0];
        }
        System.out.println("Soma das quatro primeiras notas de cada array: " + somaDasNotas);
    }
}
