package org.example;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class FolhaDePagamentoTest {
  FolhaDePagamento folhaDePagamento = new FolhaDePagamento();

  @Test
  void calcularSalarioBruto() {
    Double salarioBase = 1000d;
    Double gratificacao = 250d;
    Double semGratificacao = null;
    String funcaoGerente = "gerente";
    String funcaoNaoGerente = "assistente";

    Double salarioCalculadoGerenteComGratificacao = folhaDePagamento.calcularSalarioBruto(
            salarioBase, gratificacao, funcaoGerente
    );
    Double salarioCalculadoGerenteSemGratificacao = folhaDePagamento.calcularSalarioBruto(
            salarioBase, semGratificacao, funcaoGerente
    );
    Double salarioCalculadoNaoGerenteComGratificacao = folhaDePagamento.calcularSalarioBruto(
            salarioBase, gratificacao, funcaoNaoGerente
    );
    Double salarioCalculadoNaoGerenteSemGratificacao = folhaDePagamento.calcularSalarioBruto(
            salarioBase, semGratificacao, funcaoNaoGerente
    );

    assertEquals(salarioCalculadoGerenteSemGratificacao, salarioBase * 1.3);
    assertEquals(salarioCalculadoGerenteComGratificacao, (salarioBase + gratificacao) * 1.3);
    assertEquals(salarioCalculadoNaoGerenteComGratificacao, salarioBase + gratificacao);
    assertEquals(salarioCalculadoNaoGerenteSemGratificacao, salarioBase);

  }

  @Test
  void calcularSalarioLiquido() {
    Double salario = 1000d;
    List<Double> descontosMenoresQueSalario = Arrays.asList(100d, 200d, 50d);
    List<Double> descontosMaioresQueSalario = Arrays.asList(1000d, 50d);
    List<Double> semDescontos = null;

    Double totalDescontosMenoresQueSalario = descontosMenoresQueSalario.stream().reduce(Double::sum).get();

    Double salarioLiquidoPositivoSemDescontos = folhaDePagamento.calcularSalarioLiquido(
            salario, semDescontos
    );
    Double salarioLiquidoPositovoComDescontos = folhaDePagamento.calcularSalarioLiquido(
            salario, descontosMenoresQueSalario
    );

    assertEquals(salarioLiquidoPositivoSemDescontos, salario);
    assertEquals(salarioLiquidoPositovoComDescontos, salario - totalDescontosMenoresQueSalario);
    assertThrows(IllegalStateException.class, () -> folhaDePagamento.calcularSalarioLiquido(
            salario,  descontosMaioresQueSalario
    ));
  }
}