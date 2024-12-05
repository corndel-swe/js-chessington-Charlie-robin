export class Maths {
    static PI = 3.14;
  
    static max(a, b) {
      return a > b ? a : b;
    }
  
    static round(a) {
      return a % 1 >= 0.5 ? a + (1 - (a % 1)) : a - (a % 1);
    }
  }
  