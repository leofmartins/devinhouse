package model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Veiculo {

  @Id
  private String placa;

  String tipo;

  String cor;

  LocalDate anoDeFabricacao;

  Integer qtdMultas;
}
