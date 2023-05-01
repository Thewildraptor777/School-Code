#include <algorithm>
#include <list>
//
#include <fstream>
#include <iostream>
// C++ program to create a directory in Linux
#include <bits/stdc++.h>
#include <sys/stat.h>
#include <sys/types.h>
using namespace std;

void createDataDirectory() {
  // Path to the directory
  const char *dir = "/data";

  // Structure which would store the metadata
  struct stat sb;

  // Calls the function with path as argument
  // If the file/directory exists at the path returns 0
  // If block executes if path exists
  if (stat(dir, &sb) == 0) {
  } else {

    // Creating a directory
    if (mkdir("data", 0777) == -1) {
      cerr << "Error :  " << strerror(errno) << endl;
    } else {
      cout << "data/ created\n";
    }
  }
}
void createDataFile(string pathname, string data) {
  std::fstream fileStream;

  createDataDirectory();
  pathname = "data/" + pathname;
  // Create and open a text file
  ofstream MyFile(pathname);

  // Write to the file
  MyFile << data;

  // Close the file
  MyFile.close();
}
string readDataFileAsWhole(string pathname) {
    pathname="data/"+pathname;
  string myText;
  string finalText="";
  // Read from the text file
  ifstream MyReadFile(pathname);

  // Use a while loop together with the getline() function to read the file line
  // by line
  while (getline(MyReadFile, myText)) {
    // Output the text from the file
    finalText=finalText+myText;
  }

  // Close the file
  MyReadFile.close();
return finalText;
}
string readDataFileAsList(string pathname) {
    pathname="data/"+pathname;
  string myText;
  list<string>finalText={};
  // Read from the text file
  ifstream MyReadFile(pathname);

  // Use a while loop together with the getline() function to read the file line
  // by line
  while (getline(MyReadFile, myText)) {
    // Output the text from the file
    finalText.push_back(myText);
  }

  // Close the file
  MyReadFile.close();
return finalText;
}
