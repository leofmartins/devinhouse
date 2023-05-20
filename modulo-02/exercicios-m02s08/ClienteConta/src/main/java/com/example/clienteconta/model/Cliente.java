package com.example.clienteconta.model;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cliente {

  @NotBlank
  private String cpf;

  @NotBlank
  private String nome;
}
