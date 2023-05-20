import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Serial;

@WebServlet("/HelloWorld/novaEmpresa")
public class NovaEmpresaServlet extends HttpServlet {
    @Serial
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest req,
                         HttpServletResponse resp)
            throws ServletException, IOException {
        String nomeEmpresa = req.getParameter("nome");

        resp.setContentType("text/html");

        PrintWriter out = resp.getWriter();

        out.println("<html><body>");
        out.println("<h1>Nome da Empresa: " + nomeEmpresa + "</h1>");
        out.println("</body></html>");

        System.out.println("Nome da Empresa: " + nomeEmpresa);
    }
}
