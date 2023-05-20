package com.example.clienteconta.repository;

import com.example.clienteconta.model.Cliente;
import com.example.clienteconta.service.ClienteService;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ClienteRepository {
  private static final List<Cliente> clienteList = new ArrayList<>();

  public List<Cliente> pesquisarClientes() {
    return clienteList;
  }

  public void salvarCliente(Cliente cliente) {
    if (ClienteService.validaCpf(cliente.getCpf()))
      clienteList.add(cliente);
  }

  public Cliente pesquisarClientePeloId(Integer id) {
    return clienteList.get(id);
  }

  public void alterarClientePeloId(Integer id, Cliente cliente) {
    clienteList.set(id, cliente);
  }

  public void deletarClientePeloId(Integer id) {
    clienteList.remove(pesquisarClientePeloId(id));
  }
}
