package ex06;

public class TamanhoInvalidoException extends Exception {
    TamanhoInvalidoException() {
        System.out.println("Parâmetro “valorCampo” não pode ser maior que ‘valorMaximoCampo’");
    }
}
