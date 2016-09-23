import mapValues from '../src/map-values';

describe('Util: mapValues()', function () {
  it('should map values using an iteratee function', function () {
    let users = {
      'fred': { 'user': 'fred', 'age': 40 },
      'pebbles': { 'user': 'pebbles', 'age': 1 }
    };

    let result = mapValues(users, function (o) { return o.age; });

    expect(result.fred).to.be.equal(40);
    expect(result.pebbles).to.be.equal(1);
  });

  it('should map values using an iteratee property shorthand', function () {
    let users = {
      'fred': { 'user': 'fred', 'age': 40 },
      'pebbles': { 'user': 'pebbles', 'age': 1 }
    };

    let result = mapValues(users, 'age');

    expect(result.fred).to.be.equal(40);
    expect(result.pebbles).to.be.equal(1);
  });
});
