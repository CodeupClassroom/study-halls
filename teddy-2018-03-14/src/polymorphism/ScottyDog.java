package polymorphism;

public class ScottyDog extends Dog {
    public ScottyDog(String name) {
        super(name);
    }

    private String doTrick() {
        return "rollover";
    }
}
