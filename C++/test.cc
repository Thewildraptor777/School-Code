#include <iostream>
#include <string>

using namespace std;

int main() {
  // Prompt the user to enter their name
  string name;
  cout << "Please enter your name: ";
  getline(cin, name);

  // Print a greeting message
  cout << "Hello, " << name << "!" << endl;

  return 0;
}