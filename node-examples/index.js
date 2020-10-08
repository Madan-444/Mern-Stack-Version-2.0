var rect = require('./rectagle')

function solveRect(l,b){
    console.log("Solving for reactagle with l =" + l+ "and b = " +b);
    rect(l,b,(err,rectangle)=> {
        if(err){
            console.log('ERROR:',err.message);
        }
        else {
            console.log('The area of the rectangle of the dimensions l=' + l+ 'and b= '+ b+ 'is'+rectangle.area())
            console.log('The perimeter of the rectangle of the dimensions l=' + l+ 'and b= '+ b+ 'is'+rectangle.perimeter());
        }
    });
    console.log('This statement is after the call to rect')
}

solveRect(2,4)
solveRect(2,5)
solveRect(0,5)
solveRect(-2,4)