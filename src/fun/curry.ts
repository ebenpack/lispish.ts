/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import apply = require('./apply');

/**
 * Curry the given function. If the number of expected parameters
 * is passed explicitly, this will be used. Otherwise, the arity of the
 * function passed in will be used.
 * @param  {Function} fn
 * @param  {integer}   arity
 * @return {Function}
 */
export = function curry(fn: (...a: any[]) => any, arity?: number) {
    function helper(fn: (...a:any[])=>any, arity:number, args: cons) : any{
        if (arity === 0){
            return apply(fn, args);
        } else {
            return function(arg){
                return helper(fn, arity - 1, cons(arg, args));
            };
        }
    }
    if (typeof arity === 'undefined'){
        return helper(fn, fn.length, null);
    } else {
        return helper(fn, arity, null);
    }
}