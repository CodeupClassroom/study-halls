public class App {

    // property
    // visible inside of all methods here
    public static String message = "Good news everyone!";

    public static void inspect(int i) {
        System.out.println("This is an integer. It's value is: " + i);
    }

    public static void inspect(double d) {
        System.out.println("This is a double. It's value is: " + d);
    }

    public static void inspect(String s) {
        System.out.println("This a string, it contains: \"" + s + "\"");
    }

    // inspect is an overloaded method
    public static void main(String[] args) {

        inspect(123); // call, run, execute, invoke
        inspect(3.14);
        inspect("Good news everyone!");




        // oop example
//        // searching on amazon
//        User user = loggedInUser();
//        Result = SearchHelper.searchForItem(term);
//
//        // registration page
//        User newUser = new User();
//        newUser.name = "Zach";
//        newUser.password = "password";










        // bit --> 1 or a zero
        // byte -> 8 bits
        // hexadecimal -> base 16 number system













        // printf actually does something, as opposed to String.format

//        String output = String.format(
//            "First placeholder: \"%s\" second: \"%s\" third: \"%s\"", // <- format string
//            2018,
//            "Numbers will be turned into strings too!",
//            "The will be used in place of the first %s."
//        );
//
//        System.out.println(output);
    }

    /**
     * Recursion
     * - a repetitive task that can be broken into discrete steps
     * - a base case (or cases) -- necessary, this is our "stopping point"
     */
    public static double power(int base, int exponent) {
        // base cases
        if (exponent == 0) {
            return 1;
        } else if (exponent == 1) {
            return base;
        }

        return base * power(base, exponent - 1);
    }
    /**
     * power(n, 0) -> 1
     * power(n, 1) -> n
     * power(n, x) -> power(n, x - 1)
     */
}
