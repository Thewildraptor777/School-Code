#include <cstring>
#include <iostream>
#include <fstream>
#include <string>
#include <list>
#include <sys/stat.h>
#include <sys/types.h>

using namespace std;

const string DATA_DIR = "data/";

void createDataDirectory() {
  // Path to the directory
  const char *dir = DATA_DIR.c_str();

  // Structure which would store the metadata
  struct stat sb;

  // Calls the selectLineFromFilection with path as argument
  // If the file/directory exists at the path returns 0
  // If block executes if path exists
  if (stat(dir, &sb) == 0) {
  } else {

    // Creating a directory
    if (mkdir(DATA_DIR.c_str(), 0777) == -1) {
      cerr << "Error: " << strerror(errno) << endl;
    } else {
      cout << DATA_DIR << " created\n";
    }
  }
}

void createDataFile(string pathname, string data) {
  createDataDirectory();
  pathname = DATA_DIR + pathname;

  // Create and open a text file
  ofstream MyFile(pathname);

  // Write to the file
  MyFile << data;

  // Close the file
  MyFile.close();
}

string readDataFileAsWhole(string pathname) {
  pathname = DATA_DIR + pathname;
  string myText;
  string finalText = "";
  // Read from the text file
  ifstream MyReadFile(pathname);

  // Use a while loop together with the getline() selectLineFromFilection to
  // read the file line by line
  while (getline(MyReadFile, myText)) {
    // Output the text from the file
    finalText = finalText + myText;
  }

  // Close the file
  MyReadFile.close();
  return finalText;
}

list<string> readDataFileAsList(string pathname) {
  // Append the data directory to the pathname
  pathname = DATA_DIR + pathname;

  // Open the file
  ifstream inputFile(pathname);

  if (!inputFile.is_open()) {
    throw runtime_error("Error opening file.");
  }

  // Read the file line by line and store each line in a list
  list<string> fileContents;
  string line;
  while (getline(inputFile, line)) {
    fileContents.push_back(line);
  }

  // Close the file
  inputFile.close();

  return fileContents;
}

void logLinesOfFile(string pathname) {
  list<string> myReturnedList = readDataFileAsList(pathname);
  for (const auto& line : myReturnedList) {
    cout << line << endl;
  }
}

string selectLineFromFile(string filename, int lineNum) {
  list<string> fileContents = readDataFileAsList(filename);

  // Check if the specified object number is out of range
  if (lineNum < 1 || lineNum > fileContents.size()) {
    throw runtime_error("Object number out of range.");
  }

  // Get the specified line from the list
  auto it = next(fileContents.begin(), lineNum - 1);
  string line = *it;

  return line;
}

void appendToFile(const string& pathname, const string& data) {
  createDataDirectory();
  string fullPath = DATA_DIR + pathname;

  // Open the file in append mode
  ofstream file(fullPath, ios_base::app);

  // Write the data to the file
  file << endl << data;

  // Close the file
  file.close();
}