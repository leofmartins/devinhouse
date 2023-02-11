import java.util.Arrays;
import java.util.List;

public class ExercicioOito {
    public static void main(String[] args) {
        // Localize na lista abaixo e imprima no console a primeira ocorrência de número maior que 50.
        List<Integer> numeros = Arrays.asList(0, 2, 88, 56, 33, 42, 67, 3, 9, 0, 2);
        for (int numero : numeros) {
            if(numero > 50) {
                System.out.println(numero);
                break;
            }
        }
    }
}
