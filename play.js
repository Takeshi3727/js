const name = 'Max';
let age = 29;
const hasHobbies = true;

const summerizeUser = (userName, userAge, userHasHobbies) => {
  
  return (`Name is ` + 
  userName + 
  ', age is ' + 
  userAge + 
  ' and the user has hobbies:' + 
  userHasHobbies
  );
};

const addRandom = () => 1 + 2;

console.log(addRandom());
console.log(summerizeUser(name, age, hasHobbies));
