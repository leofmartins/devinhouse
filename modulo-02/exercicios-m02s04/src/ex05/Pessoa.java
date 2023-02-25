package ex05;

class Pessoa {
    protected String nome;
    protected String sobrenome;

    public Pessoa(String nome, String sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    protected String obterNomeCompleto() {
        return nome + " " + sobrenome;
    }
}
