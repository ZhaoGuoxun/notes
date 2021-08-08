# TypeScript

## 1. TS介绍

+ 以javascript为基础构建的语言
+ javascript的超集
+ 可以在任何支持javascript的平台中执行
+ 扩展了javascript并添加了类型
+ ts不能被js解析器直接执行,需要编译成js

## 2. TS环境搭建

+ 下载安装nodejs
+ `npm i -g typescript`
+ `tsc index.ts`

## 3.  TS中的types

+ number: 任意数字

+ string: 任意字符串
+ boolean: true/false
+ 字面量: 其本身
+ any: 任意类型
+ unknown: 类型安全的any
+ void: 没有值(或undefined)
+ never: 没有值,不能是任何值(函数一定报错)
+ object: 任意的js对象
+ array: 任意js数组
+ tuple: 元组,ts新增类型,固定长度数组
+ enum: 枚举,ts新增类型

## 4. 编译选项

1. ## 自动编译

```
--tsconfig.json
`tsc -w` 开启监视模式,当前路径下ts文件修改会自动编译成js
```

2. ## 配置选项

   ```json
   tsc --init 快速生成tsconfig.json文件
   {
    	//指定编译路径   
       "include": ["./src/**/*"],		//**表示任意目录 *表示任意文件
       "exclude": ["node_modules", "bower_components", "jspm_packages"],
       "files": [],
       "compilerOptions": {}
   }
   ```
   
   ```
      compilerOptions:
      	// 用来指定ts编译成的es版本
          // "ES3", "ES5", "ES6", "ES2015", "ES2016", "ES2017", "ES2018", "ES2019", "ES2020", "ES2021", "ESNext"
          "target": "ES3",
          // 指定要使用的模块化的规范
          // "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015", "ES2020", "ESNext", "None".
          "module": "es2015",
          // 指定代码运行所包含的库(宿主环境: 浏览器/node...)
          // "lib": ["dom", "ESNext.Array"]
          "outDir": "./dist",
          // 编译后整合成一个index.js文件
          // "outFile": "./dist/index.js",
          // 是否对js文件进行编译
          "allowJs": false,
          // 是否检查js的代码是否符合ts语法规范
          "checkJs": false,
          // 是否移除注释
          "removeComments": false,
          // 不生成编译后的文件
          "noEmit": false,
          // 当有错误时不生成编译文件
          "noEmitOnError": false,
          // 所有的严格检查都打开,后面的可以不写
          "strict": true,
          // js文件使用严格模式
          "alwaysStrict": true,
          // 不允许出现隐式的any,会检查ts代码中是否存在隐式的any
          "noImplicitAny": true,
          // 不允许不明确类型的this
          "noImplicitThis": false,
          // 严格的检查空值
          "strictNullChecks": true
   ```
## 5. webpack打包ts

```
1. 配置webpack环境:
npm i -D webpack webpack-cli typescript ts-loader
npm i html-webpack-plugin clean-webpack-plugin webpack-dev-server
webpack.config.js
    module.exports = {
      mode: "production",
      entry: './src/index.ts',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }]
      },
      plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin()
      ],
      resolve: {
        extensions: ['.ts', '.js']
      }
    }
```

```txt
2. 配置打包,运行
    "build": "webpack"
    "dev": "webpack server"
```

```
3. 配置babel
npm i -D @babel/core @babel/preset-env babel-loader core-js
{
    loader: "babel-loader",
    options: {
	    presets: [
            "@babel/preset-env",
            {
                targets: {
                    chrome: "88"
                },
                corejs: "3",
                useBuiltIns: "usage"  //按需加载
            }
        ]
    }
},
```

