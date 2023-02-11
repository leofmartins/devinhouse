import java.util.Arrays;
import java.util.List;

public class ExercicioSete {
    public static void main(String[] args) {
        // Dado a lista de nomes:
        List<String> nomes = Arrays.asList("kirk", "spock", "scott", "mccoy", "sulu");

        // a) Percorra a lista usando o operador 'for' clássico, usando uma variável
        // para iterar pelos índices, e imprima no console os valores de cada nome;
        for(int i = 0; i < nomes.size(); i++) {
            System.out.println(nomes.get(i));
        }

        // b) Percorra a lista usando o operador 'for-each' usando a forma simplificada,
        // e imprima no console os valores de cada nome;
        for (String nome : nomes) {
            System.out.println(nome);
        }

        // c) Percorra a lista usando o operador 'while', e imprima no console os valores de cada nome;
        int i = 0;
        while (i < nomes.size()) {
            System.out.println(nomes.get(i));
            i++;
        }
    }
}
