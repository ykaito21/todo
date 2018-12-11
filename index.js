'use strict';
// key: タスクの文字列 value: 完了しているかどうかの真偽値
const tasks = new Map();

function todo(task) {
  tasks.set(task, false);
}

function isDone(taskAndIsDonePair) {
  return taskAndIsDonePair[1];
}
function isNotDone(taskAndIsDonePair) {
  return !isDone(taskAndIsDonePair);
}

function list() {
  return Array.from(tasks)
    .filter(isNotDone)
    .map(t => t[0]);
}

function done(task) {
  if (tasks.has(task)) {
    tasks.set(task,true);
  }
}

function donelist() {
  return Array.from(tasks)
      .filter(isDone)
      .map(t => t[0]);
}

function del(task) {
  tasks.delete(task);
}

module.exports = {
  todo: todo,
  list: list,
  done: done,
  donelist: donelist,
  del: del
};
