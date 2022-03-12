/**
 * Liskov Substitution Principle (LSP)
“Functions that use pointers or references to base classes
 must be able to use objects of derived classes without knowing it.”
 */
// kuch real world example samajh nahi aaya tha this time to show.
 class Rectangle {
    public width: number;
    public height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    public calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle {
    public _width: number;
    public _height: number;
  
    constructor(width: number, height: number) {
      super(width, height);
  
      this._width = width;
      this._height = height;
    }
  }