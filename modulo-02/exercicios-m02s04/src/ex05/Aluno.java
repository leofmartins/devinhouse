package ex05;

class Aluno extends Pessoa {
    private String matricula;

    public Aluno(String nome, String sobrenome, String matricula) {
        super(nome, sobrenome);
        this.matricula = matricula;
    }

    protected String registrar() {
        return "Sou o " + super.obterNomeCompleto() +
                " e minha matrícula é " + matricula;
    }
}
