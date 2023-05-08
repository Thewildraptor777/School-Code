#include <iostream>
#include "file.cc"
using namespace std;
int main() {
  // Test the createDataDirectory function
  createDataDirectory();

  // Test the createDataFile function
  string pathname = "test.txt";
  string data = "This is a test file.";
  createDataFile(pathname, data);

  // Test the readDataFileAsWhole function
  string fileContents = readDataFileAsWhole(pathname);
  cout << "File contents: " << fileContents << endl;

  // Test the readDataFileAsList function
  list<string> fileLines = readDataFileAsList(pathname);
  cout << "File lines:" << endl;
  for (const auto& line : fileLines) {
    cout << line << endl;
  }

  // Test the logLinesOfFile function
  logLinesOfFile(pathname);

  // Test the selectLineFromFile function
  string selectedLine = selectLineFromFile(pathname, 1);
  cout << "Selected line: " << selectedLine << endl;

  // Test the appendToFile function
  string newData = "This is some new data.";
  appendToFile(pathname, newData);

  // Test the readDataFileAsWhole function again to see if the new data was appended
  fileContents = readDataFileAsWhole(pathname);
  cout << "File contents after append: " << fileContents << endl;

  // Test the readDataFileAsList function again to see if the new data was appended
  fileLines = readDataFileAsList(pathname);
  cout << "File lines after append:" << endl;
  for (const auto& line : fileLines) {
    cout << line << endl;
  }

  return 0;
}