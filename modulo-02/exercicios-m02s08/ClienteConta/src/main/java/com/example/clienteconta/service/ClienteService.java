package com.example.clienteconta.service;

public class ClienteService {
  public static boolean cpfValido(String cpf) {
    cpf = cpf.replaceAll("[^0-9]", "");

    if (cpf.length() != 11)
      return false;

    if (cpf.matches("(\\d)\\1{10}"))
      return false;

    int soma = 0;

    for (int i = 0; i < 9; i++) {
      int digito = Character.getNumericValue(cpf.charAt(i));
      soma += digito * (10 - i);
    }
    int resto = soma % 11;
    int digitoVerificador1 = (resto < 2) ? 0 : 11 - resto;
    if (digitoVerificador1 != Character.getNumericValue(cpf.charAt(9))) {
      return false;
    }

    soma = 0;
    for (int i = 0; i < 10; i++) {
      int digito = Character.getNumericValue(cpf.charAt(i));
      soma += digito * (11 - i);
    }
    resto = soma % 11;
    int digitoVerificador2 = (resto < 2) ? 0 : 11 - resto;
    return digitoVerificador2 == Character.getNumericValue(cpf.charAt(10));
  }
}
