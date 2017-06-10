# babel-preset-env 插件

---
## 配置

- `targets.browsers`: 需要使用  browserslist 的配置方法，但是其设置会被 targets.[chrome, opera, edge, firefox, safari, ie, ios, android, node, electron] 覆盖。

- `targets.node`: 设置为 true 或 "current" 可以根据当前 Node.js 版本进行动态转换。也可以设置为具体的数字表示需要支持的最低的 Node.js 版本。

- `targets.uglify`: 会把代码完全转换为 ES5 以支持压缩 JS 代码。

- `include` 和 `exclude` 可以当作是白名单和黑名单，分别表示 **一定会执行的转换** 和 **一定不会执行的转换** ，其项是数组。

- `useBuiltIns` 可以根据之前的配置自行添加 `polyfill` ，默认不开启。安装 `babel-polyfill` 后 **只要引入一次** 就行：

```javascript

import "babel-polyfill";

```

## 安装使用

- 安装

```shell

yarn

or

npm install

```

- 启动

```shell

gulp

```