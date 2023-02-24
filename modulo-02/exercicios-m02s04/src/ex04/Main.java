package ex04;

public class Main {
    public static void main(String[] args) {

        ObtemIdade idadeDigitadaPeloUsuario = new ObtemIdade();

        Integer idade = null;
        while (idade == null) {
            try {
                idade = idadeDigitadaPeloUsuario.perguntarIdade();
            } catch (IdadeInvalidaException e) {
                System.out.println("Idade informada é inválida");
            }
        }

        System.out.printf("Olá, você tem %d anos de idade!", idade);
    }
}
