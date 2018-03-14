package polymorphism;

public class Dog {
    private String name;

    public Dog(String name) {
        this.name = name;
    }

    public String bark() {
        return "woof!";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
