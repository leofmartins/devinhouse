package ex04;

import java.util.Scanner;

class ObtemIdade {
    int perguntarIdade() throws IdadeInvalidaException {
        System.out.println("Qual a sua idade?");
        Scanner scanner = new Scanner(System.in);
        int idade = scanner.nextInt();
        if (idade <= 0)
            throw new IdadeInvalidaException();
        return idade;
    }
}
