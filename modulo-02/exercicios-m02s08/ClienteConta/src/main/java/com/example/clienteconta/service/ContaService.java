package com.example.clienteconta.service;

import com.example.clienteconta.model.Conta;

public class ContaService {

  public static boolean saldoSuficiente(Conta conta, Double valor) {
    return conta.getSaldo() >= valor;
  }
}
