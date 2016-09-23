import isEqualArray from '../src/array-is-equal';

describe('Util: isEqualArray()', function () {
  it('should consider two arrays with the same content equal', function () {
    let a = [1, 2, 'f'];
    let b = [1, 2, 'f'];

    expect(isEqualArray(a, b)).to.be.ok;
  });

  it('should consider two arrays without same content not equal', function () {
    let a = [1, 2, 3];
    let b = [1, 2, 4];

    expect(isEqualArray(a, b)).to.be.false;
  });
});