/**
 * Imports
 */

var index = require('..')
var test = require('tape')
var identity = require('@f/identity')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(index(identity, [1,2,3,4]), {1: 1, 2: 2, 3:3, 4:4})
  t.end()
})
