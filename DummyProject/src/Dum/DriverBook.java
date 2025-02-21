package Dum;

public class DriverBook{
    public static void main(String[] args) {
        Book b=new Book();
        Student s=new Student();
        System.out.println(b.equals(s));
        System.out.println(s.equals(b));
    }
}
