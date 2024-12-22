package PatternProgramming;
import java.util.Scanner;

public class S20PP  {
    static Scanner sc=new Scanner(System.in); 
    public static void main(String[] args) {
        int i;
        int j;
        int n=sc.nextInt();
        for(i=0;i<n;i++){
        for(j=i;j<n;j++){
            System.out.print("* ");
            }
            System.out.println();
        }
    }// forward facing upper triangle
}
