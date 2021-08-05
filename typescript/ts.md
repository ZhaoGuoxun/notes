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
   {
    	//指定编译路径   
       "include": ["./src/**/*"],		//**表示任意目录 *表示任意文件
       "exclude": ["node_modules", "bower_components", "jspm_packages"],
       "files": [],
       "compilerOptions": {}
   }
   ```

   

