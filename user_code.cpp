
#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main() {
    // Input string
    string str;
    cout << "Enter a string: ";
    getline(cin, str);
    
    // Reversing the string using the reverse function
    reverse(str.begin(), str.end());

    // Output the reversed string
    cout << "Reversed string: " << str << endl;

    return 0;
}
