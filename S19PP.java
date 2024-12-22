import java.util.Scanner;

public class S19PP {
    static Scanner sc=new Scanner(System.in);
    public static void main(String[] args) throws InterruptedException {
        int size=sc.nextInt();
        for (int i = 0; i <size; i++) {
            for(int j=0;j<size;j++){
                Thread.sleep(1000);
            System.out.print("* ");
        }
        System.out.println();
    }
}

    
}
