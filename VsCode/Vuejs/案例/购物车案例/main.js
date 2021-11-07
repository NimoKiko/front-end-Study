const app = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        date:'2021-9',
        price:52.00,
        count:1
      },
      {
        id:2,
        name:'《编程字典》',
        date:'2009-9',
        price:48.00,
        count:1
      },
      {
        id:3,
        name:'《代码大全》',
        date:'2011-9',
        price:66.00,
        count:1
      },
      {
        id:4,
        name:'《UNIX编程艺术》',
        date:'2014-9',
        price:128,
        count:1
      },
    ]
  },
  methods:{
    // getFinalPrice(price) {
    //   return '￥' + price.toFixed(2);
    // }
    increment( index ){
      this.books[index].count++
    },
    decrement( index ){
      this.books[index].count--
    },
    removeHandle(index){
      this.books.splice(index,1)
    }
  },
  filters:{
    showPrice(price){
      return '￥' + price.toFixed(2);
    }
  },
  computed:{
    totalPrice(){
      let sum = 0;
      // 方法一：
      // for( let i=0 ; i<this.books.length ; i++){
      //   sum += this.books[i].price * this.books[i].count;
      // }
      // return sum;

      // 方法二：
      // for (let i in this.books){
      //   sum += this.books[i].price * this.books[i].count;
      // }

      // 方法三：
      // for(let item of this.books){
      //   sum += item.price * item.count;
      // }
      // return sum;

      // 方法四：reduce:
      return this.books.reduce(function (preValue , book){
        return preValue + book.price * book.count
      },0)
    }
  }
})