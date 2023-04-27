package write;

import java.util.ArrayList;

public class console {
    // log
    public static void log(String log) {
        System.out.println(log);
    }

    public static void log(int log) {
        System.out.println(log);
    }

    public static void log(double log) {
        System.out.println(log);
    }

    public static void log(boolean log) {
        System.out.println(log);
    }

    public static void log(char log) {
        System.out.println(log);
    }

    public static void log() {

    }

    // sameline
    public static void sameline(String log) {

        System.out.print(log);
    }

    public static void sameline(int log) {

        System.out.print(log);
    }

    public static void sameline(double log) {

        System.out.print(log);
    }

    public static void sameline(boolean log) {

        System.out.print(log);
    }

    public static void sameline(char log) {

        System.out.print(log);
    }

    public static void sameline() {

    }
    // exitline

    public static void exitline(String log) {

        console.log(log);
    }

    public static void exitline(int log) {

        console.log(log);
    }

    public static void exitline(double log) {

        console.log(log);
    }

    public static void exitline(boolean log) {

        console.log(log);
    }

    public static void exitline(char log) {

        console.log(log);
    }

    public static void exitline() {
    }

    // newline
    public static void newline(String log) {
        console.log(log);
        console.log("");

    }

    public static void newline(int log) {
        console.log(log);
        console.log("");

    }

    public static void newline(double log) {
        console.log(log);
        ;
        console.log("");

    }

    public static void newline(boolean log) {
        console.log(log);
        ;
        console.log("");

    }

    public static void newline(char log) {
        console.log(log);
        ;
        console.log("");

    }

    public static void newline() {

    }

    // init
    public static void init() {
        console.newline("");
        console.newline("Program Started");
        console.log("");
    }

    public static void clear() {
        console.log("\033\143");

    }
}