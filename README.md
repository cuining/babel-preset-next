# babel-preset-next

This package includes the Babel preset
7.0([more detail](https://babeljs.io/blog/2017/09/12/planning-for-7.0))

* [async-generator-functions](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-async-generator-functions)
* [class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)
* [object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-object-rest-spread)
* [decorators](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-decorators)

> ⚠️
> * babel-loader 8.0 +
> * @babel/core
> * [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)
>   v1.0.0 or [babel-minify](https://github.com/babel/minify) (options)
>   the default target
>   browser is ie 9, if you want to use high level browser like chrome 50, you
>   should upgrade your webpack to v4.0.0 or use the latest
>   uglifyjs-webpack-plugin version to replace webpack.optimize.UglifyJsPlugin

## Usage

create a file named `.babelrc` with following contents in the root folder of
your project:

```
{
  "presets": ["next"]
}
```

## Options

### `targets`

`{ [string]: number | string }`, defaults to `{ ie: 9 }`

### `debug`

`boolean`, defaults to `false`
