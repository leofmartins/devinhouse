import java.util.Arrays;
import java.util.List;

public class ExercicioSeis {
    public static void main(String[] args) {
        // Dado a lista de números:
        //
        List<Integer> lista = Arrays.asList(1, 2, 3, 4);
        //
        //Percorra a lista e gere uma nova com o triplo do valor de cada elemento:

        for (int number : lista) {
            System.out.println(number * 3);
        }
    }
}
