import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePhilips',
  standalone: true
})
export class CapitalizePhilipsPipe implements PipeTransform {

  transform(frase: string): string {
    {
      const palavras = frase.split(' ');

      palavras.forEach((palavra, index) => {
        palavras[index] = palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
      });

      // Junta as palavras de volta em uma string e retorna o resultado
      return palavras.join(' ');
    }
  }
}
