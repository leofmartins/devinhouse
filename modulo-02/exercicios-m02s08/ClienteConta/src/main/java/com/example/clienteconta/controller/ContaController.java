package com.example.clienteconta.controller;

import com.example.clienteconta.model.Conta;
import com.example.clienteconta.repository.ContaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/contas", produces = "application/json")
public class ContaController {

  private final ContaRepository contaRepo;

  public ContaController(ContaRepository contaRepo) {
    this.contaRepo = contaRepo;
  }

  @GetMapping
  public ResponseEntity<List<Conta>> getContas() {
    List<Conta> contas = contaRepo.pesquisarContas();
    return new ResponseEntity<>(contas, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Conta> getContaPeloId(@PathVariable Integer id) {
    Conta conta = contaRepo.pesquisarContaPeloId(id);
    return new ResponseEntity<>(conta, HttpStatus.OK);
  }

  @PostMapping(consumes = "application/json")
  public ResponseEntity<?> postConta(@RequestBody Conta conta) {
    contaRepo.cadastrarConta(conta);
    return new ResponseEntity<>(HttpStatus.CREATED);
  }

  @PostMapping(value = "/{id}", consumes = "application/json")
  public ResponseEntity<?> atualizaConta(@PathVariable Integer id,
                                         @RequestBody Conta conta) {
    contaRepo.atualizarConta(id, conta);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @PostMapping(value = "{idOrigem}/transferir/{idDestitno}/{valor}")
  public ResponseEntity<?> trasferir(@PathVariable Integer idOrigem,
                                     @PathVariable Integer idDestitno,
                                     @PathVariable Double valor) {
    Conta origem = contaRepo.pesquisarContaPeloId(idOrigem);
    Conta destino = contaRepo.pesquisarContaPeloId(idDestitno);
    Double saldoOriginalContaOrigem = origem.getSaldo();
    contaRepo.sacar(idOrigem, valor);
    Double novoSaldoContaOrigem = origem.getSaldo();
    if (novoSaldoContaOrigem < saldoOriginalContaOrigem) {
      contaRepo.depositar(idDestitno, valor);
      return ResponseEntity.ok(origem + destino.toString());
    }
    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteConta(@PathVariable Integer id) {
    contaRepo.deletarContaPeloId(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
