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
{    cout<<"\nstarted\n\n";

    cout<<readDataFileAsWhole("text.txt");
    
    return 0;
}