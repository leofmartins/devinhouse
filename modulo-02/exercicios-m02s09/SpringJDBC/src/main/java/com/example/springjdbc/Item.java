package com.example.springjdbc;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Item {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nomeItem;

  public Item(Long id, String nomeItem) {
    this.id = id;
    this.nomeItem = nomeItem;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getId() {
    return id;
  }

  public String getNomeItem() {
    return nomeItem;
  }

  public void setNomeItem(String nomeItem) {
    this.nomeItem = nomeItem;
  }
}
