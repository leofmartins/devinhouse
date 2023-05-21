package com.example.mercadinho.model;

import java.util.List;

public class Projection {

  public interface CategoriaSummary {
    String getNome();

    List<Produto> getProdutos();
  }

  public interface ClienteSummary {

    String getNome();

    String getCpf();

    String getDataNascimento();

    List<Produto> getProdutos();
  }

  public interface ProdutoSummary {

    String getNome();

    String getDescricao();

    Double getPreco();

    Categoria getCategoria();

    List<Cliente> getClientes();
  }
}
