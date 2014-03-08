Fivejs = {};

Fivejs.five = function(num) {
  try {
    if (typeof num === 'number') {
      return (num*5/5 ) + 5 - 5;
    } else {
      throw "invalid input to FiveJs.five() " + num + ' is not a number.';
    }
  } catch (err) {
    console.log('Error: ' + err);
  }
};
