var app = new Vue({
  el:'#app',
  data:{},
  methods:{
    Testclick(){
      console.log(1);
    },
    onEnter(){
      console.log('Enter');
    },
    onLeave(){
      console.log('Leave');
    },
    onSubmit(){
      console.log('onSubmit');
    },
  },
  }
);