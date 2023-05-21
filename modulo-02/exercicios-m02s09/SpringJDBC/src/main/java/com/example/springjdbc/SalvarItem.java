package com.example.springjdbc;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class SalvarItem {
  public static void main(String[] args) {
    Item item = new Item(null, "Item 1");

    EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistenceUnit");

    EntityManager em = emf.createEntityManager();

    em.getTransaction().begin();
    em.persist(item);
    em.getTransaction().commit();
    em.close();
  }
}
