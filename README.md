# decorators-loader

Webpack js-decorators loader for webpack. It works in conjuntion with other transpilers.

Check out [js-decorators](https://github.com/aitoroses/js-decorators).

## Use

For using it in conjuntion with another transpiler.

```js
module: {
  loaders: [
    {test: /\.js$/, loader: 'babel!decorators'}
  ]
}
```
