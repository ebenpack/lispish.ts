var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Returns true if some element in the list passes the
 * test implemented by the provided callback function.
 * The callback function is passed the current value
 * and the current index in the list.
 * @param  {(cons|null)}   L
 * @param  {Function} fn
 * @return {boolean}
 */
function some(L, fn){
    function helper(L, fn, idx){
        if (L === null){
            return false;
        } else {
            if (fn(car(L), idx)){
                return true;
            } else {
                return helper(cdr(L), fn, idx + 1);
            }
        }
    }
    return helper(L, fn, 0);
}

module.exports = some;