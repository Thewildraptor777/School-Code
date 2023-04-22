import java.io.File;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;
import java.util.Set;
import java.util.ArrayList;
import write.console;

import java.io.FileNotFoundException;

public class test {
    public static void main(String[] args) {
        console.init();
        File file = new File("test.txt");
        if (file.exists()) {
            try {
                Scanner reader = new Scanner(file);
                while (reader.hasNextLine()) {
                    String data = reader.nextLine();
                    String asker = "|";
                    char askerChar = asker.charAt(0);
                    String asker2 = "|";
                    char asker2Char = asker2.charAt(0);
                    ArrayList<Character> charList = new ArrayList<Character>();

                    for (int i = 0; i < data.length() - 1; i++) {
                        char text1 = data.charAt(i);
                        char text2 = data.charAt(i + 1);
                        charList.add(text1);
                        StringBuilder builder = new StringBuilder();
                        for (Character c : charList) {
                            builder.append(c); // Append each character to the StringBuilder.
                        }

                        String result = builder.toString(); // Get the final result as a String.
                        if (text1 == askerChar && text2 == asker2Char) {
                            System.out.println(result); // Outputs: "tdfsdfds||"

                          
                            console.log(i);
                            console.newline(true);
                        }

                    }
                }
                reader.close();
            } catch (FileNotFoundException e) {
                console.log("error occured");
                e.printStackTrace();
            }
        }

    }
}