package ex03;

class Produto implements Tributavel {

    double valor;
    double imposto;
    @Override
    public double calculaValorComImposto() {
        return valor + imposto;
    }
}
