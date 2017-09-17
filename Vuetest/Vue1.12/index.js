Vue.directive('fix',function(el,binding){
  var fixed = binding.value;
  if(fixed){
    el.style.position = 'fixed';
    el.style.top = '10px';
    el.style.left = 'fixed';
  }else{
    el.style.position = 'stastic';
  }
})
new Vue({
  el:'#app',
  data:{
    fixed:false,
  },
  methods:{
    fixCard(){
      this.fixed = !this.fixed;
    },
  },
});
