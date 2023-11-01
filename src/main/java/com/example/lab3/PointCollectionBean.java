package com.example.lab3;


import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

import java.util.ArrayList;
import java.util.List;

@Named
@ApplicationScoped
public class PointCollectionBean {

    private Point newPoint = new Point();
    private List<Point> points = new ArrayList<Point>();
    public Point getNewPoint(){
        System.out.println("GET NEW POINT");
        return newPoint;
    }

    public List<Point> getPoints(){
        return points;
    }
    public void addPoint(){
        long t1 = System.nanoTime();
        PointCreater pointCreater = new PointCreater();
        newPoint = pointCreater.createPoint(newPoint, t1);
        points.add(newPoint);
        //
        //
         HibernateUtils.getSessionFactory();
        //HibernateUtils.buildSessionFactory();
        //MyDataBase.getInstance().makeBigAdd(newPoint);
        newPoint = new Point();
    }

    private String name = "Tom";
    public String getName(){
        System.out.println("NAME");
        return name;
    }

    private ArrayList<Point> pointArrayList = new ArrayList<>();

    public PointCollectionBean(){}

    public void clean(){
        points.clear();
    }

    public Point getPoint(int id){
        return pointArrayList.get(id);
    }

    public Integer getLength(){
        return pointArrayList.size();
    }

    public void addPoint1(Point point){
        pointArrayList.add(point);
    }







}
