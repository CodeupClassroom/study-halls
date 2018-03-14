package polymorphism;

/**
 * Superclass -- Dog
 * Subclass -- ScottyDog
 */

public class PolyMorphismDemo {
    public static void main(String[] args) {
        Dog someDog = new ScottyDog("max");
        Dog another = new Dog("fido");
        Dog anotherDog = new Dog("spot");

        greetDog(someDog); // calling with an object of type ScottyDog
        greetDog(anotherDog); // calling with an object of type Dog
    }

    public static void greetDog(Dog dog) {
        System.out.format("%s is good boy, yes he is\n", dog.getName());
    }

}
