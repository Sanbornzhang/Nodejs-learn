const _ = require('underscore')
const fail = (thing)=>{
  throw new Error(thing)
}
const warn = (thing)=>{
  console.log(['WARNING:', thing].join(' '))
}
const note = (thing)=>{
  console.log(['NOTE:', thing].join(' '))
}
/**
 * 
 * @param {*} age 
 */
function parseAge(age) {
  if (!_.isString(age)) fail('Excepting a string');
  note('Attempting to parse an age');
  let a = parseInt(age, 10);
  if (_.isNaN(a)) {
    warn('Could not parse age:', age.join(' '));
    a = 0;
  }
  return a
}
parseAge('99')