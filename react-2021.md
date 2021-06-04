# React

## react简介

1. 采用**组件化**模式,**声明式编码**,提高开发效率及组件的复用率
2. 在React Native中可以使用React语法进行**移动端开发**
3. 使用**虚拟DOM**和优秀的**Diffing算法**,尽量减少与真实DOM的交互

```txt
关于虚拟DOM:
	1.本质是Object类型的对象
	2.虚拟DOM比较轻,真实DOM比较重
	3.虚拟DOM最终会被React转化为真实的DOM,呈现在页面上
```

## JSX语法规则

```txt
1. 定义VDOM时,不要写引号
2. 标签中混入js表达式时要用{}
3. 样式类名指定要使用className,不能是class,因为跟es6的类class冲突了
4. 内联样式,要用style={{key:value}}的形式
5. 根标签只能有一个
6. 标签必须闭合
7. 标签首字母:
   (1): 若小写字母开头,则将该标签转为html中同名元素,若html里无标签对应的元素,则报错
   (2): 若大写字母开头,react就去渲染对应的组件,若组件没有定义,则报错
```

## 组件

### 1.定义组件的两种方式

```txt
1.函数式组件
2.类式组件
	注意React.render(< ClassName />, app);react在render时,如果是首字母小写的类名,会默认去匹配html的标签名,只有大写的时候才当做一个组件,如果是函数,会执行这个函数;如果是类,内部会实例化这个类;
	函数组件里只能使用props,适用于简单组件,类组件可以使用state/props/refs,适用于复杂组件
比较:
1.类组件的性能消耗比较大，因为类组件需要创建类组件的实例，而且不能销毁。
2.函数式组件性能消耗小，因为函数式组件不需要创建实例，渲染的时候就执行一下，得到返回的react元素后就直接把中间量全部都销毁。
函数式组件是不能有状态的，但是现在有了react hooks，也可能有状态了。
```

### 2.组件实例的三大核心属性

#### 1. state

```txt
初始化: 在组件的constructor里定义(复杂组件),简单组件没有状态
修改: this.setState({})  不能直接修改,且更新是一种合并(不是替换)
```

#### 2. props

```txt
组件标签的所有属性都保存在props中,可以使用{...person}的方式批量传递属性
props是只读的,修改会报错
props做限制:添加静态属性propTypes/defaultProps, 15.5引入插件prop-types,从全局PropTypes上访问string,number...
props简写:静态属性可以直接在类中通过static的方式定义
```

#### 3. ref与事件处理

```txt
ref官方不建议大量使用
1. 字符串形式的ref,存在效率问题,官方不推荐使用
2. 回调函数形式的ref,内联的存在更新时的小问题无关紧要
3. React.createRef() API,官方最推荐的用法(需要创建容器)
```

```txt
1. 通过 onXxx 属性指定事件处理函数(注意大小写)
	React使用的是自定义(合成)事件,而不是使用的原生的DOM事件
	React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)
2. 通过 event.target 得到事件的DOM元素对象
```

#### 高阶函数/函数的柯里化

```txt
高阶函数: 如果一个函数符合下面2个规范中的任何一个,那该函数就是高阶函数
	1.若A函数,接收的参数是一个函数,那么A就可以称之为高阶函数
	2.若A函数,调用的返回值依然是一个函数,那么A就可以称之为高阶函数
函数的柯里化:通过函数调用继续返回函数的方式,实现多次接收参数最后同一统一处理的函数编码形式
```

### 3.组件通信

1. 兄弟组件通信

   >  发布订阅者模式:  pubsubjs

## 生命周期函数

```txt
旧的生命周期函数:
  1. 初始化阶段:由ReactDOM.render()触发---初次渲染
  	constructor()
  	componentWillMount()
  	render()  (必须⭐)
  	componentDidMount()  (常用⭐) 一般用于初始化,发送网络请求/订阅消息
  2. 更新阶段:由组件内部this.setState()或父组件重新render触发
  	shouldComponentUpdate()
  	componentWillUpdate()
  	render()
  	componentDidUpdate()
  3.卸载组件:由ReactDOM.unmountComponentAtNode()触发
	componentWillUnmount()	(⭐)
新的生命周期函数:
	废弃了三个生命周期函数
	新增了 getDerivedStateFromProps  state完全取决于props
 		   getSnapshotBeforeUpdate 获取更新的快照,如滚动位置
```

## React脚手架

### 脚手架介绍

1. 技术架构: react + webpack + es6 + eslint
2. 特点: 模块化 组件化 工程化

### 脚手架使用

1. `npm i -g create-react-app`
2. `create-react-app hello-react`
3. `cd hello-react`
4. `npm run start`



# 补充:

+ react项目中使用css模块化

  ```txt
  1.样式文件需要设置名称为 index.module.css
  2.import hello from './index.module.css'
    <div className={hello.title}></div>
  ```

+ react脚手架配置代理

  ```txt
  1.方法一: package.json中添加
  	"proxy": "http://localhost:3001"
  2.方法二:
  	添加/src/setupProxy.js
      const proxy = require('http-proxy-middleware');
      module.exports = (app) => {
        app.use(
          proxy('/api1', {
            target: 'http://localhost:3001',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' }
          })
        )
      }
  ```

  ****