module.exports = function getZerosCount(n) {

  var zeroCounts = 0;
  
  while(n > 0) {
  
  n=Math.floor(n / 5);
  
  zeroCounts += n
  
  }
  
  return zeroCounts; 
  
  }