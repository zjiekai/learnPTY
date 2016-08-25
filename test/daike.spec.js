'use strict';

describe('Product array', function() {

  it('[] => []', function() {
    var result = p1([]);
    expect(result).toEqual([]);
  });

  it('[1, 2, 3, 4] => [24, 12, 8, 6]', function() {
    var result = p1([1, 2, 3, 4]);
    expect(result).toEqual([24, 12, 8, 6]);
  });

});

describe('Number first', function() {});
describe('Game of Life', function() {});
describe('Simple root square', function() {});
describe('Power', function() {});
