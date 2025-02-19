public class PrintingScan extends Object{
    // static Scanner sc=new Scanner(System.in);
    public static void main(String[] args){
        String name="Hello, World!, 123";
        StringRev(name);
                    }
        
            private static void StringRev(String name) {
                String rev=new String("");
                char[] ch=name.toCharArray();
                for(int i=ch.length-1;i>0;i--){
                    rev=""+ch[i];
                    System.out.print(rev);
                }
                
            }
}