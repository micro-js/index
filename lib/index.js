/**
 * Modules
 */

var reduce = require('@f/reduce-array')

/**
 * Expose index
 */

module.exports = index

/**
 * index
 */

function index (fn, list) {
  return reduce(function (map, item) {
    map[fn(item)] = item
    return map
  }, {}, list)
}
