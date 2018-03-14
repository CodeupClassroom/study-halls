
public class Application {
    /**
     * Write code to test the code you are writing
     */
    public static void main(String[] args) {
        System.out.println(sumBetween(1, 0)); // testing sumBetween
        System.out.println(sumBetween(0, 0));
        System.out.println(sumBetween(26, 31));
        System.out.println(sumBetween(-16, 1));
    }

    /**
     * Given numbers a and b, find the sum of all the numbers between a and b,
     * inclusively
     */
    public static int sumBetween(int a, int b) {
        // find the larger and the smaller of a and b
//        int max = (a > b) ? a : b;
//        int min = (a < b) ? a : b;
        int max;
        int min;
        if (a < b) {
            max = b;
            min = a;
        } else {
            min = b;
            max = a;
        }

        // loop from the smaller to the larger, and sum all the numbers in between
        int sum = 0;
        for(int i = min; i <= max; i++) {
            sum += i;
        }

        return sum;
    }
}

