package com.example.lab3;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalTime;


@ApplicationScoped
@Entity
@Table(name = "tablePoint")
public class Point implements Serializable {

    @Column(name = "x", nullable = false)
    private String x;
    @Column(name = "y", nullable = false)
    private String y;
    @Column(name = "r", nullable = false)
    private String r;


    @Column(name = "target", nullable = false)
    private String target;
    @Column(name = "date", nullable = false)
    private LocalTime date;
    @Column(name = "time", nullable = false)
    private String  time;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;



    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        this.y = y;
    }

    @Override
    public String toString() {
        return "Point{x=" + x + '\'' +
                ", y=" + y +
                '}';
    }

    public String getR() {
        return r;
    }

    public void setR(String r) {
        this.r = r;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public LocalTime getDate() {
        return date;
    }

    public void setDate(LocalTime date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
