import java.sql.SQLOutput;
import java.util.List;

class Clinica {
    String nomeDono;
    String nomeClinica;
    String cnpj;
    String endereco;
    int codigoClinica;

    List<Cliente> clientes;

    public Clinica(String nomeDono) {
        this.nomeDono = nomeDono;
    }

    public Clinica(String nomeDono, List<Cliente> clientes) {
        this.nomeDono = nomeDono;
        this.clientes = clientes;
    }

    public String getNomeDono() {
        return nomeDono;
    }

    public void setNomeDono(String nomeDono) {
        this.nomeDono = nomeDono;
    }

    public String getNomeClinica() {
        return nomeClinica;
    }

    public void setNomeClinica(String nomeClinica) {
        this.nomeClinica = nomeClinica;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public int getCodigoClinica() {
        return codigoClinica;
    }

    public void setCodigoClinica(int codigoClinica) {
        this.codigoClinica = codigoClinica;
    }

    public List<Cliente> getClientes() {
        return clientes;
    }

    public void setClientes(List<Cliente> clientes) {
        this.clientes = clientes;
    }

    public void addCliente(Cliente cliente) {
        clientes.add(cliente);
    }

    static double calculaIMC(double peso, double altura) {
        double imc = peso / (altura * altura);
        String resultado;

        if (imc < 18.5) {
            resultado = "Magreza";
        } else if (imc < 25) {
            resultado = "Normal";
        } else if (imc < 30) {
            resultado = "Sobrepeso";
        } else {
            resultado = "Obesidade";
        }

        System.out.println("Resultado: ");
        System.out.print("IMC = " + imc);
        System.out.println(resultado);

        return imc;
    }

    double tratamento(int idCliente) {
        if (this.clientes.get(idCliente) == null) {
            System.out.println("Cliente não identificado");
            return 0;
        }

        double novoPeso = this.clientes.get(idCliente).getPeso();
        this.clientes.get(idCliente).setPeso(novoPeso);
        return novoPeso - 5;
    }

    double tratamento(int idCliente, double pesoPerder) {
        if (this.clientes.get(idCliente) == null) {
            System.out.println("Cliente não encontrado");
            return 0;
        }

        double novoPeso = this.clientes.get(idCliente).getPeso() - pesoPerder;
        this.clientes.get(idCliente).setPeso(novoPeso);
        return novoPeso;
    }
}
