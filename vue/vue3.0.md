# Vue3.0

## 1. 开篇

Vue3.0 六大亮点:

+ Performance: 性能比Vue2.x快1.2~2倍
+ Tree shaking support: 按需编译,体积比2.x更小
+ Composition API: 组合API(类似React Hooks)
+ Better TypeScript support
+ costom render API: 暴露了自定义渲染的API
+ Fragment,Teleport(Protal), Suspense: 更先进的组件

相较于Vue2.x的优化:

```
1. diff算法优化: 新增了静态标记(PatchFlag)
2. hoistStatic: 静态提升
3. cacheHandlers: 事件侦听器缓存,转换之后的代码没有静态标记,所以不会进行比较
4. ssr渲染
```

