var Event = new Vue();
Vue.component('huahua',{
  template:`
    <div>
      I say:<input @keyup="on_change" v-model="i_said">{{i_said}}
    </div>
  `,
  methods:{
    on_change(){
      Event.$emit('huahuasaid', this.i_said)
    },
  },
  data:function(){
    return{
      i_said:'',
    }
  },
});
Vue.component('shuandan',{
  template:`
  <div>
  Hua say:{{huahua_said}}
  </div>
  `,
  data:function(){
    return{
      huahua_said: '',
    }
  },
  mounted:function(){
    var me = this;
    Event.$on('huahuasaid',function(data){
      me.huahua_said = data;
    })
  },
});
let app = new Vue({
  el:'#app',
  data:{},
});
