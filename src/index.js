exports.min = function min (array) {
  if (!array || array.length == 0){return 0;}
return Math.min.apply(null, array);
}

exports.max = function max (array) {
    if (!array || array.length == 0){return 0;}
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    if (!array || array.length == 0){return 0;}
  var x, sum = 0;
      for (x = 0; x < array.length; x++) {
              sum += array[x];
      }
      return (sum/array.length);
}
