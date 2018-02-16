/* eslint-disable import/no-dynamic-require */
'use strict';
const ok = require('assert').ok;
let tested = 0;
let PATH;

function load(module) {
  tested++;
  return require(`${ PATH }/${ module }`);
}

for (const _PATH of ['../packages/core-js-pure', '../packages/core-js']) {
  PATH = _PATH;
  ok(load('features/object/assign')({ q: 1 }, { w: 2 }).w === 2);
  ok(load('features/object/create')(Array.prototype) instanceof Array);
  ok(load('features/object/define-property')({}, 'a', { value: 42 }).a === 42);
  ok(load('features/object/define-properties')({}, { a: { value: 42 } }).a === 42);
  ok(load('features/object/freeze')({}));
  ok(load('features/object/get-own-property-descriptor')({ q: 1 }, 'q').enumerable);
  ok(load('features/object/get-own-property-names')({ q: 42 })[0] === 'q');
  ok(load('features/object/get-own-property-symbols')({ [Symbol()]: 42 }).length === 1);
  ok(load('features/object/get-prototype-of')([]) === Array.prototype);
  ok(load('features/object/is')(NaN, NaN));
  ok(load('features/object/is-extensible')({}));
  ok(!load('features/object/is-frozen')({}));
  ok(!load('features/object/is-sealed')({}));
  ok(load('features/object/keys')({ q: 0 })[0] === 'q');
  ok(load('features/object/prevent-extensions')({}));
  ok(load('features/object/seal')({}));
  ok(load('features/object/set-prototype-of')({}, []) instanceof Array);
  ok(load('features/object/to-string')([]) === '[object Array]');
  ok(load('features/object/entries')({ q: 2 })[0][0] === 'q');
  ok(load('features/object/values')({ q: 2 })[0] === 2);
  ok(load('features/object/get-own-property-descriptors')({ q: 1 }).q.enumerable);
  ok(typeof load('features/object/define-getter') === 'function');
  ok(typeof load('features/object/define-setter') === 'function');
  ok(typeof load('features/object/lookup-getter') === 'function');
  ok(typeof load('features/object/lookup-setter') === 'function');
  ok('values' in load('features/object'));
  ok(load('features/function/bind')(function (a, b) {
    return this + a + b;
  }, 1, 2)(3) === 6);
  ok(load('features/function/virtual/bind').call(function (a, b) {
    return this + a + b;
  }, 1, 2)(3) === 6);
  ok(load('features/function/virtual').bind.call(function (a, b) {
    return this + a + b;
  }, 1, 2)(3) === 6);
  load('features/function/name');
  load('features/function/has-instance');
  // eslint-disable-next-line prefer-arrow-callback
  ok(Function[load('features/symbol/has-instance')](function () { /* empty */ }));
  ok('bind' in load('features/function'));
  ok(load('features/array/is-array')([]));
  ok(Array.isArray(load('features/array/from')('qwe')));
  ok(Array.isArray(load('features/array/of')('q', 'w', 'e')));
  ok(load('features/array/join')('qwe', 1) === 'q1w1e');
  ok(load('features/array/slice')('qwe', 1)[1] === 'e');
  ok(load('features/array/sort')([1, 3, 2])[1] === 2);
  ok(typeof load('features/array/for-each') === 'function');
  ok(typeof load('features/array/map') === 'function');
  ok(typeof load('features/array/filter') === 'function');
  ok(typeof load('features/array/some') === 'function');
  ok(typeof load('features/array/every') === 'function');
  ok(typeof load('features/array/reduce') === 'function');
  ok(typeof load('features/array/reduce-right') === 'function');
  ok(typeof load('features/array/index-of') === 'function');
  ok(typeof load('features/array/last-index-of') === 'function');
  ok(load('features/array/copy-within')([1, 2, 3, 4, 5], 0, 3)[0] === 4);
  ok('next' in load('features/array/entries')([]));
  load('features/array/end');
  ok(load('features/array/fill')(Array(5), 2)[0] === 2);
  ok(load('features/array/find')([2, 3, 4], it => it % 2) === 3);
  ok(load('features/array/find-index')([2, 3, 4], it => it % 2) === 1);
  ok('next' in load('features/array/keys')([]));
  ok('next' in load('features/array/values')([]));
  ok(load('features/array/includes')([1, 2, 3], 2));
  ok('next' in load('features/array/iterator')([]));
  ok(load('features/array/virtual/join').call('qwe', 1) === 'q1w1e');
  ok(load('features/array/virtual/slice').call('qwe', 1)[1] === 'e');
  ok(load('features/array/virtual/sort').call([1, 3, 2])[1] === 2);
  ok(typeof load('features/array/virtual/for-each') === 'function');
  ok(typeof load('features/array/virtual/map') === 'function');
  ok(typeof load('features/array/virtual/filter') === 'function');
  ok(typeof load('features/array/virtual/some') === 'function');
  ok(typeof load('features/array/virtual/every') === 'function');
  ok(typeof load('features/array/virtual/reduce') === 'function');
  ok(typeof load('features/array/virtual/reduce-right') === 'function');
  ok(typeof load('features/array/virtual/index-of') === 'function');
  ok(typeof load('features/array/virtual/last-index-of') === 'function');
  ok(load('features/array/virtual/copy-within').call([1, 2, 3, 4, 5], 0, 3)[0] === 4);
  ok('next' in load('features/array/virtual/entries').call([]));
  ok(load('features/array/virtual/fill').call(Array(5), 2)[0] === 2);
  ok(load('features/array/virtual/find').call([2, 3, 4], it => it % 2) === 3);
  ok(load('features/array/virtual/find-index').call([2, 3, 4], it => it % 2) === 1);
  ok('next' in load('features/array/virtual/keys').call([]));
  ok('next' in load('features/array/virtual/values').call([]));
  ok(load('features/array/virtual/includes').call([1, 2, 3], 2));
  ok('next' in load('features/array/virtual/iterator').call([]));
  ok(load('features/array/virtual').includes.call([1, 2, 3], 2));
  ok('from' in load('features/array'));
  ok(load('features/array/concat')([1, 2, 3], [4, 5, 6]).length === 6);
  ok(load('features/array/pop')([1, 2, 3]) === 3);
  ok(load('features/array/push')([1, 2, 3], 4) === 4);
  ok(load('features/array/reverse')([1, 2, 3])[0] === 3);
  ok(load('features/array/shift')([1, 2, 3]) === 1);
  ok(load('features/array/splice')([1, 2, 3], 1, 2)[0] === 2);
  ok(load('features/array/unshift')([1, 2, 3], 0) === 4);
  ok(load('features/math/acosh')(1) === 0);
  ok(Object.is(load('features/math/asinh')(-0), -0));
  ok(load('features/math/atanh')(1) === Infinity);
  ok(load('features/math/cbrt')(-8) === -2);
  ok(load('features/math/clz32')(0) === 32);
  ok(load('features/math/cosh')(0) === 1);
  ok(load('features/math/expm1')(-Infinity) === -1);
  ok(load('features/math/fround')(0) === 0);
  ok(load('features/math/hypot')(3, 4) === 5);
  ok(load('features/math/imul')(2, 2) === 4);
  ok(load('features/math/log10')(-0) === -Infinity);
  ok(load('features/math/log1p')(-1) === -Infinity);
  ok(load('features/math/log2')(1) === 0);
  ok(load('features/math/sign')(-2) === -1);
  ok(Object.is(load('features/math/sinh')(-0), -0));
  ok(load('features/math/tanh')(Infinity) === 1);
  ok(load('features/math/trunc')(1.5) === 1);
  ok(load('features/math/clamp')(6, 2, 4) === 4);
  ok(load('features/math/deg-per-rad') === Math.PI / 180);
  ok(load('features/math/degrees')(Math.PI) === 180);
  ok(load('features/math/fscale')(3, 1, 2, 1, 2) === 3);
  ok(load('features/math/iaddh')(3, 2, 0xffffffff, 4) === 7);
  ok(load('features/math/isubh')(3, 4, 0xffffffff, 2) === 1);
  ok(load('features/math/imulh')(0xffffffff, 7) === -1);
  ok(load('features/math/rad-per-deg') === 180 / Math.PI);
  ok(load('features/math/radians')(180) === Math.PI);
  ok(load('features/math/scale')(3, 1, 2, 1, 2) === 3);
  ok(load('features/math/umulh')(0xffffffff, 7) === 6);
  ok(load('features/math/signbit')(-2) === false);
  ok(load('features/number/constructor')('5') === 5);
  ok(load('features/number/epsilon') === Math.pow(2, -52));
  ok(load('features/number/is-finite')(42.5));
  ok(load('features/number/is-integer')(42.5) === false);
  ok(load('features/number/is-nan')(NaN));
  ok(load('features/number/is-safe-integer')(42));
  ok(load('features/number/max-safe-integer') === 0x1fffffffffffff);
  ok(load('features/number/min-safe-integer') === -0x1fffffffffffff);
  ok(load('features/number/parse-float')('1.5') === 1.5);
  ok(load('features/number/parse-int')('2.1') === 2);
  ok(load('features/number/to-fixed')(1, 1) === '1.0');
  ok(load('features/number/to-precision')(1) === '1');
  ok(load('features/number/from-string')('12', 3) === 5);
  ok(load('features/parse-float')('1.5') === 1.5);
  ok(load('features/parse-int')('2.1') === 2);
  ok(load('features/number/virtual/to-fixed').call(1, 1) === '1.0');
  ok(load('features/number/virtual/to-precision').call(1) === '1');
  ok(load('features/number/virtual').toFixed.call(42, 2) === '42.00');
  ok('isNaN' in load('features/number'));
  ok(load('features/reflect/apply')((a, b) => a + b, null, [1, 2]) === 3);
  ok(load('features/reflect/construct')(function () {
    return this.a = 2;
  }, []).a === 2);
  let O;
  load('features/reflect/define-property')(O = {}, 'a', { value: 42 });
  ok(O.a === 42);
  ok(load('features/reflect/delete-property')({ q: 1 }, 'q'));
  ok(load('features/reflect/get')({ q: 1 }, 'q') === 1);
  ok(load('features/reflect/get-own-property-descriptor')({ q: 1 }, 'q').enumerable);
  ok(load('features/reflect/get-prototype-of')([]) === Array.prototype);
  ok(load('features/reflect/has')({ q: 1 }, 'q'));
  ok(load('features/reflect/is-extensible')({}));
  ok(load('features/reflect/own-keys')({ q: 1 })[0] === 'q');
  ok(load('features/reflect/prevent-extensions')({}));
  ok(load('features/reflect/set')({}, 'a', 42));
  load('features/reflect/set-prototype-of')(O = {}, []);
  ok(O instanceof Array);
  ok(typeof load('features/reflect/define-metadata') === 'function');
  ok(typeof load('features/reflect/delete-metadata') === 'function');
  ok(typeof load('features/reflect/get-metadata') === 'function');
  ok(typeof load('features/reflect/get-metadata-keys') === 'function');
  ok(typeof load('features/reflect/get-own-metadata') === 'function');
  ok(typeof load('features/reflect/get-own-metadata-keys') === 'function');
  ok(typeof load('features/reflect/has-metadata') === 'function');
  ok(typeof load('features/reflect/has-own-metadata') === 'function');
  ok(typeof load('features/reflect/metadata') === 'function');
  ok('has' in load('features/reflect'));
  ok(load('features/string/from-code-point')(97) === 'a');
  ok(load('features/string/raw')({ raw: 'test' }, 0, 1, 2) === 't0e1s2t');
  ok(load('features/string/code-point-at')('a', 0) === 97);
  ok(load('features/string/ends-with')('qwe', 'we'));
  ok(load('features/string/includes')('qwe', 'w'));
  ok(load('features/string/repeat')('q', 3) === 'qqq');
  ok(load('features/string/starts-with')('qwe', 'qw'));
  ok(typeof load('features/string/anchor') === 'function');
  ok(typeof load('features/string/big') === 'function');
  ok(typeof load('features/string/blink') === 'function');
  ok(typeof load('features/string/bold') === 'function');
  ok(typeof load('features/string/fixed') === 'function');
  ok(typeof load('features/string/fontcolor') === 'function');
  ok(typeof load('features/string/fontsize') === 'function');
  ok(typeof load('features/string/italics') === 'function');
  ok(typeof load('features/string/link') === 'function');
  ok(typeof load('features/string/small') === 'function');
  ok(typeof load('features/string/strike') === 'function');
  ok(typeof load('features/string/sub') === 'function');
  ok(typeof load('features/string/sup') === 'function');
  ok(load('features/string/at')('a', 0) === 'a');
  ok('next' in load('features/string/code-points')('a'));
  ok(load('features/string/pad-start')('a', 3) === '  a');
  ok(load('features/string/pad-end')('a', 3) === 'a  ');
  ok(load('features/string/trim-start')(' a ') === 'a ');
  ok(load('features/string/trim-end')(' a ') === ' a');
  ok(load('features/string/trim-left')(' a ') === 'a ');
  ok(load('features/string/trim-right')(' a ') === ' a');
  ok('next' in load('features/string/match-all')('a', /./));
  ok('next' in load('features/string/iterator')('qwe'));
  ok(load('features/string/virtual/code-point-at').call('a', 0) === 97);
  ok(load('features/string/virtual/ends-with').call('qwe', 'we'));
  ok(load('features/string/virtual/includes').call('qwe', 'w'));
  ok(load('features/string/virtual/repeat').call('q', 3) === 'qqq');
  ok(load('features/string/virtual/starts-with').call('qwe', 'qw'));
  ok(typeof load('features/string/virtual/anchor') === 'function');
  ok(typeof load('features/string/virtual/big') === 'function');
  ok(typeof load('features/string/virtual/blink') === 'function');
  ok(typeof load('features/string/virtual/bold') === 'function');
  ok(typeof load('features/string/virtual/fixed') === 'function');
  ok(typeof load('features/string/virtual/fontcolor') === 'function');
  ok(typeof load('features/string/virtual/fontsize') === 'function');
  ok(typeof load('features/string/virtual/italics') === 'function');
  ok(typeof load('features/string/virtual/link') === 'function');
  ok(typeof load('features/string/virtual/small') === 'function');
  ok(typeof load('features/string/virtual/strike') === 'function');
  ok(typeof load('features/string/virtual/sub') === 'function');
  ok(typeof load('features/string/virtual/sup') === 'function');
  ok(load('features/string/virtual/at').call('a', 0) === 'a');
  ok('next' in load('features/string/virtual/code-points').call('a'));
  ok(load('features/string/virtual/pad-start').call('a', 3) === '  a');
  ok(load('features/string/virtual/pad-end').call('a', 3) === 'a  ');
  ok(load('features/string/virtual/trim-start').call(' a ') === 'a ');
  ok(load('features/string/virtual/trim-end').call(' a ') === ' a');
  ok(load('features/string/virtual/trim-left').call(' a ') === 'a ');
  ok(load('features/string/virtual/trim-right').call(' a ') === ' a');
  ok('next' in load('features/string/virtual/match-all').call('a', /./));
  ok(load('features/string/virtual').at.call('a', 0) === 'a');
  ok('next' in load('features/string/virtual/iterator').call('qwe'));
  ok('raw' in load('features/string'));
  ok(String(load('features/regexp/constructor')('a', 'g')) === '/a/g');
  ok(load('features/regexp/to-string')(/./g) === '/./g');
  ok(load('features/regexp/flags')(/./g) === 'g');
  ok(typeof load('features/regexp/match') === 'function');
  ok(typeof load('features/regexp/replace') === 'function');
  ok(typeof load('features/regexp/search') === 'function');
  ok(typeof load('features/regexp/split') === 'function');
  load('features/regexp');
  ok(load('features/json').stringify([1]) === '[1]');
  ok(load('features/json/stringify')([1]) === '[1]');
  ok(typeof load('features/date/now')(new Date()) === 'number');
  ok(typeof load('features/date/to-string')(new Date()) === 'string');
  ok(typeof load('features/date/to-primitive')(new Date(), 'number') === 'number');
  ok(typeof load('features/date/to-iso-string')(new Date()) === 'string');
  ok(load('features/date/to-json')(Infinity) === null);
  ok(load('features/date'));
  load('features/symbol/description');
  ok(load('features/symbol/has-instance'));
  ok(load('features/symbol/is-concat-spreadable'));
  ok(load('features/symbol/iterator'));
  ok(load('features/symbol/match'));
  ok(load('features/symbol/replace'));
  ok(load('features/symbol/search'));
  ok(load('features/symbol/species'));
  ok(load('features/symbol/split'));
  ok(load('features/symbol/to-primitive'));
  ok(load('features/symbol/to-string-tag'));
  ok(load('features/symbol/unscopables'));
  ok(load('features/symbol/async-iterator'));
  ok(load('features/symbol/observable'));
  ok(typeof load('features/symbol/for') === 'function');
  ok(typeof load('features/symbol/key-for') === 'function');
  ok('iterator' in load('features/symbol'));
  const Map = load('features/map');
  const Set = load('features/set');
  const WeakMap = load('features/weak-map');
  const WeakSet = load('features/weak-set');
  ok(new Map([[1, 2], [3, 4]]).size === 2);
  ok(new Set([1, 2, 3, 2, 1]).size === 3);
  ok(new WeakMap([[O = {}, 42]]).get(O) === 42);
  ok(new WeakSet([O = {}]).has(O));
  ok(load('features/map/of')([1, 2], [3, 4]) instanceof Map);
  ok(load('features/set/of')(1, 2, 3, 2, 1) instanceof Set);
  ok(load('features/weak-map/of')([{}, 1], [[], 2]) instanceof WeakMap);
  ok(load('features/weak-set/of')({}, []) instanceof WeakSet);
  ok(load('features/map/from')([[1, 2], [3, 4]]) instanceof Map);
  ok(load('features/set/from')([1, 2, 3, 2, 1]) instanceof Set);
  ok(load('features/weak-map/from')([[{}, 1], [[], 2]]) instanceof WeakMap);
  ok(load('features/weak-set/from')([{}, []]) instanceof WeakSet);
  ok(load('features/map/filter')(new Map([[1, 2], [2, 3], [3, 4]]), it => it % 2).size === 1);
  ok(load('features/map/group-by')([], it => it) instanceof Map);
  ok(load('features/map/key-by')([], it => it) instanceof Map);
  ok(load('features/map/map-keys')(new Map([[1, 2], [2, 3], [3, 4]]), it => it).size === 3);
  ok(load('features/map/map-values')(new Map([[1, 2], [2, 3], [3, 4]]), it => it).size === 3);
  ok(load('features/map/merge')(new Map([[1, 2], [2, 3]]), [[2, 4], [4, 5]]).size === 3);
  ok(load('features/set/add-all')(new Set([1, 2, 3]), 4, 5).size === 5);
  ok(load('features/set/delete-all')(new Set([1, 2, 3]), 4, 5) === false);
  ok(load('features/set/difference')(new Set([1, 2, 3]), [3, 4, 5]).size === 2);
  ok(load('features/set/every')(new Set([1, 2, 3]), it => typeof it == 'number'));
  ok(load('features/set/filter')(new Set([1, 2, 3]), it => it % 2).size === 2);
  ok(load('features/set/find')(new Set([2, 3, 4]), it => it % 2) === 3);
  ok(load('features/set/intersect')(new Set([1, 2, 3]), [1, 3, 4]).size === 2);
  ok(load('features/set/join')(new Set([1, 2, 3])) === '1,2,3');
  ok(load('features/set/map')(new Set([1, 2, 3]), it => it % 2).size === 2);
  ok(load('features/set/reduce')(new Set([1, 2, 3]), (it, v) => it + v) === 6);
  ok(load('features/set/some')(new Set([1, 2, 3]), it => typeof it == 'number'));
  ok(load('features/set/symmetric-difference')(new Set([1, 2, 3]), [3, 4, 5]).size === 4);
  ok(load('features/set/union')(new Set([1, 2, 3]), [3, 4, 5]).size === 5);
  ok('all' in load('features/promise'));
  ok(load('features/promise/try')(() => 42) instanceof load('features/promise'));
  ok('from' in load('features/observable'));
  ok(load('features/global').Math === Math);
  ok(typeof load('features/dom-collections').iterator === 'function');
  ok(typeof load('features/dom-collections/iterator') === 'function');
  ok(typeof load('features/set-timeout') === 'function');
  ok(typeof load('features/set-interval') === 'function');
  ok(typeof load('features/set-immediate') === 'function');
  ok(typeof load('features/clear-immediate') === 'function');
  ok(typeof load('features/asap') === 'function');
  ok(load('features/is-iterable')([]));
  ok(typeof load('features/get-iterator-method')([]) === 'function');
  ok('next' in load('features/get-iterator')([]));
  ok('from' in load('es/array'));
  load('es/function');
  ok(typeof load('es/map') === 'function');
  ok(typeof load('es/set') === 'function');
  ok(typeof load('es/weak-map') === 'function');
  ok(typeof load('es/weak-set') === 'function');
  ok('hypot' in load('es/math'));
  ok('MAX_SAFE_INTEGER' in load('es/number'));
  ok(load('es/parse-float')('1.5') === 1.5);
  ok(load('es/parse-int')('2.1') === 2);
  ok('assign' in load('es/object'));
  ok(typeof load('es/promise') === 'function');
  ok('ownKeys' in load('es/reflect'));
  load('es/regexp');
  ok('raw' in load('es/string'));
  ok(load('es/date'));
  ok(typeof load('es/symbol') === 'function');
  ok('Map' in load('es'));
  ok('setTimeout' in load('web/timers'));
  ok('setImmediate' in load('web/immediate'));
  load('web/dom-collections');
  ok('setImmediate' in load('web'));
  ok(load('stage/4'));
  ok(load('stage/3'));
  ok(load('stage/2'));
  ok(load('stage/1'));
  ok(load('stage/0'));
  ok(load('stage/pre'));
  ok(load('stage'));
}

ok(typeof load('features/typed/array-buffer') === 'function');
ok(typeof load('features/typed/data-view') === 'function');
ok(typeof load('features/typed/int8-array') === 'function');
ok(typeof load('features/typed/uint8-array') === 'function');
ok(typeof load('features/typed/uint8-clamped-array') === 'function');
ok(typeof load('features/typed/int16-array') === 'function');
ok(typeof load('features/typed/uint16-array') === 'function');
ok(typeof load('features/typed/int32-array') === 'function');
ok(typeof load('features/typed/uint32-array') === 'function');
ok(typeof load('features/typed/float32-array') === 'function');
ok(typeof load('features/typed/float64-array') === 'function');
ok(typeof load('features/typed').Uint32Array === 'function');
ok(typeof load('es/typed').Uint32Array === 'function');

// eslint-disable-next-line no-console
console.log(`Tested ${ tested } CommonJS entry points`);
