import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "AdShowServlet", urlPatterns = "/ads/show")
public class AdShowServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // find the id of the ad whose details I want to display
        Long id = Long.parseLong(req.getParameter("id"));

        HttpSession session = req.getSession();

        session.setAttribute("is_logged_in", true);

        // given the id -> get a title and a description (i.e. more details) for the specified ad
        // get a reference to that specific ad object
        Ad ad = DaoFactory.getAdsDao().findById(id);

        // pass that ad along to another jsp (i.e. html template) to show the details
        req.getRequestDispatcher("/ads/show.jsp").forward(req, resp);
    }
}
