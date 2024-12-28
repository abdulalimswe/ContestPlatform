const conpilorDeafaultCode = {};

conpilorDeafaultCode.cpp = `#include <iostream>

using namespace std;

int main() {
  cout<<"Hello world!\\n";
  return 0;
}
`;

conpilorDeafaultCode.python = `print("Hello world!")`;

conpilorDeafaultCode.java = `public class Main {
    public static void main(String[] args) {
      System.out.println("Hello World");
    }
  }`;


export default conpilorDeafaultCode;