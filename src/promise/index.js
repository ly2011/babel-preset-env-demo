// promise新建后就会立即执行
// then方法指定的回调函数,将在当前脚本所有同步任务执行完毕才会执行
// const promise = new Promise((resolve, reject) => {
//   console.log('Promise');
//   resolve();
// });

// promise.then(() => {
//   console.log('Resolved.');
// });
// for (let i = 0; i < 10000000; i++) {
//   if (i % 1000000 === 0) {
//     console.log(`i: ${i}`);
//   }
// }
// console.log('Hi!');

const p1 = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('Hello');
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(p1), 1000);
});
p2
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.error(err);
  });
