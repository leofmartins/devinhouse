import Time from "./Time.js";
import Partida from "./Partida.js";

const fla = new Time('Flamento', 'CRF');
const flu = new Time('Fluminense', 'FFC');

const partida1 = new Partida('CRF', 3, 'FFC', 2);
const partida2 = new Partida('FFC', 2, 'SPFC', 2);
const partida3 = new Partida('SPFC', 2, 'CRF', 2);
const partida4 = new Partida('INT', 3, 'CRF', 0);
const partida5 = new Partida('FFC', 0, 'INT', 1);

fla.computarPartida(partida1);
fla.computarPartida(partida2);
fla.computarPartida(partida3);
fla.computarPartida(partida4);
fla.computarPartida(partida5);

flu.computarPartida(partida1);
flu.computarPartida(partida2);
flu.computarPartida(partida3);
flu.computarPartida(partida4);
flu.computarPartida(partida5);

fla.exibirSituacao();

flu.exibirSituacao();