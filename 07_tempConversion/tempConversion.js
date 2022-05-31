const ftoc = function(fTemp) {
  let cTemp = Number(((5/9)*(fTemp-32)).toFixed(1));
  return cTemp;
};

const ctof = function(cTemp) {
  let fTemp = Number((((9/5)*cTemp) + 32).toFixed(1));
  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
