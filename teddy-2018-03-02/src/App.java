public class App {

    public static void main(String[] args) {
        System.out.println(power(2, 5));
    }

    public static double power(int base, int exponent) {
        if (exponent == 0) {
            return 1;
        } else if (exponent == 1) {
            return base;
        }
        return base * power(base, exponent - 1);
    }
}
