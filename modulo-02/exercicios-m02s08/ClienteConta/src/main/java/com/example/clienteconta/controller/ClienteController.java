package com.example.clienteconta.controller;

import com.example.clienteconta.model.Cliente;
import com.example.clienteconta.repository.ClienteRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/clientes", produces = "application/json")
public class ClienteController {

  private final ClienteRepository clienteRepo;

  public ClienteController(ClienteRepository clienteRepo) {
    this.clienteRepo = clienteRepo;
  }

  @GetMapping
  public ResponseEntity<List<Cliente>> getClientes() {
    List<Cliente> clientes = clienteRepo.pesquisarClientes();
    return new ResponseEntity<>(clientes, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Cliente> getClientePeloId(@PathVariable Integer id) {
    Cliente cliente = clienteRepo.pesquisarClientePeloId(id);
    return new ResponseEntity<>(cliente, HttpStatus.OK);
  }

  @PostMapping(consumes = "application/json")
  public ResponseEntity<?> postCliente(@RequestBody Cliente cliente) {
    clienteRepo.salvarCliente(cliente);
    return new ResponseEntity<>(HttpStatus.CREATED);
  }

  @PostMapping(value = "/{id}", consumes = "application/json")
  public ResponseEntity<?> postCliente(@PathVariable Integer id,
                                       @RequestBody Cliente cliente) {
    clienteRepo.alterarClientePeloId(id, cliente);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteCliente(@PathVariable Integer id) {
    clienteRepo.deletarClientePeloId(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
