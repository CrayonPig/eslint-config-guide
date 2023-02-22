# eslint-plugin-guide
致力于开箱即用的JavaScript、Vue、React、TypeScript的ESlint规则集合

## 安装
```shell
npm install eslint-plugin-guide --dev
```

## 使用

### 在JS中使用
```js
module.exports = {
  plugins: ["guide"],
  extends: [
    "plugin:guide/base"
  ],
};
```
### 在TS中使用
```js
module.exports = {
  plugins: ["guide"],
  extends: [
    "plugin:guide/base",
    "plugin:guide/typeScript", 
  ],
};
```

### 在React中使用
```js
module.exports = {
  plugins: ["guide"],
  extends: [
    "plugin:guide/base",
    "plugin:guide/typeScript", 
    "plugin:guide/react", 
    "plugin:guide/reactHooks", 
  ],
};
```
### 在Vue2中使用
```js
module.exports = {
  plugins: ["guide"],
  extends: [
    "plugin:guide/base",
    "plugin:guide/typeScript", 
    "plugin:guide/vue2", 
  ],
};
```
### 在Vue3中使用
```js
module.exports = {
  plugins: ["guide"],
  extends: [
    "plugin:guide/base",
    "plugin:guide/typeScript", 
    "plugin:guide/vue3", 
  ],
};
```
