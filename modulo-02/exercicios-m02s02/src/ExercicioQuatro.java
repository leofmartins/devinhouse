public class ExercicioQuatro {
    public static void main(String[] args) {
        // Mike tem um nro da sorte: 25.
        //Ele conseguiu uma listagem do histórico
        // dos resultados da loteria conforme arrays abaixo.
        //Escreva um código para percorrer os elementos
        // de nros sorteados e contabilizar quantas vezes
        // o nro da sorte dele foi sorteado.

        int[][] sorteados = {
                { 1, 44,  6,  2, 45, 60},
                {10, 21, 55, 25, 34, 44},
                { 8, 18, 28, 29, 55, 59},
                {60, 25, 11, 34,  6,  9},
                {55, 43, 25, 12,  7, 11}
        };

        int vezesSorteado = 0;

        for (int[] sorteado : sorteados) {
            for (int item : sorteado) {
                if (item == 25) {
                    vezesSorteado++;
                }
            }
        }
        System.out.printf("O número 25 foi sorteado %d vezes.", vezesSorteado);
    }
}
