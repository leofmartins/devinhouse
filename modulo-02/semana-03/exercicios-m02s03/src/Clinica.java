import java.sql.SQLOutput;
import java.util.List;

class Clinica {
    String nomeDono;
    String nomeClinica;
    String cnpj;
    String endereco;
    int codigoClinica;

    List<Cliente> clientes;

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
}
