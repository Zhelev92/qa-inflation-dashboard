//### Usefull tricks I learned

// Ternary operator, which is just a fancy one-liner if...else
//  --> condition ? valueIfTrue : valueIfFalse;

/* let maritalStatus;
if (isMarried) {
    maritalStatus = "is married";
} else {
    maritalStatus = "is not married";
} */
// Is transform to this:

const isMarried = true;
const maritalStatus = isMarried ? "is married" : "is not married"; 

// 3 conditions -->

/* const status = age < 18 
  ? "underage"
  : age < 65 
    ? "adult" 
    : "senior"; */

// Is is most usefull for 2 maximum 3 conditions.

