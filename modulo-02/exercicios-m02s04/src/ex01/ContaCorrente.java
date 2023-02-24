package ex01;

class ContaCorrente extends Conta implements Operavel {

    @Override
    public void depositar(double valor) {

    }

    @Override
    public void sacar(double valor) {

    }

    @Override
    protected double obterSaldo() {
        return saldo;
    }
}
