package br.org.sesisenai.veiculos;

import exceptions.VeiculoExistenteException;
import exceptions.VeiculoNaoEncontrado;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VeiculoService {

  private final VeiculoRepository veiculoRepo;

  @Autowired
  public VeiculoService(VeiculoRepository veiculoRepo) {
    this.veiculoRepo = veiculoRepo;
  }

  public Veiculo inserir(Veiculo veiculo) {
    boolean isVeiculoCadastrado = veiculoRepo.existsVeiculoByPlaca(veiculo.getPlaca());
    if (isVeiculoCadastrado) {
      throw new VeiculoExistenteException();
    }
    return veiculoRepo.save(veiculo);
  }

  public List<Veiculo> consultar() {
    return veiculoRepo.findAll();
  }

  public Veiculo consultaar(String placa) {
    return veiculoRepo.findById(placa).orElseThrow(VeiculoNaoEncontrado::new);
  }

  public void delete(String placa) {
    var veiculo = veiculoRepo.findById(placa).orElseThrow(VeiculoNaoEncontrado::new);
    veiculoRepo.delete(veiculo);
  }

  public Veiculo adicionarMulta(String placa) {
    var veiculo = veiculoRepo.findById(placa).orElseThrow(VeiculoNaoEncontrado::new);
    veiculo.adicionarMulta();
    return veiculo;
  }
}
