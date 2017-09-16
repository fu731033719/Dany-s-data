Vue.component('like', {
  template: `
  <button :class="{liked:liked}" @click="toggle()">
  赞{{like_count}}
  </button>`,
  data:function(){
    return{
      like_count:10,
      liked:false,
    }
  },
  methods: {
    toggle() {
      if (!this.liked){
        this.like_count++;
        this.liked = !this.liked;
      }else{
        this.like_count--;
        this.liked = !this.liked;
      }
    }
  },
})
let app = new Vue({
  el:'#app',
  data:{},
});
