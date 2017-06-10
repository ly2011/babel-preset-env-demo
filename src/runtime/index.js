import 'babel-polyfill';

const set = new Set();
set.add(1);
for (const v of set.values()) {
  console.log(v);
}
