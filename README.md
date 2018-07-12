<img src="https://github.com/ReactiveX/rxjs/raw/master/doc/asset/Rx_Logo_S.png" alt="RxJS Logo" width="86" height="86"> RxJS - Quick Reference Guide
=====================================


[RxJS](https://github.com/ReactiveX/rxjs) is a JavaScript library for [ReactiveX](http://reactivex.io/) (Reactive Programming) which provides an API for asynchronous programming with observable streams.


## Dev Setup (Webpack and Typescript)

### Install Dev Dependencies
```
npm install --save-dev webpack webpack-dev-server typescript ts-loader
```



**Add the following to npm package.json scripts:**
```
...
"scripts": {
  "start": "webpack-dev-server --mode development"
},
...
```


**Configure Webpack**

Create `webpack.config.js` and paste the following: 
```
const path = require('path');

module.exports = {
  entry: './src/code.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.tsx' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

