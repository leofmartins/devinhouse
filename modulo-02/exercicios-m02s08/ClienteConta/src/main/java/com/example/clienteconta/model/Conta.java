package com.example.clienteconta.model;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Conta {

  @NotBlank
  Cliente cliente;

  Double saldo = 0d;
}