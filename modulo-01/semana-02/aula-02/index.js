var convidado = prompt("Informo o nome do convidado:");
var noivo1 = "João";
var noivo2 = "Maria";
var data = "03/12/2022";
var hora = "16";

var texto = `Caro(a), ${convidado}!
Você foi convidado(a) para o casamento de ${noivo1} e ${noivo2},
a ser realizado no dia ${data}, às ${hora} horas.

Contamos com a sua presença.

Atenciosamente,

os noivos(as)`;

var paragrafo = document.getElementById("paragrafo");

paragrafo.innerText = texto;

console.log(texto);