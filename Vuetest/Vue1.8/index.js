Vue.component('alert',{
  template:`
  <button @click="toggle()">弹弹弹</button>
  `,
  prop:['msg'],
  methods:{
    toggle(){
      alert(this.msg);
    },
  },
  data:function(){
    return{
      text: 'test',
    } 
  }
})
let app = new Vue({
  el:'#app',
  data:{},
});
