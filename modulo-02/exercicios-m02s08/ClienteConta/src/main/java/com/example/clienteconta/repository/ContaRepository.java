package com.example.clienteconta.repository;

import com.example.clienteconta.model.Conta;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

import static com.example.clienteconta.service.ContaService.saldoSuficiente;

@Repository
public class ContaRepository {

  private static final List<Conta> contaList = new ArrayList<>();

  public List<Conta> pesquisarContas() {
    return contaList;
  }

  public void cadastrarConta(Conta conta) {
    contaList.add(conta);
  }

  public Conta pesquisarContaPeloId(Integer id) {
    return contaList.get(id);
  }

  public void atualizarConta(Integer id, Conta conta) {
    contaList.set(id, conta);
  }

  public void deletarContaPeloId(Integer id) {
    contaList.remove(pesquisarContaPeloId(id));
  }

  public void sacar(Integer id, Double valorSacar) {
    Conta conta = contaList.get(id);
    if (saldoSuficiente(conta, valorSacar)) {
      Double saldoAtual = conta.getSaldo() - valorSacar;
      conta.setSaldo(saldoAtual);
      contaList.set(id, conta);
    }
  }

  public void depositar(Integer id, Double valorDepositar) {
    Conta conta = contaList.get(id);
    Double saldoAtual = conta.getSaldo() + valorDepositar;
    conta.setSaldo(saldoAtual);
    contaList.set(id, conta);
  }
}
