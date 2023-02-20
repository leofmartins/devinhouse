class Cliente {
    double peso;
    double altura;
    int idade;

    public Cliente(double peso, double altura, int idade) {
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
    }

    public Cliente(double peso, double altura) {
        this.peso = peso;
        this.altura = altura;
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
