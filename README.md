# @chrp/typed-css-modules-loader

Fork of https://github.com/olegstepura/typed-css-modules-loader

Simplest webpack loader for https://github.com/Quramy/typed-css-modules

You can affect how `typed-css-modules` behaves by using query parameters. The loader
will pass any query parameters you specify to the constructor of the `DtsCreator`
class. For more info on available options, please take a look here:
[DtsCreator constructor](https://github.com/Quramy/typed-css-modules#new-dtscreatoroption).


```js

const settings = {
  // ...
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          {
            test: /\.css$/,
            loader: 'typed-css-modules-loader'
          },
          'postcss-loader'
        ],
      }
    ]
  }
  // ...
}
```

in package.json, if you use husky and lint-staged:

```json
{
  "lint-staged": {
    "src/**/*.module.css": [
      "tcm -s -p",
      "git add '**/*.d.ts'"
    ],
    "@ornikar/*/src/**/*.module.css": ["tcm '@ornikar/**/src'", "git add '@ornikar/**/src/*.d.ts"]
  }
}
```

Note: `git add '**/*.d.ts'` results in `git add '**/*.d.ts' currentFileModule.module.css` so it adds both all .d.ts files and the current css file. It's not perfect and you have suggestions to improve please open an issue ! 
