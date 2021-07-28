import Farm from './farm.js';
import Animal from './animal.js';

const myFarm = new Farm();
// ?? see that the field is empty?
const pig = new Animal('Phillip'); // 

console.log(myFarm);
console.log(pig);

pig.feed();
console.log(pig);

// Put Phillip in the Field
// add pig to the field string
if(pig.hungry === false) {
    myFarm.field.push(pig);
}
console.log(myFarm);