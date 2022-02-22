// Your code here.
//GET FIRST NAME VALUE
const getFirstName = function(person) {
  return person.firstName
}
//GET LAST NAME VALUE
const getLastName = function(person) {
  return person.lastName
}
// GET FULL NAME 
const getFullName = function(person) {
  return `${person.firstName} ${person.lastName}`
}
// SET FIRST NAME
const setFirstName = function(person,newName) {
  person.firstName = newName
  return person
}
// SET AGE
const setAge= function(person,age) {
  person['age'] = age
  return person
}
// GIVE BIRTHDAY
const giveBirthday= function(person) {
  // //if age prop is not in obj
  // if(person['age'] === undefined) {
  //   //set age prop with value of one
  //   person['age'] = 1
  // } else {
  //   //increase the person age by one
  //   person.age += 1
  // }
  return person['age'] === undefined ? person['age'] = 1 : person.age += 1
}
// MARRY
const marry= function(person1,person2) {
  person1.married = true
  person2.married = true
  person1['spouseName'] = `${person2.firstName} ${person2.lastName}`
  person2['spouseName'] = `${person1.firstName} ${person1.lastName}`
  return person1 , person2
}
// DIVORCE
const divorce= function(person1,person2) {
  person1.married = false
  person2.married = false
  delete person2['spouseName']
  delete person1['spouseName']
  
  return person1 , person2
}
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
