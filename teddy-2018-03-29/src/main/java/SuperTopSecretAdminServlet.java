import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SuperTopSecretAdminServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse response) {

       if (req.getSession().getAttribute("is_logged_in") == false)  {
           response.getWriter().println("<h1>You're unauthorized, go away!</h1>")
       }

       // show the secret admin interface
    }
}
