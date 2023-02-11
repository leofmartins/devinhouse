public class ExercicioCinco {
    public static void main(String[] args) {
        // Implemente uma função 'calcular' que receba
        // como parâmetro um array (numérico) e identifique
        // o maior e menor valor do mesmo. Imprima no console
        // estes valores ou "Não é possível calcular" qdo não for possível.
        //
        // Teste a função com as seguintes entradas:
        // {56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47}
        // {1}
        // {1, -1}
        // null
        // {-2,-2,-2,-2}
        // {20,10, 30}

        int maiorNumero;
        int menorNumero;

        int[] arr = { 20, 10, 30};

        maiorNumero = arr[0];
        menorNumero = arr[0];

        if (arr == null || arr.length == 0) {
            System.out.println("Não é possível calcular.");
        } else {
            for (int item : arr) {
                if (item > maiorNumero) {
                    maiorNumero = item;
                }
                if (item < menorNumero) {
                    menorNumero = item;
                }
            }

            System.out.println("Maior número: " + maiorNumero);
            System.out.println("Menor número: " + menorNumero);
        }
    }
}
