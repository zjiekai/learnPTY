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

describe('Number first', function() {

  it('[] => []', function() {
    var arr = [];
    p2(arr);
    expect(arr).toEqual([]);
  });

  it('[1, 2, 3] => [1, 2, 3]', function() {
    var arr = [1, 2, 3];
    p2(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('[0, 2, 3] => [2, 3, 0]', function() {
    var arr = [0, 2, 3];
    p2(arr);
    expect(arr).toEqual([2, 3, 0]);
  });

  it('[0, 0, 0] => [0, 0, 0]', function() {
    var arr = [0, 0, 0];
    p2(arr);
    expect(arr).toEqual([0, 0, 0]);
  });

  it('[0, 1, 0, 3, 12] => [1, 3, 12, 0, 0]', function() {
    var arr = [0, 1, 0, 3, 12];
    p2(arr);
    expect(arr).toEqual([1, 3, 12, 0, 0]);
  });
});

describe('Game of Life', function() {

  it('[] => []', function() {
    var result = p3([]);
    expect(result).toEqual([]);
  });

  it('[[1, 1]] => []', function() {
    var result = p3([[1, 1]]);
    expect(result).toEqual([]);
  });

  it('[[1, 1], [2, 2]] => []', function() {
    var result = p3([[1, 1], [2, 2]]);
    expect(result).toEqual([]);
  });

  it('[[1, 1], [1, 2], [2, 2]] => [[1, 1], [1, 2], [2, 2], [2, 1]]', function() {
    var result = p3([[1, 1], [1, 2], [2, 2]]);
    expect(result).toContain([1, 1]);
    expect(result).toContain([1, 2]);
    expect(result).toContain([2, 2]);
    expect(result).toContain([2, 1]);
  });

  it('[[1, 1], [1, 2], [2, 2], [2, 1]] => [[1, 1], [1, 2], [2, 2], [2, 1]]', function() {
    var result = p3([[1, 1], [1, 2], [2, 2], [2, 1]]);
    expect(result).toContain([1, 1]);
    expect(result).toContain([1, 2]);
    expect(result).toContain([2, 2]);
    expect(result).toContain([2, 1]);
  });
});

describe('Simple root square', function() {});
describe('Power', function() {});
