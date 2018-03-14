import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

// Example of creating a custom exception
class StudyHallException extends Exception {}
class TwitterAPIResponseException extends Exception {}

public class ExceptionTest {
    public static void main(String[] args) {
        // when I'm using a method that can throw an exception
        // - surround it in try-catch
        // - add the exception *also* to this method signature

        try {
            holdStudyHall("Wednesday");
        } catch (StudyHallException e) {
            e.printStackTrace();
        }
    }

    // If a method has a throw in the method body, you probably need a `throws`
    public static void holdStudyHall(String dayOfTheWeek) throws StudyHallException {
        if (dayOfTheWeek.equals("Saturday")) {
            throw new StudyHallException();
        } else {
            System.out.println("holding study hall...");
        }
    }

    public static void usingBuiltInMethods() {
        Path path = Paths.get("README.md");
        try {
            Files.readAllLines(path);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void dontCallThisMethodWith5(int number) {
       if (number == 5) {
           throw new IllegalArgumentException("I told you not to do that!");
       } else {
           System.out.println("Good job! Hope you have a wonderful day.");
       }
    }

    public static void callingAMethodThatThrowsAnUncheckedException() {
        dontCallThisMethodWith5(4);

        dontCallThisMethodWith5(5);

    }
}
