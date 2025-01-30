import java.util.Scanner;

public class Sum {
    public static int solveMeFirst(int a, int b) {
        int sum = a + b;
        return sum;

    }

    public static void main(String[]args){
        Scanner sc=new Scanner(System.in);
        try{
            System.out.println("enter two numbers");

             int a=sc.nextInt();
             int b=sc.nextInt();
             int sum=solveMeFirst(a,b);
             System.out.println("Sum of two numbers is "+sum);

        }catch(Exception e){
            System.out.println("invalid!!Enter integers only");
        }finally{
            sc.close();
        }
        
        
        
    }
}