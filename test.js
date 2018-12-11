'use strict';
const todo = require('./index.js');
const assert = require('assert');

todo.todo('ノート');
todo.todo('鉛筆');
assert.deepEqual(todo.list(), ['ノート', '鉛筆']);

todo.done('鉛筆');
assert.deepEqual(todo.list(), ['ノート']);
assert.deepEqual(todo.donelist(), ['鉛筆']);

todo.del('ノート');
todo.del('鉛筆');
assert.deepEqual(todo.list(), []);
assert.deepEqual(todo.donelist(), []);


console.log('テストが正常に完了しました');
