Fivejs = {};

Fivejs.five = function(num) {
  return (typeof num === 'number') ? num*5 : console.log("eeerrrrmaahgaaawd wakakakakak", Fivejs.five(num));
};
