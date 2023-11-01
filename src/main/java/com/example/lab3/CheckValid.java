package com.example.lab3;

public class CheckValid {
    public boolean checkAll(Point point){
        Float x = Float.valueOf(point.getX());
        Float y =  Float.valueOf(String.valueOf(point.getY()));
        Float r = Float.valueOf(point.getR());

        return checkX(x) & checkY(y) & checkR(r);
    }
    private boolean checkX(Float x){
        if (x == null){
            return false;
        }
        return true;
    }
    private boolean checkY(Float y){
        if (y == null){
            return false;
        }
        return true;
    }
    private boolean checkR(Float r){
        return true;
    }
}
