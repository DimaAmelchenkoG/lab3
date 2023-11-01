package com.example.lab3;

public class TargetChecker {
    public String check(Point point){
        if (Integer.parseInt(point.getX()) >= 0){
            return "Попадание";
        }
        else {
            return "Нет попадания";
        }
    }

    public String checkAll(Point point){
        System.out.println(point.getX());
        Float x = Float.valueOf(point.getX());
        Float y =  Float.valueOf(String.valueOf(point.getY()));
        System.out.println(point.getR());
        Float r = Float.valueOf(point.getR());;
        if  (checkSquare(x, y, r) | checkTriangle(x, y, r) | checkCircle(x, y, r)){
            return "Hit";
        }
        else {
            return "No hit";
        }
    }

    private boolean checkSquare(Float x, Float y, Float r){
        //System.out.println((x <= 0 & x <= r/2) & (y <= 0 & y <= r));
        return (x <= 0 & x >= -r/2) & (y <= 0 & y >= -r);
    }

    private boolean checkTriangle(Float x, Float y, Float r){
        //System.out.println(x + " " + y + " " + r);
        //System.out.println( (x >= 0 & y >= 0) & ((x*x + y*y) <= r*r));
        return (x >= 0 & y >= 0) & (y <= r & x <= r) & (x + y <= r);
    }

    private boolean checkCircle(Float x, Float y, Float r){
        //System.out.println((x <= 0 & y >= 0) & ((x*x + y*y) <= (r*r)/4));
        return (x <= 0 & y >= 0) & ((x*x + y*y) <= (r*r)/4);
    }

}
