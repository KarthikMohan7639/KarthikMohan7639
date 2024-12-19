import java.util.Scanner;

public class S22 {
	static Scanner sc=new Scanner(System.in);
	
	
	public static void main(String[] args) {
		System.out.println("Enter a");
		int a=sc.nextInt();
		System.out.println("Enter b");
		int b=sc.nextInt();
		System.out.println("Enter c");
		int c=sc.nextInt();
		if(a>b && a>c) {
			System.out.println(a+" is first greatest no");
			if(b>c) {
				System.out.println(b+" is second greatest no");
			}
			else {
				System.out.println(c +" is second greatest no");
			}
		}
		else if(b>a && b>c) {
			System.out.println(b+" is first greatest number");
			if(c>a) {
				System.out.println(c+ " is second largest number");
			}
			else {
				System.out.println(a+" is second largest number");
			}
		}
		else {
			System.out.println(c+" is first largest number");
			if(b>a) {
				System.out.println(b +" is second largest number");
			}
			else {
				System.out.println(a +" is second largest number");
			}
		}
	}
}
