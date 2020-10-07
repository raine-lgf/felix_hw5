/* HOMEWORK 5 Example 1 JavaScript Code */
 
 
console.log("Raine's Output from HOMEWORK 5 Example 1");

class Square{
    constructor (side,perimeter,area,diagonal) {
        this.name = side;
        this.perimeter = function ()
        {
            return side * 4;
        }
        this.area = function ()
        {
            return Math.sqrt(side);
        }
        this.diagonial = function()
        {
            return Math.sqrt(2 * Math.sqrt(side));
        }
    }
    const
    describe () {
        return `Square with side 2 has a perimeter of ${this.perimeter}, area of ${this.area}, and diagonal of ${diagonal}`;
    }
}