public class ExercicioTres {
    public static void main(String[] args) {

        int[] extrato = { 100, -35, -15, -5, 55, -20 };

        // a) Percorra o array (operador 'for') e imprima cada elemento do array na ordem;
        for(int item : extrato) {
            System.out.println(item);
        }

        // b) Percorra o array (operador 'for') e imprima
        // os elementos de trás pra frente (do último para o primeiro);
        for (int i = extrato.length - 1; i > 0; i--) {
            System.out.println(extrato[i]);
        }

        // c) Percorra o array (operador 'for') e
        // calcule o saldo final da conta (valor inicial era zero),
        int saldo = 0;
        for (int item : extrato) {
            saldo += item;
        }
        System.out.println(saldo);

        // d) Imprima no console a mensagem 'saldo positivo' ou 'saldo negativo',
        // dependendo do resultado do saldo final calculado.
        System.out.println((saldo >= 0) ? "Saldo positivo" : "Saldo negativo");
    }
}
