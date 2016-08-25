'use strict';

function p1(arr) {
  var p = _.reduce(arr, function(memo, num) {
    return memo*num;
  }, 1);
  return _.map(arr, function(num) {
    return p/num;
  });
}

function p2(arr) {
  var N = arr.length;
  var cur = 0;
  for (var i = 0; i < N; ++i) {
    if (arr[i] !== 0) {
      arr[cur++] = arr[i];
    }
  }
  for (var i = cur; i < N; ++i) {
    arr[i] = 0;
  }
}

function p3(n, m) {
}
