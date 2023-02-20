class Cliente {
    private String nome;
    private double peso;
    private double altura;
    private int idade;

    public Cliente(double peso, double altura, int idade) {
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
    }

    public Cliente(double peso, double altura) {
        this.peso = peso;
        this.altura = altura;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}
