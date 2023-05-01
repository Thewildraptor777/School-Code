#include <iostream>
#include "file.cc"
using namespace std;

void runFunction(){
    cout << "type name\n";
    string name;
    cin>> name;
    cout<< "hi "+name+"\n";
}
int main() 
{

    createDataFile("text.txt","hi");
    return 0;
}