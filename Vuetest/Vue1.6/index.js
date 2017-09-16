let app = new Vue({
  el:'#app',
  data:{},
  components:{
    'alert': {
      template: '<button @click="on_click">click</button>',
      methods: {
        on_click() {
          alert('1');
        },
      },
    }
  }
});
