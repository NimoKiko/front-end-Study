# Promise

## 一.什么是promise

> promise是异步编程的一种解决方案
> 
> 异步编程：举个例子：当用户在浏览器上点击一个按钮时，如果这个业务做到一半，突然需要向服务器发送一个网络请求，
> 如果这个网络请求是同步的，那么网页这时就会发生阻塞。这时候网页可能什么都显示不出来，用户也无法做任何操作。
> 于是就有了异步操作。整体思想是，将这个网络请求封装成一个异步函数，并通过一个回调函数来获取从网络中请求来的data。
> 
> 但是当网络请求非常复杂的时候，就会出现回调地狱（因为套娃行为过多导致处理起来很麻烦）
> 
> 为了避免回调地狱的情况，在ES6中就可以使用Promise。

##二.什么情况下使用Promise

> 一般情况下，有异步操作时，使用Promise对异步操作进行封装。

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    //成功的时候调用resolve
    resolve('hello world')

    //失败的时候调用reject
    reject('error message')
  })
}).then((data) => {
  console.log(data);
  console.log(data);
  console.log(data);
  console.log(data);
}).catch(err => {
  console.log(err);
})

//第二种表现形式
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello Vuejs')
    reject('error message')
  },1000)
}).then( data => {
  console.log(data);
}, err => {
  console.log(err);
})
```
Promise将异步操作时网络请求的代码和处理的代码分离开来，如果请求成功，通过resolve()方法传递参数到then()方法中去。
如果请求失败则执行reject()方法，并将错误信息传递到catch()中

## 三.Promise的All方法

> 有时候你需要在完成多个网络请求后才会执行一些操作，这时候可以使用Promise.all()方法来实现

````js
 Promise.all([
  new Promise((resolve,reject) => {

    $ajax({
      url: 'url1',
      success: function (data) {
        resolve(data)
      }
    })
  }),
  new Promise((resolve, reject) => {
    $ajax({
      url: 'url2',
      success: function (data) {
        resolve(data)
      }
    })
  })
]).then(results => {
  results[0]
  results[1]
})
````
上述示例中，会将两个Ajax请求分别都执行完之后，将结果传到then()中，传递到参数是一个数组，上述例子中，传递到了
results中，其中，results[0]中保存的是第一个请求的执行结果；results[1]中存放的是第二个请求的执行结果
