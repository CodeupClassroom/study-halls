import java.util.HashMap;
import java.util.List;

public class Student {
    private String name;
    private List<Integer> grades;
    private HashMap<String, String> something;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Integer> getGrades() {
        return grades;
    }

    public void setGrades(List<Integer> grades) {
        this.grades = grades;
    }
}
