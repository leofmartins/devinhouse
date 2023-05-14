package br.org.sesisenai.veiculos;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/veiculos")
@CrossOrigin
public class VeiculoController {

  private final VeiculoService veiculoService;

  @Autowired
  public VeiculoController(VeiculoService veiculoService) {
    this.veiculoService = veiculoService;
  }

  @PostMapping
  public ResponseEntity<Veiculo> inserir(@RequestBody @Valid Veiculo veiculoRequest) {
    Veiculo veiculoSalvo = veiculoService.inserir(veiculoRequest);
    return ResponseEntity.created(URI.create(veiculoSalvo.getPlaca())).body(veiculoSalvo);
  }

  @GetMapping
  public ResponseEntity<List<Veiculo>> consultar() {
    List<Veiculo> veiculos = veiculoService.consultar();
    return ResponseEntity.ok(veiculos);
  }

  @GetMapping("/{placa}")
  public ResponseEntity<Veiculo> consultarVeiculo(@PathVariable String placa) {
    Veiculo veiculo = veiculoService.consultaar(placa);
    return ResponseEntity.ok(veiculo);
  }

  @DeleteMapping("/{placa}")
  public ResponseEntity<?> excluir(@PathVariable String placa) {
    veiculoService.delete(placa);
    return ResponseEntity.noContent().build();
  }

  @PutMapping("/{placa}/multas")
  public ResponseEntity<Veiculo> adicionarMulta(@PathVariable String placa) {
    Veiculo veiculoAlterado = veiculoService.adicionarMulta(placa);
    return ResponseEntity.created(URI.create("")).body(veiculoAlterado);
  }

}
