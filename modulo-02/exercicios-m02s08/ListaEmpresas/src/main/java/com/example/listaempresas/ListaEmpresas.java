package com.example.listaempresas;

import java.io.*;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "ListaEmpresas", urlPatterns = {"/", "/ListaEmpresas"}, loadOnStartup = 1)
public class ListaEmpresas extends HttpServlet {

    private Set<Empresa> empresas;

    @Override
    public void init(ServletConfig config) throws ServletException {
        empresas = new LinkedHashSet<>();
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        renderForm(response);
        out.println("</body></html>");
    }

    private void renderForm(HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Formulário</h2>");
        out.println("<form action=\"ListaEmpresas\" method=\"post\">");
        out.println("    <label for=\"nomeEmpresa\">Nome da Empresa:</label>");
        out.println("    <input type=\"text\" id=\"nomeEmpresa\" name=\"nomeEmpresa\"><br>");
        out.println("    <label for=\"cnpj\">CNPJ:</label>");
        out.println("    <input type=\"text\" id=\"cnpj\" name=\"cnpj\"><br>");
        out.println("    <input type=\"submit\" value=\"Enviar\">");
        out.println("</form>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String nomeEmpresa = request.getParameter("nomeEmpresa");
        String cnpj = request.getParameter("cnpj");

        Empresa empresaCadastrada = new Empresa(nomeEmpresa, cnpj);
        empresas.add(empresaCadastrada);
        PrintWriter out = response.getWriter();
        renderForm(response);
        out.println("<hr>");
        out.println("<h2>Empresa armazenada com sucesso:</h2>");
        for (Empresa empresa : empresas) {
            out.println("Empresa: " + empresa.getNomeEmpresa());
            out.println("<br>");
            out.println("CNPJ: " + empresa.getCnpj());
            out.println("<hr>");
        }
        out.println("</body></html>");
    }

    public void destroy() {
    }

    public class Empresa {
        String nomeEmpresa;
        String cnpj;

        public Empresa(String nomeEmpresa, String cnpj) {
            this.nomeEmpresa = nomeEmpresa;
            this.cnpj = cnpj;
        }

        public String getNomeEmpresa() {
            return nomeEmpresa;
        }

        public String getCnpj() {
            return cnpj;
        }
    }
}