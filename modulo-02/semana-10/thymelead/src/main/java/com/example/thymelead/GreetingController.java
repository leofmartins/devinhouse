package com.example.thymelead;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class GreetingController {
    @GetMapping("/greeting")
    public String greeting(
            @RequestParam(name = "name", required = false, defaultValue = "World")
                           String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }

    @GetMapping("/lista")
    public String listarPessoas(String pessoa, Model model) {
        List<Pessoa> pessoas = new ArrayList<>();
        pessoas.add(new Pessoa("Pessoa1", 30));
        pessoas.add(new Pessoa("Pessoa2", 32));
        pessoas.add(new Pessoa("Pessoa3", 28));
        model.addAttribute("pessoa", pessoas);
        return "pessoas";
    }

}
