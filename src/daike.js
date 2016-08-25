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

function p3(live_list) {
  var count = {}, current = {};
  var next_live_list = [];

  function getNeighbors(x, y) {
    return [
      [x-1, y-1], [x  , y-1], [x+1, y-1],
      [x-1, y  ], [x+1, y],
      [x-1, y+1], [x  , y+1], [x+1, y+1]
    ];
  }

  function coor2key(coor) {
    return coor[0].toString() + '$' + coor[1].toString();
  }

  function key2coor(key) {
    var tokens = key.split('$');
    return [parseInt(tokens[0]), parseInt(tokens[1])];
  }

  _.each(live_list, function(coor) {
    current[coor2key(coor)] = 1;

    var neighbors = getNeighbors(coor[0], coor[1]);
    _.each(neighbors, function(coor) {
      var key = coor2key(coor);
      if (count[key]) {
        count[key]++;
      } else {
        count[key] = 1;
      }
    });
  });

  _.each(count, function(num, key) {
    if (current[key]) {
      if (num === 2 || num === 3) {
        next_live_list.push(key2coor(key));
      }
    } else {
      if (num === 3) {
        next_live_list.push(key2coor(key));
      }
    }
  }); 
  return next_live_list;
}
