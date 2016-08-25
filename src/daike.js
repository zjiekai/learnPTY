'use strict';

function p1(arr) {
  var p = _.reduce(arr, function(memo, num) {
    return memo*num;
  }, 1);
  return _.map(arr, function(num) {
    return p/num;
  });
}

function p2() {
}
