const usuarioConectado = true;

const idade = 16;

/* 
if (usuarioConectado && idade > 18) {
  console.log("Acesso autorizado");
}
*/

if (idade < 18)
  console.log("Menor de idade");
else
  console.log("Maior de idade");