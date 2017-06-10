import 'babel-polyfill';

function timeout(ms = 100) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'World');
  });
}

timeout(1000)
  .then(name => {
    console.log(`Hello, ${name}`);
  })
  .catch(err => {
    throw new Error(err);
  });
