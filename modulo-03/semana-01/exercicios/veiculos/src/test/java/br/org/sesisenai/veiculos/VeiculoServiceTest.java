package br.org.sesisenai.veiculos;

import exceptions.VeiculoExistenteException;
import exceptions.VeiculoNaoEncontradoException;
import exceptions.VeiculoPossuiMultasException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class VeiculoServiceTest {

  @Mock
  private VeiculoRepository veiculoRepository;

  @InjectMocks
  private VeiculoService veiculoService;

  Veiculo veiculoRequest;
  List<Veiculo> veiculosSalvos;
  Veiculo veiculoSalvo;

  @BeforeEach
  void setUp() {
    veiculoRequest = Veiculo.builder()
      .placa("HOU-4701")
      .tipo("SUV")
      .cor("Branco")
      .anoDeFabricacao(2023)
      .qtdMultas(0)
      .build();

    veiculoSalvo = veiculoRequest;

    veiculosSalvos = Collections.singletonList(veiculoRequest);
  }

  @Test
  @DisplayName("Quando a placa nao estiver cadastrada, deve salvar o veiculo")
  void inserir() {
    when(veiculoRepository.existsVeiculoByPlaca(anyString()))
      .thenReturn(false);
    when(veiculoRepository.save(any(Veiculo.class)))
      .thenReturn(veiculoSalvo);

    Veiculo veiculoResponse = veiculoService.inserir(veiculoRequest);

    assertNotNull(veiculoResponse);
    assertEquals(veiculoRequest.getPlaca(), veiculoResponse.getPlaca());
  }

  @Test
  @DisplayName("Quando a placa ja estiver cadastrada, deve lançar VeiculoExistenteException")
  public void inserirPlacaJaCadastrada() {
    when(veiculoRepository.existsVeiculoByPlaca(anyString()))
      .thenReturn(true);

    assertThrows(VeiculoExistenteException.class,
      () -> veiculoService.inserir(veiculoRequest));
  }

  @Test
  @DisplayName("Quando buscar todos os veiculos, deve retornar a lista de veiculos cadastrados")
  void consultar() {
    when(veiculoRepository.findAll())
      .thenReturn(veiculosSalvos);

    List<Veiculo> veiculosResponse = veiculoService.consultar();

    assertEquals(1, veiculosResponse.size());
    assertEquals(veiculoRequest.getPlaca(), veiculosResponse.get(0).getPlaca());
  }

  @Test
  @DisplayName("Quando consultar um veiculo pela placa, se exitir, deve retornar o veiculo")
  void testConsultar() {
    when(veiculoRepository.findById(anyString()))
      .thenReturn(Optional.ofNullable(veiculoSalvo));

    Veiculo veiculoResponse = veiculoService.consultar(veiculoRequest.getPlaca());

    assertNotNull(veiculoResponse);
    assertEquals(veiculoRequest.getPlaca(), veiculoResponse.getPlaca());
  }

  @Test
  @DisplayName("Quando existir veiculo com a placa informada, e nao possui multas, deve excluir o veiculo")
  void delete() {
    when(veiculoRepository.findById(anyString()))
      .thenReturn(Optional.of(veiculoSalvo));

    assertDoesNotThrow(() -> veiculoService.delete(veiculoRequest.getPlaca()));
  }

  @Test
  @DisplayName("Quando nao existir veiculo para deletar, deve lançar exceçao")
  void deleteVeiculoNaoEncontrado() {
    when(veiculoRepository.findById(anyString()))
      .thenThrow(VeiculoNaoEncontradoException.class);

    assertThrows(VeiculoNaoEncontradoException.class,
      () -> veiculoService.delete(veiculoRequest.getPlaca()));
  }

  @Test
  @DisplayName("Quando existir veiculo com a placa informada, e houve multas, nao deve excluir o veiculo")
  void deleteVeiculoComMultas() {
    veiculoSalvo.setQtdMultas(1);
    when(veiculoRepository.findById(anyString()))
      .thenReturn(Optional.of(veiculoSalvo));

    assertThrows(VeiculoPossuiMultasException.class,
      () -> veiculoService.delete(veiculoRequest.getPlaca()));
  }

  @Test
  @DisplayName("Quando consultar por id, e nao encontrar registro, deve lançar exceçao VeiculoNaoEncontradoExecption")
  public void testConsultarVeiculoNaoEncontrado() {
     when(veiculoRepository.findById(anyString()))
       .thenThrow(VeiculoNaoEncontradoException.class);

     assertThrows(VeiculoNaoEncontradoException.class,
       () -> veiculoService.consultar(veiculoRequest.getPlaca()));
  }

  @Test
  @DisplayName("Quando o veiculo nao for encontrado, deve lançar exceçao")
  void adicionarMultaVeiculoNaoEncontrado() {
    when(veiculoRepository.findById(anyString()))
      .thenThrow(VeiculoNaoEncontradoException.class);

    assertThrows(VeiculoNaoEncontradoException.class,
            () -> veiculoService.adicionarMulta(veiculoRequest.getPlaca()));
  }

  @Test
  @DisplayName("Quando o veiculo for encontrato, deve incrementar o numero de multas")
  void adicionarMulta() {
    when(veiculoRepository.findById(anyString()))
            .thenReturn(Optional.ofNullable(veiculoSalvo));

    Veiculo veiculoMultaIncrementado = veiculoService.adicionarMulta(veiculoSalvo.getPlaca());

    assertEquals(1, veiculoMultaIncrementado.getQtdMultas());
  }
}
