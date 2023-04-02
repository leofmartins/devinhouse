package ex06;

import static java.util.Objects.isNull;

public class Teste {
    String valorCampo;
    Integer valorMaximoCampo;

    Teste() {}

    public Teste(String valorCampo) {
        this.valorCampo = valorCampo;
    }

    public Teste(Integer valorMaximoCampo) {
        this.valorMaximoCampo = valorMaximoCampo;
    }

    Teste(String valorCampo, Integer valorMaximoCampo) {
        this.valorCampo = valorCampo;
        this.valorMaximoCampo = valorMaximoCampo;
    }

    public void validar()
            throws IllegalArgumentException, TamanhoInvalidoException {
        if ((isNull(this.valorCampo) || isNull(this.valorMaximoCampo)) || this.valorMaximoCampo < 0)
            throw new IllegalArgumentException();
        else if (valorCampo.length() > this.valorMaximoCampo)
            throw new TamanhoInvalidoException();
    }
}
