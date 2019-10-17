// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let per = this.sides.reduce((a,b) => a + b, 0);
        return per 
    }
}

class Triangle extends Polygon {

    get isValid() {
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];
        if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) {
            return true;
        } else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.count !== 4) {
            return false
        } else if (!(this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3])) {
            return false
        } else {
            return true
        }
    }

    get area() {
        return this.sides[0]**2;
    }
} 