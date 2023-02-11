public class ExercicioDez {
    public static void main(String[] args) {
        String string = "Socorram-me, subi no ônibus em Marrocos!";

        String stringSemCaracteresEspeciais =
                string
                        .replaceAll("[^\\w\\s]", "")
                        .replaceAll(" ", "")
                        .toLowerCase();

        boolean palindromo = true;

        StringBuilder stringInvertida = new StringBuilder();

        for(int i  = stringSemCaracteresEspeciais.length() -1;
            i > 0;
            i--
        ) {
            stringInvertida.append(
                    stringSemCaracteresEspeciais.toCharArray()[i]
            );
        }

        for (int i = 0;
             i < stringInvertida.length();
             i++
        ) {
            if (stringInvertida.toString().toCharArray()[i] !=
                    stringSemCaracteresEspeciais.toCharArray()[i]) {
                palindromo = false;
                break;
            }
        }

        String resultado = palindromo ? "Palindromo" : "Não palíndromo";

        System.out.println(resultado);
    }
}
