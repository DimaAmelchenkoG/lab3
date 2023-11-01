package com.example.lab3;

import java.sql.*;

public class MyDataBase {
    private static final String DB_URL = "jdbc:postgresql://127.0.0.1:40543/studs";
    private static final String USER = "s336358";
    private static final String PASS = "nPmz.8121";
    private static final MyDataBase INSTANCE = new MyDataBase();

    Connection connection;

    public static MyDataBase getInstance() {
        return INSTANCE;
    }

    private MyDataBase() {
        try {
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection(DB_URL, USER, PASS);
            System.out.println("Connect success!");
            initDB();
        } catch (ClassNotFoundException | SQLException e) {
            System.err.println("Error on creating database connection");
            System.err.println(e.getMessage());
            System.exit(-1);
        }
    }

    public void makeBigAdd(Point point) {
        try(PreparedStatement statement = connection.prepareStatement(
                "INSERT INTO checks(id, x, y, r, date, working_time, status) VALUES (" +
                        "(SELECT nextval('id_generator')), ?,?,?,?,?,?" +
                        ")"
        )) {
            statement.setDouble(1, Double.valueOf(point.getX()));
            statement.setDouble(2, Double.valueOf(point.getY()));
            statement.setDouble(3, Double.valueOf(point.getR()));
            statement.setString(4, point.getTarget());
            statement.setTime(5, Time.valueOf(point.getTime()));
            statement.setDouble(6, Double.valueOf(point.getTime()));
            statement.executeUpdate();
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        }
    }

    private void initDB() throws SQLException {
        try(Statement sm = connection.createStatement();) {
            sm.execute("CREATE TABLE IF NOT EXISTS checks\n" +
                    "(\n" +
                    "    id     INTEGER PRIMARY KEY,\n" +
                    "    x      DOUBLE PRECISION,\n" +
                    "    y      DOUBLE PRECISION,\n" +
                    "    r      DOUBLE PRECISION,\n" +
                    "    status   String,\n" +
                    "    time TIMESTAMP,\n" +
                    "    time_of_code DOUBLE PRECISION\n" +
                    ");");
            sm.execute("CREATE SEQUENCE IF NOT EXISTS id_generator START 1 MINVALUE 1 MAXVALUE 2147483647;");
        }
    }

}
