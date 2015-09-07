
var det = require('./index'),
    test = require('tape')

test('Example', function (t) {
  t.plan(1)

  var scalar = {
    addition      : function (a, b) { return a + b },
    multiplication: function (a, b) { return a * b },
    negation      : function (a) { return -a }
  }

  // order = 1

  t.equal(det([10]), 10)

})

/*

describe('determinant', function () {
  it('computes the determinant of a matrix', function () {
    var data,
        det,
        order,
        scalar = {
          addition      : function (a, b) { return a + b },
          multiplication: function (a, b) { return a * b },
          negation      : function (a) { return -a }
        }


    /////////////////////////////////////////////////////////////////////////
    order = 2
    /////////

    data = [1, 0,
            0, 1]
    det = 1
    determinant(scalar, data, order).should.be.eql(det)

    data = [1, 1,
            2, 1]
    det = -1
    determinant(scalar, data, order).should.be.eql(det)

    /////////////////////////////////////////////////////////////////////////
    order = 3
    /////////

    data = [1, 0, 0,
            0, 1, 0,
            0, 0, 1]
    det = 1
    determinant(scalar, data, order).should.be.eql(det)

    data = [0,  1, 0,
            2, -1, 0,
            0,  2, 1]
    det = -2
    determinant(scalar, data, order).should.be.eql(det)

    order = 4

    data = [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1]
    det = 1
    determinant(scalar, data, order).should.be.eql(det)
  })
})

*/

