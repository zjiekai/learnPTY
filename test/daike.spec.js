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

describe('Simple root square', function() {

  it('throws negative', function() {
    expect(function() {p4(-3);}).toThrow();
  });

  it('0 => 0; 1 => 1', function() {
    expect(p4(0)).toEqual(0);
    expect(p4(1)).toEqual(1);
  });

  it('2 => 1; 9 => 3; 10 => 3', function() {
    expect(p4(2)).toEqual(1);
    expect(p4(9)).toEqual(3);
    expect(p4(10)).toEqual(3);
  });
});

describe('Power', function() {

  it('throws negative', function() {
    expect(function() {p5(1, -3);}).toThrow();
  });

  it('(1, ) => 1, (, 0) => 1', function() {
    expect(p5(1, 1)).toEqual(1);
    expect(p5(1, 3)).toEqual(1);
    expect(p5(1, 0)).toEqual(1);
    expect(p5(10, 0)).toEqual(1);
  });

  it('misc', function() {
    expect(p5(2, 10)).toEqual(1024);
    expect(p5(3, 25)).toEqual(847288609443);
  });
});
