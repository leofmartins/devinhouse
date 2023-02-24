package ex03;

class Produto implements Tributavel {

    private double valor;
    private double imposto;
    @Override
    public double calculaValorComImposto() {
        return valor + imposto;
    }
}
