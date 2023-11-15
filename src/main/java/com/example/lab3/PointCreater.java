package com.example.lab3;

import java.time.LocalTime;

public class PointCreater {

    public Point createPoint(Point point, long t1){
        TargetChecker targetChecker = new TargetChecker();
        System.out.println(point.getX() + " " + point.getY() + " " + point.getR() + " " +point.getTime() + " " +  point.getDate() + " " +point.getTarget());
        point.setX(point.getX().replace(",", "."));
        point.setTarget(targetChecker.checkAll(point));
        point.setDate(String.valueOf(LocalTime.now().withNano(0)));
        point.setTime(String.format("%.5f", Float.valueOf(System.nanoTime() - t1) / 1000000000));
        return point;
    }
}
