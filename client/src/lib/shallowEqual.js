/*
  Purpose of this module is to be able to see if two supplied objects are equal to one another
  Since one object doesn't directly equal another, we have to perform several checks to validate equality
*/
module.exports = (objA, objB) => {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  // bind the hasOwnProperty function to the context of object B
  var bHasOwnProperty = hasOwnProperty.bind(objB);
  // iterate through all of the keys
  for (var i = 0; i < keysA.length; i++) {
    // check has own property to avoid prototype chain climbing or if there is no matching key from both arrays
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
};