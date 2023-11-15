package com.example.lab3;

import org.hibernate.Session;
import org.hibernate.Transaction;

public class ConnectDB {

    public void add(Point point){
            Session session = null;
            Transaction transaction;
            session = HibernateUtils.getSessionFactory().openSession();
            transaction = session.getTransaction();
            session.beginTransaction();
            session.persist(point);
            transaction.commit();
    }

    public void clear(){
            Session session = null;
            Transaction transaction;
            session = HibernateUtils.getSessionFactory().openSession();
            transaction = session.getTransaction();
            session.beginTransaction();
            session.createNativeQuery("delete from tablepoint").executeUpdate();
            transaction.commit();
    }
}
