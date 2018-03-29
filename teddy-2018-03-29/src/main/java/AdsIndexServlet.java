import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "AdsIndexServlet", urlPatterns = "/ads")
public class AdsIndexServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // accessing the ads dao through the daoFactory
        // find the list of ads
        List<Ad> ads = new ArrayList<>();
        ads.add(new Ad(1, "some title", "some description"));
        ads.add(new Ad(2, "another title", "..."));

        // set that attribute on the request
        req.setAttribute("ads", ads);

        // pass things along to the correct jsp
        req.getRequestDispatcher("ads/index.jsp").forward(req, resp);
    }
}
